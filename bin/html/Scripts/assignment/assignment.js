(function(Global)
{
 "use strict";
 var assignment,Client,Entry,Summary,Result,SC$1,assignment_Templates,WebSharper,UI,TemplateHole,Var$1,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateHoleModule,TextView,TemplateInstance,Doc,AttrProxy,Text,Elt,Arrays,Strings,Seq,ListModel,List,View,Client$1,Templates;
 assignment=Global.assignment=Global.assignment||{};
 Client=assignment.Client=assignment.Client||{};
 Entry=Client.Entry=Client.Entry||{};
 Summary=Client.Summary=Client.Summary||{};
 Result=Client.Result=Client.Result||{};
 SC$1=Global.StartupCode$assignment$Client=Global.StartupCode$assignment$Client||{};
 assignment_Templates=Global.assignment_Templates=Global.assignment_Templates||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 TemplateHole=UI&&UI.TemplateHole;
 Var$1=UI&&UI.Var$1;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateHoleModule=UI&&UI.TemplateHoleModule;
 TextView=TemplateHoleModule&&TemplateHoleModule.TextView;
 TemplateInstance=Server&&Server.TemplateInstance;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Text=TemplateHoleModule&&TemplateHoleModule.Text;
 Elt=TemplateHoleModule&&TemplateHoleModule.Elt;
 Arrays=WebSharper&&WebSharper.Arrays;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 ListModel=UI&&UI.ListModel;
 List=WebSharper&&WebSharper.List;
 View=UI&&UI.View;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Entry.New=function(Type,Category,Amount,eventDate)
 {
  return{
   Type:Type,
   Category:Category,
   Amount:Amount,
   eventDate:eventDate
  };
 };
 Summary.New=function(Category,Amount)
 {
  return{
   Category:Category,
   Amount:Amount
  };
 };
 Result.New=function(Category,SumAmount)
 {
  return{
   Category:Category,
   SumAmount:SumAmount
  };
 };
 Client.Main$179$20=function(rvReversed)
 {
  return function(e)
  {
   rvReversed.Set(Client.DoSomething(TemplateHole.Value(e.Vars.Hole("texttoreverse")).Get()));
  };
 };
 Client.Main=function()
 {
  var rvReversed,b,R,_this,t,p,i;
  rvReversed=Var$1.Create$1("");
  return(b=(R=rvReversed.get_View(),(_this=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onsend",function()
  {
   return t.i;
  },function(e)
  {
   rvReversed.Set(Client.DoSomething(TemplateHole.Value(e.Vars.Hole("texttoreverse")).Get()));
  })),t)),(_this.h.push(new TextView.New("reversed",R)),_this))),(p=Handler.CompleteHoles(b.k,b.h,[["texttoreverse",0,null]]),(i=new TemplateInstance.New(p[1],assignment_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 Client.ExpTracker$155$23=function()
 {
  return function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("eventdate")).Get();
   Client.eventDate().Set(v);
  };
 };
 Client.ExpTracker$149$22=function()
 {
  return function(e)
  {
   if(Client.category().Get()!=""&&Client.amount().Get()>0)
    {
     Client.addEntry();
     TemplateHole.Value(e.Vars.Hole("category")).Set("");
     TemplateHole.Value(e.Vars.Hole("amount")).Set(0);
    }
  };
 };
 Client.ExpTracker$145$25=function()
 {
  return function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("amount")).Get();
   Client.amount().Set(v);
  };
 };
 Client.ExpTracker$141$22=function()
 {
  return function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("category")).Get();
   Client.category().Set(v);
  };
 };
 Client.ExpTracker$137$24=function()
 {
  return function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("entrytype")).Get();
   Client.entryType().Set(v);
  };
 };
 Client.ExpTracker$171$66=function()
 {
  return function()
  {
   Client.bar();
  };
 };
 Client.ExpTracker=function()
 {
  var b,G,_this,E,_this$1,_this$2,t,t$1,t$2,t$3,t$4,p,i;
  function wrapCanvas(x)
  {
   return Doc.Element("div",[],[x]);
  }
  return(b=(G=wrapCanvas(wrapCanvas(Doc.Element("canvas",[AttrProxy.Create("id","bar"),AttrProxy.OnAfterRenderImpl(function()
  {
   Client.bar();
  })],[]))),(_this=(E=Doc.Convert(function(entry)
  {
   var b$1,_this$3,_this$4,_this$5,_this$6,p$1,i$1;
   return(b$1=(_this$3=(_this$4=(_this$5=(_this$6=new ProviderBuilder.New$1(),(_this$6.h.push(new Text.New("type",Global.String(entry.Type))),_this$6)),(_this$5.h.push(new Text.New("category",Global.String(entry.Category))),_this$5)),(_this$4.h.push(new Text.New("amount",Global.String(entry.Amount))),_this$4)),(_this$3.h.push(new Text.New("eventdate",Global.String(entry.eventDate))),_this$3)),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],assignment_Templates.item(p$1[0])),b$1.i=i$1,i$1))).get_Doc();
  },Client.data().v),(_this$1=(_this$2=(t=(t$1=(t$2=(t$3=(t$4=new ProviderBuilder.New$1(),(t$4.h.push(Handler.EventQ2(t$4.k,"typechange",function()
  {
   return t$4.i;
  },function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("entrytype")).Get();
   Client.entryType().Set(v);
  })),t$4)),(t$3.h.push(Handler.EventQ2(t$3.k,"catinput",function()
  {
   return t$3.i;
  },function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("category")).Get();
   Client.category().Set(v);
  })),t$3)),(t$2.h.push(Handler.EventQ2(t$2.k,"amountinput",function()
  {
   return t$2.i;
  },function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("amount")).Get();
   Client.amount().Set(v);
  })),t$2)),(t$1.h.push(Handler.EventQ2(t$1.k,"addentry",function()
  {
   return t$1.i;
  },function(e)
  {
   if(Client.category().Get()!=""&&Client.amount().Get()>0)
    {
     Client.addEntry();
     TemplateHole.Value(e.Vars.Hole("category")).Set("");
     TemplateHole.Value(e.Vars.Hole("amount")).Set(0);
    }
  })),t$1)),(t.h.push(Handler.EventQ2(t.k,"dateinput",function()
  {
   return t.i;
  },function(e)
  {
   var v;
   v=TemplateHole.Value(e.Vars.Hole("eventdate")).Get();
   Client.eventDate().Set(v);
  })),t)),(_this$2.h.push(new TextView.New("totalbalance",Client.totalBalance())),_this$2)),(_this$1.h.push(new Elt.New("entries",E)),_this$1))),(_this.h.push(new Elt.New("graph",G)),_this))),(p=Handler.CompleteHoles(b.k,b.h,[["entrytype",0,null],["category",0,null],["amount",1,null],["eventdate",0,null]]),(i=new TemplateInstance.New(p[1],assignment_Templates.exptracker(p[0])),b.i=i,i))).get_Doc();
 };
 Client.bar=function()
 {
  return new Global.Chart("bar",Client.barChart());
 };
 Client.barChart=function()
 {
  SC$1.$cctor();
  return SC$1.barChart;
 };
 Client.barOptions=function()
 {
  SC$1.$cctor();
  return SC$1.barOptions;
 };
 Client.barData=function()
 {
  SC$1.$cctor();
  return SC$1.barData;
 };
 Client.barDataSet=function()
 {
  SC$1.$cctor();
  return SC$1.barDataSet;
 };
 Client.bdColor=function()
 {
  SC$1.$cctor();
  return SC$1.bdColor;
 };
 Client.bgColor=function()
 {
  SC$1.$cctor();
  return SC$1.bgColor;
 };
 Client.label1=function()
 {
  SC$1.$cctor();
  return SC$1.label1;
 };
 Client.data1=function()
 {
  SC$1.$cctor();
  return SC$1.data1;
 };
 Client.groupedData1=function()
 {
  SC$1.$cctor();
  return SC$1.groupedData1;
 };
 Client.newData=function()
 {
  SC$1.$cctor();
  return SC$1.newData;
 };
 Client.GetAllData=function()
 {
  return Arrays.ofSeq(Client.data());
 };
 Client.groupedData=function()
 {
  SC$1.$cctor();
  return SC$1.groupedData;
 };
 Client.addEntry=function()
 {
  Client.data().Append(Entry.New(Client.entryType().Get(),Client.category().Get(),Client.amount().Get(),Client.eventDate().Get()));
  Client.category().Set("");
  Client.amount().Set(0);
 };
 Client.totalBalance=function()
 {
  SC$1.$cctor();
  return SC$1.totalBalance;
 };
 Client.eventDate=function()
 {
  SC$1.$cctor();
  return SC$1.eventDate;
 };
 Client.amount=function()
 {
  SC$1.$cctor();
  return SC$1.amount;
 };
 Client.category=function()
 {
  SC$1.$cctor();
  return SC$1.category;
 };
 Client.entryType=function()
 {
  SC$1.$cctor();
  return SC$1.entryType;
 };
 Client.data=function()
 {
  SC$1.$cctor();
  return SC$1.data;
 };
 Client.DoSomething=function(input)
 {
  return Strings.ToCharArray(input).slice().reverse().join("");
 };
 SC$1.$cctor=function()
 {
  var r,r$1,r$2,r$3,r$4;
  SC$1.$cctor=Global.ignore;
  function m(category,entries)
  {
   return Summary.New(category,Seq.sumBy(function(entry)
   {
    return entry.Amount;
   },entries));
  }
  function p(entry)
  {
   return entry.Category;
  }
  function m$1(category,items)
  {
   return Result.New(category,Arrays.sumBy(function(item)
   {
    return item.Amount;
   },items));
  }
  SC$1.data=ListModel.Create(Global.id,List.ofArray([Entry.New("Income","Salary",500,"2024-05-19"),Entry.New("Expense","Groceries",90,"2024-05-19"),Entry.New("Expense","Groceries",30,"2024-05-22"),Entry.New("Expense","Electricity",110,"2024-05-20"),Entry.New("Expense","Internet",90,"2024-05-21")]));
  SC$1.entryType=Var$1.Create$1("Income");
  SC$1.category=Var$1.Create$1("");
  SC$1.amount=Var$1.Create$1(0);
  SC$1.eventDate=Var$1.Create$1("");
  SC$1.totalBalance=View.Map(function($1)
  {
   return $1.toFixed(2);
  },View.Map(Seq.sum,View.MapSeqCached(function(entry)
  {
   return entry.Type=="Income"?entry.Amount:-entry.Amount;
  },Client.data().v)));
  SC$1.groupedData=View.Map(Arrays.ofSeq,View.Map(function(s)
  {
   return Seq.map(function($1)
   {
    return m($1[0],$1[1]);
   },s);
  },View.Map(function(s)
  {
   return Seq.groupBy(p,s);
  },Client.data().v)));
  SC$1.newData=Client.GetAllData();
  SC$1.groupedData1=Arrays.map(function($1)
  {
   return m$1($1[0],$1[1]);
  },Arrays.groupBy(function(x)
  {
   return x.Category;
  },Arrays.filter(function(a)
  {
   return a.Type=="Expense";
  },Client.newData())));
  SC$1.data1=Arrays.map(function(arr)
  {
   return arr.SumAmount;
  },Client.groupedData1());
  SC$1.label1=Arrays.map(function(arr)
  {
   return arr.Category;
  },Client.groupedData1());
  SC$1.bgColor=["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"];
  SC$1.bdColor=["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"];
  SC$1.barDataSet={
   type:"bar"
  };
  Client.barDataSet().data=Client.data1();
  Client.barDataSet().backgroundColor=Client.bgColor();
  Client.barDataSet().borderColor=Client.bdColor();
  Client.barDataSet().borderWidth=6;
  SC$1.barData={};
  Client.barData().datasets=[Client.barDataSet()];
  Client.barData().labels=Client.label1();
  SC$1.barOptions={};
  Client.barOptions().plugins=(r={},r.title=(r$1={},r$1.display=true,r$1.text="Category-wise Expenses",r$1.font=(r$2={},r$2.size=30,r$2.family="'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",r$2.style="italic",r$2),r$1),r.subtitle=(r$3={},r$3.display=true,r$3.font=(r$4={},r$4.size=18,r$4.family="'Lucida Console', 'Courier New', 'monospace'",r$4),r$3),r);
  SC$1.barChart={
   data:Client.barData(),
   options:Client.barOptions()
  };
 };
 assignment_Templates.mainform=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"mainform"
  },h):void 0;
 };
 assignment_Templates.exptracker=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"exptracker"
  },h):void 0;
 };
 assignment_Templates.item=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"item"
  },h):void 0;
 };
}(self));
