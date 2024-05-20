namespace assignment

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server
open WebSharper.UI.Html
open type WebSharper.UI.ClientServer

type EndPoint =
    | [<EndPoint "GET /">] ExpTracker
    | [<EndPoint "GET /other">] Home

module Templating =
    open WebSharper.UI.Html

    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             li [attr.``class`` "nav-item"] [
                a [ if endpoint = act then 
                        yield attr.``class`` "active nav-link" 
                        yield attr.href (ctx.Link act)
                    else yield attr.``class`` "nav-link" 
                         yield attr.href (ctx.Link act)
                    ] [text txt]
             ]
        [
            "ExpTracker" => EndPoint.ExpTracker
            "OtherPage" => EndPoint.Home
        ]

    let Main ctx action (title: string) (body: Doc list) =
        Content.Page(
            Templates.MainTemplate()
                .Title(title)
                .MenuBar(MenuBar ctx action)
                .Body(body)
                .Doc()
        )

module Site =
    let ExpTrackerPage ctx =
        Templating.Main ctx EndPoint.ExpTracker "ExpTracker" [
            h1 [] [text "Welcome your personal finance tracker App!"]
            div [] [client (Client.ExpTracker())]
        ]
    let HomePage ctx =
        Templating.Main ctx EndPoint.Home "Home" [
            h1 [] [text "Say Hi to JavaScript!"]
            div [] [client (Client.Main())]
        ]
    

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx -> function
            |EndPoint.ExpTracker ->
                ExpTrackerPage ctx
            |EndPoint.Home ->
                HomePage ctx
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = Site.Main
        member this.Actions = [ExpTracker; Home]

[<assembly: Website(typeof<Website>)>]
do ()
