namespace assignment

open WebSharper
open WebSharper.UI
open WebSharper.UI.Notation
open WebSharper.JavaScript
open WebSharper.UI.Templating
open WebSharper.UI.Client
open WebSharper.ChartJs
open WebSharper.UI.Html

[<JavaScript>]
module Templates =   
    type MainTemplate = Templating.Template<"Main.html", ClientLoad.FromDocument, ServerLoad.PerRequest>

[<JavaScript>]
module Client =
    let DoSomething (input: string) =
        System.String(Array.rev(input.ToCharArray()))

    type Entry = { Type: string; Category: string; Amount: float; eventDate: string }
    type Summary = { Category: string; Amount: float }
    type Result ={ Category: string; SumAmount: float }

    let data = ListModel.Create(fun entry -> entry) 
                [   {Type = "Income"; Category = "Salary"; Amount = 500.0; eventDate = "2024-05-19"}
                    {Type = "Expense"; Category = "Groceries"; Amount = 90.0; eventDate = "2024-05-19"}
                    {Type = "Expense"; Category = "Groceries"; Amount = 30.0; eventDate = "2024-05-22"}
                    {Type = "Expense"; Category = "Electricity"; Amount = 110.0; eventDate = "2024-05-20"}
                    {Type = "Expense"; Category = "Internet"; Amount = 90.0; eventDate = "2024-05-21"}   ]

    let entryType = Var.Create "Income"
    let category = Var.Create ""
    let amount = Var.Create 0.0
    let eventDate = Var.Create ""

    let totalBalance =
        data.View
        |> View.MapSeqCached (fun entry ->
            match entry.Type with
            | "Income" -> entry.Amount
            | _ -> -entry.Amount
        )
        |> View.Map Seq.sum 
        |> View.Map (sprintf "%.2f")

    let addEntry () =
            data.Add { Type = entryType.Value; Category = category.Value; Amount = amount.Value; eventDate = eventDate.Value}
            category := ""
            amount := 0.0

    let groupedData =
        data.View
        |> View.Map (Seq.groupBy (fun entry -> entry.Category))
        |> View.Map (Seq.map (fun (category, entries) -> 
                        { Category = category
                          Amount = entries |> Seq.sumBy (fun entry -> entry.Amount) }
        ))
        |> View.Map Seq.toArray

    let GetAllData() =
        data |> Seq.toArray

    let newData = GetAllData()

    let groupedData1 = 
        newData
        |> Array.filter(fun a -> a.Type = "Expense")
        |> Array.groupBy (fun x -> x.Category)
        |> Array.map (fun (category, items) ->
            let sumAmount = items |> Array.sumBy (fun item -> item.Amount)
            { Category = category; SumAmount = sumAmount })

    let data1 = 
        groupedData1
        |> Array.map (fun arr -> arr.SumAmount)

    let label1 =
        groupedData1
        |> Array.map (fun arr -> arr.Category)

    let bgColor = [|
            "rgba(255, 99, 132, 0.2)";
            "rgba(54, 162, 235, 0.2)";
            "rgba(255, 206, 86, 0.2)";
            "rgba(75, 192, 192, 0.2)";
            "rgba(153, 102, 255, 0.2)";
            "rgba(255, 159, 64, 0.2)"
        |]
    
    let bdColor = [|
            "rgba(255, 99, 132, 1)";
            "rgba(54, 162, 235, 1)";
            "rgba(255, 206, 86, 1)";
            "rgba(75, 192, 192, 1)";
            "rgba(153, 102, 255, 1)";
            "rgba(255, 159, 64, 1)"
        |]  


    let barDataSet = BarChartDataSet()
    barDataSet.Data <- data1
    barDataSet.BackgroundColor <- Union2Of2 bgColor
    barDataSet.BorderColor <- Union2Of2 bdColor  
    barDataSet.BorderWidth <- 6

    let barData = ChartData()
    barData.Datasets <- [|barDataSet|]
    barData.Labels <- label1

    let barOptions = Options()
    barOptions.Plugins <- Plugin(
        Title = TitleConfig(
            Display = true,
            Text = Union1Of2 "Category-wise Expenses",
            Font = Font(
                Size = 30,
                Family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                Style = FontStyle.Italic
            )
        ),
        Subtitle = TitleConfig(
            Display = true,
            Font = Font(
                Size = 18,
                Family = "'Lucida Console', 'Courier New', 'monospace'"
            )
        )
    )
    let barChart = ChartCreate(barData, barOptions)
    let bar () = Chart("bar", barChart)

    let ExpTracker () =
        let wrapCanvas x =
            div [] [x]
        Templates.MainTemplate.ExpTracker()
            .TypeChange(fun e ->
                let value = e.Vars.entryType.Value
                entryType := value
            )
            .CatInput(fun e -> 
                let catValue = e.Vars.category.Value
                category := catValue
            )
            .AmountInput(fun e ->
                let amt = e.Vars.amount.Value
                amount := amt
            )
            .AddEntry(fun e ->
                if category.Value <> "" && amount.Value > 0.0 then
                    addEntry ()
                    e.Vars.category.Value <- ""
                    e.Vars.amount.Value <- 0.0
            )
            .DateInput(fun e ->
                let dt = e.Vars.eventDate.Value
                eventDate := dt
            )
            .TotalBalance(totalBalance)
            .Entries(
                ListModel.View data |> Doc.BindSeqCached (fun entry ->
                    Templates.MainTemplate.Item()
                        .Type(entry.Type.ToString())
                        .Category(entry.Category.ToString())
                        .Amount(entry.Amount.ToString())
                        .EventDate(entry.eventDate.ToString())
                        .Doc()
                )
            )
            .Graph(
                let x = canvas [attr.``id`` "bar";on.afterRender (fun _ -> bar () |> ignore)] [] |> wrapCanvas
                wrapCanvas x
            )
            .Doc()

    let Main () =
        let rvReversed = Var.Create ""
        Templates.MainTemplate.MainForm()
            .OnSend(fun e ->
                let res = DoSomething e.Vars.TextToReverse.Value
                rvReversed := res
            )
            .Reversed(rvReversed.View)
            .Doc()
