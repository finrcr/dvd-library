var J98= "Reverse Engineering Is Forbidden and Continuing Places You In Violation of the Page Scholar Inc. License Agreement."; 
var J3n=/JSpell Evolution Spell Checker - Copyright (c) 2009 Page Scholar Inc. All Rights Reserved/;
var J3N=/www.jspell.com/;
var J3o=/This software is designed to prevent improper usage or configuration. Please see the user manual for configuration assistance./;
var J94=/Production Release 0811d/;
var Ja=new Object();
Ja.J7n=document.location.href.indexOf("https")===0;
Ja.J2W=navigator.userAgent.toLowerCase();
Ja.J51=document.all && Ja.J2W.indexOf("opera")==-1;
Ja.J6N=document.getElementById && !document.all && Ja.J2W.indexOf("opera")==-1;
Ja.J6s=Ja.J2W.indexOf("opera")!=-1;
Ja.J4x="yes";
Ja.J2Z=new Object(); 
Ja.J8z=0; 
Ja.J5f= false; 
Ja.J5i= true; 
Ja.J5Q=/^(jS\$)/;
Ja.J60=/^[ ]+/;
Ja.J8o=/[ ]+$/;
Ja.J7O=/[.?!]\s*$/;
Ja.J2x =/[a-zA-Z0-9\u00c0-\u00d6\u00d8-\u00dd\u00e0-\u00ff\u0388-\u03ff]/;
Ja.J3M=/[0-9]/;
Ja.J3m=/[a-zA-Z\u00c0-\u00d6\u00d8-\u00dd\u00e0-\u00ff\u0388-\u03ff]/;
Ja.J4H=/^([l-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
Ja.J8Z=/^(((http(s?))|(ftp))\:\/\/)?(www.|[a-zA-Z].)[a-zA-Z0-9\-\.]+\.(com|edu|gov|mil|net|org|biz|info|name|museum|us|ca|uk)(\:[0-9]+)*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&%\$#\=~_\-]+))*$/;
Ja.J5L=null;
Ja.J3q=null;
Ja.J3Q=null;
Ja.J5m=null;
Ja.J5K=null;
Ja.J5l=null;
Ja.J5P=null;
Ja.J5q=null;
Ja.J5n=null;
Ja.J5M=null;
Ja.J5p=null;
Ja.J5O=null;
Ja.J5k=null;
Ja.J5N=null;
Ja.J5o=null;
Ja.J5j="\u0001"; 
Ja.J6H=new RegExp("&nbsp;"+Ja.J5j);
Ja.J6J=" "+Ja.J5j;
Ja.J4t=false;
Ja.J2X=null;
Ja.J4j=null;
Ja.J3p=null;
Ja.J4L=null;
Ja.J9H=-1;
Ja.J3J="j1";
Ja.J3h="j2";
Ja.J3I="j3";
Ja.J3i="j4";
Ja.J3k="j5";
Ja.J3H="j6";
Ja.J3j="j7";
Ja.J40=false;
Ja.J3X=false;
Ja.J92=new Object();
Ja.J3z=new Array();
Ja.J3Z=0;
Ja.J6x=0; 
Ja.J68=10; 
Ja.JB=false;
Ja.J1T=false;
getSpellCheckArray=function()
{
return new Array();
};
jspellAttach= function (documentBase)
{
if (!Ja.J5f)
{
alert("JSpell Not Initialized");
alert("JSpell AutoAttach: "+Ja.JC);
return;
}
if(documentBase==undefined)
documentBase=document;
var J7x=getSpellCheckArray();
if(J7x.length==0)
{
var J8h=document.getElementsByTagName("TEXTAREA");
for(var J4Y=0, J67=J8h.length; J4Y<J67; J4Y++)
{
if(J8h[J4Y].id!="jspellDebugLog" &&
J8h[J4Y].id!="myFieldInnerHTML" &&
(Ja.Jc || 
(!Ja.Jc &&
!J8h[J4Y].readonly &&
!J8h[J4Y].disabled &&
J8h[J4Y].offsetWidth>0 &&
J8h[J4Y].offsetHeight>0))
)
{
J8h[J4Y].spellcheck="false"; 
J7x[J7x.length]=[documentBase,J8h[J4Y].id];
}
}
var J5G=document.getElementsByTagName("INPUT");
for(var J4Y=0, J67=J5G.length; J4Y<J67; J4Y++)
{
if(J5G[J4Y].type=="text" &&
(Ja.Jc ||
(!Ja.Jc &&
!J5G[J4Y].disabled &&
!J5G[J4Y].readonly &&
J5G[J4Y].offsetWidth>0 && J5G[J4Y].offsetHeight>0)))
{
J5G[J4Y].spellcheck="false"; 
J7x[J7x.length]=[documentBase,J5G[J4Y].id];
}
}
var J55=document.getElementsByTagName("IFRAME");
for(var J4Y=0, J67=J55.length; J4Y<J67; J4Y++)
{
if(J55[J4Y].offsetWidth>0 && J55[J4Y].offsetHeight>0)
{
J55[J4Y].spellcheck="false"; 
J7x[J7x.length]=[documentBase,J55[J4Y].id];
}
}
var J45=document.getElementsByTagName("DIV");
for(var J4Y=0, J67=J45.length; J4Y<J67; J4Y++)
{
if(J45[J4Y].contentEditable=="true" && J45[J4Y].offsetWidth>0 && J44[J4Y].offsetHeight>0)
{
alert("Adding: "+J45[J4Y].id);
J45[J4Y].spellcheck="false"; 
J7x[J7x.length]=[documentBase,J45[J4Y].id];
}
}
}
for (var J4Y=0, J67=J7x.length; J4Y<J67; J4Y++)
{ 
var J6p=J7x[J4Y][0].getElementById(J7x[J4Y][1]);
if(J6p)
{
if (J6p.nodeName=="TEXTAREA"
|| J6p.nodeName=="INPUT"
|| (J6p.nodeName=="IFRAME" && !Ja.J2Z[J6p.id])
|| (J6p.nodeName=="DIV" && !Ja.J2Z[J6p.id]))
{
J4D=Ja.Jf(J6p); 
if(J4D==null)
{
var J6I=new Ja.Jb(J6p,J7x[J4Y][2]);
Ja.J2Z[J6I.J4z]=J6I;
J6I.JF();
} else
{
J4D.JF();	
}
}
} else
{
throw("JSpell - Error in getSpellCheckArray, Element '"+J7x[J4Y][1]+"' Not Found.");
}
}
Ja.JB=true;
if (Ja.J4x=="yes")
{ 
document.onclick=Ja.J1a;
}
} ;
jspellThesaurus=function()
{
for (var J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].JU();
}
};
jspellCheck=function()
{
if(Ja.J5f && !Ja.JB)
{
Ja.JP=function() {
jspellDetach();
Ja.JP=null;
}
jspellAttach();
jspellDialog();
} else
{
alert("ERROR: JSpell is already attached, or jspellInit has not been called before calling jspellCheck.");
}
};
jspellOnDemandCheck=function()
{
Ja.J1T=true;
if(Ja.JB!=true)
{
jspellAttach();	
}
else
{
for (var J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].Jj();
}
}
}
Ja.J1V=function(J6X,J3v)
{
if(eval("typeof "+J6X)=="undefined")
{
return J3v;
}else
{
return eval(J6X);
}
};
jspellApplySettings=function()
{
Ja.J27=Ja.J1V("jspellServerPath","/STAStatus/abc");
Ja.JZ=Ja.J1V("jspellServerURL",null);
Ja.J1e=Ja.J1V("jspellImagePath","/STAStatus/jspellimages/");
Ja.Jq=Ja.J1V("jspellDisableLearn",false);
Ja.Jz=Ja.J1V("jspellForceUpperCase",false);
Ja.JG=Ja.J1V("jspellCapitalizeSentences",true);
Ja.J1d=Ja.J1V("jspellIgnoreNumbers",true);
Ja.J1D=Ja.J1V("jspellIgnoreUpper",true);
Ja.J1C=Ja.J1V("jspellIgnoreDouble",false);
Ja.J2b=Ja.J1V("jspellShowSpellingMenu",true);
Ja.J2A=Ja.J1V("jspellShowOptionsMenu",false);
Ja.J28=Ja.J1V("jspellShowLanguageMenu",true);
Ja.Jg=Ja.J1V("jspellCallBack",null);
Ja.JP=Ja.J1V("jspellDialogCallBack",null);
Ja.J1v=Ja.J1V("jspellPostInit",null);
Ja.J1l=Ja.J1V("jspellMaxSuggestions",5);
Ja.JW=Ja.J1V("jspellDialogEnableUndo",true);
Ja.J1u=Ja.J1V("jspellPersonalDictionary","");
Ja.J1U=Ja.J1V("jspellPersonalDictionaryType","LOCAL");
Ja.J1X=Ja.J1V("jspellRealtime",true);
Ja.J2D=Ja.J1V("jspellStyles",[
["span."+Ja.J3J,""],
["span."+Ja.J3h,""],
["span."+Ja.J3I,"background: url(\""+Ja.J1e+"red.gif\") repeat-x center bottom"],
["span."+Ja.J3i,""],
["span."+Ja.J3k,""],
["span."+Ja.J3j,"background: url(\""+Ja.J1e+"cyan.gif\") repeat-x center bottom"],
["span."+Ja.J3H,"background: url(\""+Ja.J1e+"red.gif\") repeat-x center bottom"]]);
Ja.JQ=Ja.J1V("jspellDropSheetColor","lightgrey");
Ja.Jr=Ja.J1V("jspellDropSheetOpacity","25");
Ja.JR=Ja.J1V("jspellDropSheetStyle","z-index:1590; left: 0px; top: 0px; width: 100%;  height: 100%;  display: none;  position: absolute; background-color: "+Ja.JQ+"; opacity: 0."+Ja.Jr+"; filter: alpha(opacity="+Ja.Jr+"); ");
Ja.J2B=Ja.J1V("jspellDialogContainerStyle","z-index:1599; left: -500px; top: 0px; width: 300px; height: 219px; display: none;  position: absolute; border: 0px; ");
if(Ja.J51)
{
Ja.J2C=Ja.J1V("jspellDialogMaskStyle","z-index:1601; left: 0px; top: 0px; width: 300px; height: 219px; display: block; position: absolute; border-right: 1px solid #000080; border-bottom: 2px solid #000080; ");
Ja.J2d    =Ja.J1V("jspellDialogStyle","z-index:1602; left: 0px; top: 0px; width: 300px; height: 219px; display: block; position: absolute;");	
} else
{
Ja.J2C=Ja.J1V("jspellDialogMaskStyle","z-index:1601; left: 0px; top: 0px; width: 300px; height: 219px; display: block; position: absolute; border: 0px; ");
Ja.J2d    =Ja.J1V("jspellDialogStyle","z-index:1602; left: 0px; top: 0px; width: 300px; height: 219px; display: block; position: absolute; border-left: 0px solid white; border-top: 0px solid white; border-right: 1px solid #000080; border-bottom: 2px solid #000080;");
}
Ja.J1N=Ja.J1V("jspellMenuStyle"," display: none; position:absolute; width: 160px; border:1px solid #002D96; border-bottom-width: 1; z-index:1501; background: url('"+Ja.J1e+"NewGradient.gif');");
Ja.J1M=Ja.J1V("jspellMenuMaskStyle"," display: none; position: absolute; width: 160px; z-index:1500; ");
Ja.J1n=Ja.J1V("jspellMenuSpacerStyle"," background-image: url('"+Ja.J1e+"spacer.gif'); width: 100%; height: 3px; overflow: hidden; ");
Ja.J1L=Ja.J1V("jspellMenuAnchorStyle"," display: block; color: black; text-align: left; text-decoration: none; text-indent: 33px; font-size: 9pt; line-height: 12pt; font-family: Verdana, Arial, sans-serif; font-weight: bold; padding:1px; ");
Ja.J2e=Ja.J1V("jspellSubMenuAnchorStyle"," background-color: #F6F6F6; text-align: left; display: block; color: black; text-decoration: none; text-indent: 5px; font-size: 9pt; line-height: 12pt; font-family: Verdana, Arial, sans-serif; font-weight: bold; padding:1px; ");
Ja.J1m=Ja.J1V("jspellMenuHoverStyle"," background-color: #FFEEC2; background-image: none; border:1px solid #000080; padding:0px; ");
Ja.J1B=Ja.J1V("jspellIFrameBorderStyle","1px black solid");
Ja.J2c=Ja.J1V("jspellDialogHTML",'<table STYLE="background: #eeeeee; top:0px; left:0px; width: 300px; height: 220px; position: absolute;"><tr><td id="titleBarHandle" style="height: 14px; width: 270px; background: #0055E5; "><span style="float: left; height: 14px; font: bold 10px verdana, arial, sans-serif; color: white">&nbsp;Spell Checker</span></td><td align="center" style="background: #ff7666"><button STYLE="background: #ff7666; height: 14px; color: white; border: 0; font: bold 10px verdana, arial, sans-serif;" ID="jspell_finish">X</button></td></tr><tr><td colspan="2"><div id="jspellFrontDialog" style="display:block"><table align="center"><tr valign="top"><td><table STYLE="background: #eeeeee;"><tr valign="top"><td>  <span ID="jspellErrTypeLabel" STYLE="font: 8pt verdana, arial, sans-serif;">Not Found</span><br>  &nbsp;<span ID="jspellErrWord" STYLE="color: darkred; width: 160px; font: 12pt Verdana, Arial, Sans-Serif;"></span></td></tr><tr><td>  <span ID="jspellErrActionLabel" STYLE="font: 8pt verdana, arial, sans-serif;"><LABEL FOR="jspellErrActionValue">Replace With</LABEL></span><br>  &nbsp;<input TYPE="text" NAME="jspellErrActionValue" ID="jspellErrActionValue" STYLE="width: 160px; font: Verdana, Arial, Sans-Serif;"></td></tr><tr><td>  <span ID="jspellSuggLabel" STYLE="font: 8pt verdana, arial, sans-serif;"><LABEL FOR="jspellSuggList">Suggestions</LABEL></span><br>  &nbsp;<select ID="jspellSuggList" NAME="jspellSuggList" SIZE="4" STYLE="width: 160px; font: Verdana, Arial, Sans-Serif;"></select></td></tr></table></td><td ALIGN="center" VALIGN="top"><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_options" CLASS="jsd_button">Options</button><p id="optionsSpacer"><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_delete" CLASS="jsd_button">Delete</button><br><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_replace" CLASS="jsd_button">Replace</button><br><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_ignore" CLASS="jsd_button">Ignore</button><br><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_learn" CLASS="jsd_button">Learn</button><p><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_replaceAll" CLASS="jsd_button">Replace All</button><br><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_ignoreAll" CLASS="jsd_button">Ignore All</button></td></tr></table></div><div id="jspellBackDialog" style="display:none"><div style="width:100%; margin-left:auto; margin-right:auto; text-align:center;"><strong>Spell Check Canceled!</strong><br><br>Undo Corrections?<br><br><button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_undo_yes" CLASS="jsd_button">Yes</button>&nbsp;&nbsp;<button STYLE="background: #cccccc; width: 100px; font: 8pt verdana, arial, sans-serif;" ID="jspell_undo_no" CLASS="jsd_button">No</button><br></div></div></td></tr></table>');
Ja.J1j=Ja.J1V("jspellTextLanguage","enUS");
Ja.J15=Ja.J1V("jspellGUILanguage","enUS");
Ja.J1J=Ja.J1V("jspellGUIMatchesText",false);
Ja.J2R=Ja.J1V("jspellTimeout",250);
Ja.JC=Ja.J1V("jspellAutoAttach",true);
Ja.Jh=Ja.J1V("jspellCustomRegExp",null);
Ja.J1K=Ja.J1V("jspellMaxRequestTimeout",10000); 
Ja.J29=Ja.J1V("jspellDialogShowNoErrors",true);
Ja.J2a=Ja.J1V("jspellDialogShowNoErrorsMessage","No Errors Found");
Ja.Jc=Ja.J1V("jspellAttachToHiddenElements",false);
Ja.J52=Ja.J1V("jspellFloatX",10);
Ja.J53=Ja.J1V("jspellFloatY",10);
Ja.J3y=Ja.J1V("jspellDialogHalign","right");
Ja.J41=Ja.J1V("jspellDialogValign","center");
Ja.J1y=Ja.J1V("jspellRightClick",false);
}
jspellSetRightClick=function(newValue)
{
for (var J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].Ju();
Ja.J2Z[J2Y].J5Y=0;
}
Ja.J1y=newValue;
for (var J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].Jj();
}
}
jspellAreaLookup=function(J4F)
{
return Ja.Jf(J4F).J54;
};
jspellRemoveEventListener=function(J6Q,J4l,J4R,J91)
{
Ja.J20(J6Q,J4l,J4R,J91);
};
jspellAddEventListener=function(J8F,J8W,J3d,J3e)
{
Ja.Jd(J8F,J8W,J3d,J3e);
};
jspellDetach= function ()
{ 
for (var J2Y in Ja.J2Z)
{ Ja.J2Z[J2Y].Jt();
Ja.J2Z[J2Y]=null;
delete Ja.J2Z[J2Y];
}
Ja.J8z=0;
Ja.JB=false;
Ja.J1T=false;
if (Ja.J4x=="yes")
{ 
document.onclick=null;
}
} ;
jspellSync=function()
{
for (var J2Y in Ja.J2Z)
{ Ja.J2Z[J2Y].J2Q();
Ja.J2Z[J2Y]=null;
delete Ja.J2Z[J2Y];
}
};
jspellIsAttached=function()
{
return Ja.JB;
};
jspellGetErrorCount=function(J4g)
{
if(J4g!="undefined" && J4g!=null && J4g!="")
{
J4h=document.getElementById(J4g);
if(J4h!="undefined" && J4h==null)
{
return -1;
}
J2z=Ja.Jf(J4h);
if(J2z!="undefined" && J2z==null)
{
return -1;
}
return J2z.J4I;
} else
{
var J3O=0;
for(J2Y in Ja.J2Z)
J3O+=Ja.J2Z[J2Y].J4I;
return J3O;
}
}
jspellGetDialogUndoStatus=function(J4g)
{
return Ja.J40;
};
jspellGetDialogCancelStatus=function(J4g)
{
return Ja.J3X;
};
Ja.J1Q=function ()
{
};
Ja.J2g=function(J2Y,J6Q,J38,J4i)
{
this.J2Y=J2Y;
this.J6Q=J6Q;
this.J38=J38;
this.J4i=J4i;
};
Ja.J14= function (J6q)
{
var _3=""; 
eval(J6q.responseText);
if(Ja.J1U=="LOCAL")
{
var J64=Ja.J16("jspellLearned");
if(J64!=null && J64!="" && J64!="undefined")
Ja.J1G(J64);
else
Ja.J1k=new Object();
Ja.J1u="";
} else
{
Ja.J1G(_3);
}
if (!window.getComputedStyle)
{ Ja.J5i= false;
}
Ja.J4b = document.createElement("div");
Ja.J4b.id = "dropSheet";
Ja.J1H(document,"#dropSheet",Ja.JR);
Ja.J7z = document.createElement("div");
Ja.J7z.id="spellingDialogContainer";
Ja.J1H(document,"#spellingDialogContainer",Ja.J2B);
Ja.J7Y = document.createElement("div");
Ja.J7Y.id = "spellingDialog";
Ja.J7Y.innerHTML=Ja.J2c;
Ja.J1H(document,"#spellingDialog",Ja.J2d);
Ja.J7Z=document.createElement("iframe");
if(Ja.J7n && Ja.J51 && !Ja.J6s)
{
Ja.J7Z.src=Ja.J1e+"spacer.gif"; 
}
Ja.J7Z.id="spellingDialogMask";
Ja.J1H(document,"#spellingDialogMask",Ja.J2C);
Ja.J7z.appendChild(Ja.J7Z);
Ja.J7z.appendChild(Ja.J7Y);
document.body.appendChild(Ja.J4b);
document.body.appendChild(Ja.J7z);
Ja.J5L=document.getElementById("jspellErrTypeLabel");
Ja.J5m=document.getElementById("jspellErrWord"); 
Ja.J5K=document.getElementById("jspellErrActionLabel");
Ja.J5l=document.getElementById("jspellErrActionValue");
Ja.J5P=document.getElementById("jspellSuggLabel");
Ja.J5q=document.getElementById("jspellSuggList");
Ja.J5n=document.getElementById("jspell_ignore");
Ja.J5M=document.getElementById("jspell_ignoreAll");
Ja.J5p=document.getElementById("jspell_replace");
Ja.J5k=document.getElementById("jspell_delete");
Ja.J5O=document.getElementById("jspell_replaceAll");
Ja.J5N=document.getElementById("jspell_learn");
Ja.J5o=document.getElementById("jspell_options");
Ja.J5R=document.getElementById("jspell_undo_yes");
Ja.J5r=document.getElementById("jspell_undo_no");
Ja.J4u=document.getElementById("jspellFrontDialog");
Ja.J36=document.getElementById("jspellBackDialog");
Ja.Jd(Ja.J5q,"click",Ja.J2M);
Ja.Jd(Ja.J5q,"mouseup",Ja.J2M);
Ja.Jd(Ja.J5q,"dblclick",Ja.J2n);
Ja.Jd(Ja.J5o,"click",		Ja.J2s);
Ja.Jd(Ja.J5p,"click",		Ja.J2L);
Ja.Jd(Ja.J5k,"click",	Ja.J2i);
Ja.Jd(Ja.J5n,"click",			Ja.J2I);
Ja.Jd(Ja.J5N,"click",			Ja.J2J);
Ja.Jd(Ja.J5O,"click",	Ja.J2m);
Ja.Jd(Ja.J5M,"click",		Ja.J2j);
if(Ja.JW)
{
Ja.Jd(document.getElementById("jspell_finish"),"click",			Ja.J2h);
} else
{
Ja.Jd(document.getElementById("jspell_finish"),"click",			Ja.J2H);
}
Ja.J3Y=document.getElementById("titleBarHandle");
Ja.J4c=document.createElement("div");
Ja.J4c.id="dmv";
Ja.J1H(document,"#dmv",Ja.J1N);
document.body.appendChild(Ja.J4c);
Ja.J8d=document.createElement("div");
Ja.J8d.id="smv";
Ja.J1H(document,"#smv",Ja.J1N);
Ja.Jd(Ja.J8d,"mouseover",Ja.J2o);
Ja.J8d.style.display="none";
document.body.appendChild(Ja.J8d);
Ja.J8C=document.createElement("iframe");
if(Ja.J7n && Ja.J51 && !Ja.J6s)
{
Ja.J8C.src=Ja.J1e+"spacer.gif"; 
}
Ja.J8C.id="snv";
Ja.J1H(document,"#snv",Ja.J1M);
document.body.appendChild(Ja.J8C);
Ja.J4B=document.createElement("iframe");
if(Ja.J7n && Ja.J51 && !Ja.J6s)
{
Ja.J4B.src=Ja.J1e+"spacer.gif"; 
}
Ja.J4B.id="dnv";
Ja.J1H(document,"#dnv",Ja.J1M);
document.body.appendChild(Ja.J4B);
Ja.J1H(document,".spacer",Ja.J1n);
Ja.J1H(document,"#dmv a",Ja.J1L);
Ja.J1H(document,"#dmv a:hover",Ja.J1m);
Ja.J1H(document,"#smv a",Ja.J2e);
Ja.J1H(document,"#smv a:hover",Ja.J1m);
Ja.J8E=document.createElement("div");
Ja.J3l=document.createElement("div");
Ja.J4a=document.createElement("div");
Ja.J3l.style.display="none";
document.body.appendChild(Ja.J3l); 
Ja.J4a.style.display="none";
document.body.appendChild(Ja.J4a); 
Ja.J8E.style.display="none";
document.body.appendChild(Ja.J8E); 
var J7P=document.createElement("DIV");
J7P.className="spacer";
var J7Q=document.createElement("DIV");
J7Q.className="spacer";
Ja.J3l.appendChild(J7P);
var J3W=Ja.Jn("Delete Repeated",Ja.JS,false,"j$m_delrp");
var J5A=Ja.Jn("Ignore",Ja.J1F,false,"j$m_ignhf");
var J80=Ja.Jn("Spelling...",jspellDialog,false,"j$m_dlg");
Ja.J4a.appendChild(J3W);
Ja.J4a.appendChild(J5A);
Ja.J4a.appendChild(J7Q);
Ja.J4a.appendChild(J80);
var J5a=Ja.Jn("Ignore All",Ja.J1f,false,"j$m_ignal");
Ja.J3l.appendChild(J5a);
if(!Ja.Jq)
{
var J2w=Ja.Jn("Add To Dictionary",Ja.JD,false,"j$m_add");
Ja.J3l.appendChild(J2w);
}
var J5v=0;
for(J5u in _4)
J5v++;
if((Ja.J28 && J5v>1) || Ja.J2b || Ja.J2A)
{
var J7q=document.createElement("DIV");
J7q.className="spacer";
Ja.J3l.appendChild(J7q);
}
if(Ja.J28 && J5v>1)
{
Ja.J5V=document.createElement("div");
Ja.J5V.id="J5V";
for(J5u in _4)
{
var J5U=Ja.Jn(_4[J5u],Ja.JI,J5u==Ja.J1j,"j$"+J5u,J5u);
Ja.J5V.appendChild(J5U);
}
Ja.J5u=Ja.Jp("Language",Ja.J5V,"j$m_subln");
Ja.J3l.appendChild(Ja.J5u);
} 
if(Ja.J2b)
{
var J7y=Ja.Jn("Spelling...",jspellDialog,false,"j$m_spdlg");
Ja.J3l.appendChild(J7y);
}
Ja.J5f= true;
if(Ja.JC)
{
jspellAttach();
}
Ja.J1w();
} ;
Ja.JI=function(J4K,J8l)
{
if(J8l!=Ja.J1j)
{
J6j=document.getElementById("j$"+J8l);
if(J6j!=null && J6j!="undefined")
J6j.style.fontWeight="bold";
J75=document.getElementById("j$"+Ja.J1j);
if(J75!=null && J75!="undefined")
J75.style.fontWeight="normal";
Ja.J1j=J8l;
Ja.J92=new Object();
for (var J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].Ju();
Ja.J2Z[J2Y].J5Y=0;
Ja.J2Z[J2Y].Jj();
}
}
return false;
};
Ja.JO=function(J83,J4z) {
var J2v = document.createElement("A");
J2v.innerHTML=unescape(J83);
J2v.href="";
J2v.id=J4z;
J2v.style.fontWeight="normal";
J2v.onclick=Ja.J3g;
J2v.onmouseover=Ja.J3G;
return J2v;
};
Ja.J3g=function() {
window.status="";
return false;	
};
Ja.J3G=function() {
window.status="";
return true;	
}
Ja.JN=function(J6C,J3d,J3b,J4z,J3R,J8W,J3U)
{
var J44 = document.createElement("DIV");
J44.title=J3U;
J44.style.backgroundColor="#F6F6F6";
J5g=J6C.split(",");
var J8x=document.createElement("DIV");
J8x.innerHTML=J8W;
J8x.style.fontSize="0.7em";
J8x.style.fontWeight="bold";
J8x.style.paddingLeft="2px";
J8x.style.display="inline";
J44.appendChild(J8x);
for(var J4Y=0;J4Y<J5g.length;J4Y++)
{
var J2v = document.createElement("A");
J2v.innerHTML=unescape(J5g[J4Y]);
J2v.href="";
J2v.id=J4z+J4Y;
J2v.style.fontWeight="normal";
J2v.style.fontSize="0.7em";
J2v.style.display="inline";
J2v.style.backgroundImage="none";
J2v.style.textDecoration="underline";
J2v.style.paddingLeft="5px"
J2v.onclick=Ja.J3g;
J2v.onmouseover=Ja.J3G;
Ja.Jd(J2v,"click",J3d,false,J5g[J4Y]);
J44.appendChild(J2v);
}
return J44;
};
Ja.Jn= function (J6C,J3d,J3b,J4z,J3R) {
var J2v=Ja.JO(J6C,J4z);
if(J3b) 
J2v.style.fontWeight="bold";
Ja.Jd(J2v,"click",J3d,false,J3R);
return J2v;
};
Ja.Jp=function(J6C,J8c,J4z) {
var J2v=Ja.JO(J6C+" &#8250;",J4z);
Ja.J8d.appendChild(J8c);
J2v.onmouseover= function () {
var scTop=Ja.J4V();
var scLeft=Ja.J4v();
Ja.J2o();
J6Q=J2v;
if(Ja.J8d.firstChild!=null && Ja.J8d.firstChild!='undefined' && Ja.J8d.firstChild!=J8c)
{
Ja.J8d.replaceChild(J8c,Ja.J8d.firstChild);
} else
{
Ja.J8d.appendChild(J8c);
}
if(Ja.J8d.style.display=="none" || Ja.J8d.style.display=="")
{
Ja.J2P(Ja.J8d,Ja.J8C,Ja.J8d.style,"display","block","");
}
if(Ja.J8d.style.display=="block")
{
Ja.J8d.x=Ja.J18(J6Q,"left")+J6Q.offsetWidth+1+scLeft;
Ja.J8d.y=Ja.J18(J6Q,"top")-J6Q.offsetHeight+scTop;
Ja.J8d.style.left=Ja.J8d.x-Ja.JJ(J6Q,"rightedge")+"px";
Ja.J8d.style.top=Ja.J8d.y-Ja.JJ(J6Q,"bottomedge")+J6Q.offsetHeight+"px";
}
window.status="";
return true;
} ;
J2v.onmouseout=function(J4K)
{
Ja.J2O();
return true;
};
return J2v;
};
jspellInit= function ()
{
if (document.getElementById
&& document.createElement
&& !Ja.J6s)
{
jspellApplySettings();
Ja.J66=0;
Ja.J8M=0;
Ja.J43=333;
Ja.J6G=new Ja.J2U();
Ja.J6G.JL(Ja.J27,"POST","op=4&dic="+Ja.J1u,Ja.J14,jspellInit,this,false);
if(Ja.J51) 
{
try {
document.execCommand("BackgroundImageCache",false,true);
} catch(e) {}
}
J5B = new Image();
J5B.src=Ja.J1e+"spacer.gif";
J5c = new Image();
J5c.src=Ja.J1e+"NewGradient.gif";
J5C = new Image();
J5C.src=Ja.J1e+"red.gif";
J5d = new Image();
J5d.src=Ja.J1e+"yellow.gif";
} else
{
alert("Your browser is not supported. Spell Checker Disabled");
}
} ;
jspellDidYouMean=function(J83) {
return Ja.J6G.JL(Ja.J27,"POST","op=6&lang="+Ja.J1j+"&text="+J83,null,null,null,true);	
};
Ja.J1G=function(J83)
{
Ja.J1k=new Object();
var J81=J83.split(",");
for(var J4Y=0,J67=J81.length; J4Y<J67;J4Y++)
{
Ja.J1k[J81[J4Y]]=J81[J4Y+1];
J4Y++;
}
}
Ja.J2s = function()
{
alert("Coming Soon!");
}
Ja.J11=function()
{
Ja.J4t=true;
};
Ja.Jx= function (J83)
{ if (J83 === null)
{ return "null";
}
return J83.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
} ;
Ja.J2T= function (J83)
{ if (J83 === null)
{ return null;
}
J83=J83.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&amp;/g,"&");
return J83;
} ;
Ja.Jf= function (J4F)
{ if (!J4F)
{ throw "no element";
}
for (var J4z in this.J2Z)
{ var J5J=this.J2Z[J4z];
if (J5J.J4F==J4F)
{ return J5J;
}
}
return null;
} ;
Ja.J1r= function ()
{ return this.J8z++;
} ;
Ja.Jb= function (J4F,J4e)
{ if (!J4F)
{ throw "no element";
}
this.J31=false;
this.J4F=J4F;
this.J4e=J4e;
this.J4z="jA$"+Ja.J1r();
this.J5Y=0 ;
this.J5y="";
this.J5w=0;
this.J4I=0;
this.J8j=0;
this.J7w=new Object();
this.J47=null;
this.J5D=null;
this.J7L=null;
this.J6c=this;
var J6B=this ;
if (J4F.nodeName=="INPUT"
|| J4F.nodeName=="TEXTAREA")
{ this.J54=document.createElement("iframe");
if(Ja.J7n && Ja.J51 && !Ja.J6s)
{
this.J54.src=Ja.J1e+"spacer.gif"; 
}
}
this.Jj= function (J4P)
{
if(J4P!=true)
J6B.J2E();
J6B.J10(J6B.J47.body,J6B.J44);
if(J4P!=true)
J6B.J26();
J6B.JT();
Ja.J2S();
} ;
this.J2E= function ()
{ 
if (Ja.J51 && !Ja.J6s)
{ 
var J7N=this.J47.selection;
var J7B=J7N.createRange();
var J47=J7B.parentElement().ownerDocument;
if (J47!=this.J47)
{ return;
}
J7B.pasteHTML(Ja.J5j);
}
else
{ 
var J7N=this.J54.contentWindow.getSelection();
var J7B=J7N.getRangeAt(0);
J7B.insertNode(this.J47.createTextNode(Ja.J5j));
this.J47.normalize();
}
} ;
this.J26=function()
{ 
if (Ja.J51 && !Ja.J6s)
{
var J7B=this.J47.body.createTextRange();
if(J7B!=null && J7B.findText(Ja.J5j,0,4))
{
J7B.execCommand("Delete");
J7B.select();
}
}
else
if (Ja.J6s)
{
} else
{ 
if (!this.J54.contentWindow.find(Ja.J5j, false , true , false , false , false))
{
if (!this.J54.contentWindow.find(Ja.J5j, false , false , false , false , false))
{ 
return;
}
}
var J7N=this.J54.contentWindow.getSelection();
var J7B=J7N.getRangeAt(0);
J7B.deleteContents();
}
};
this.JT= function ()
{ 	var J8G="";
var J7p="";
var J8i="jR$"+Ja.J1r();
J6w:
for (var J7r in J6B.J7w)
{
if(J6B.J47.getElementById(J7r)==null)
{
delete J6B.J7w[J7r];
continue;
}
var J7R=J6B.J7w[J7r];
var J7U=J7R[1];
var J5F=Ja.J51?J7U.innerText:J7U.textContent;
if(J7U==null || J7U.className!=Ja.J3J)
continue;
if(Ja.J1k[J5F]=="")
{
J7U.className=Ja.J3k;
continue;
}
if(J5F.match("@") || J5F.match(Ja.J4H) || J5F.match(Ja.J8Z))
{
J7U.className=Ja.J3i;
continue;
}
if(Ja.Jh!=null)
{
if(J5F.match(Ja.Jh))
{
J7U.className=Ja.J3h;
continue;
}
}
if(Ja.J1d && J5F.match(Ja.J3M))
{
J7U.className=Ja.J3i;
continue;
}
if(J5F.match(Ja.J3M) &&
!J5F.match(Ja.J3m))  {
J7U.className=Ja.J3i;
continue;
}
if(Ja.J1D && J5F===J5F.toUpperCase()) 	{
J7U.className=Ja.J3i;
continue;
}
var J7u=J7R[0];
var J76=J6B.J1W(J7U);
if(!Ja.J1C)
{
if(J76!=null && J76.nodeValue==" ")
J76=J6B.J1W(J76);
if(J76!=null && J76.nodeType==3 && J76.nodeValue==J5F)
{
J7U.className=Ja.J3H;
if(Ja.J1y==true)
{
Ja.Jd(J7U,"contextmenu",J6B.J2q,false,J7U);
} else
{
if(Ja.J51)
{
Ja.Jd(J7U,"click",J6B.J2q,false,J7U);					
} else
{
Ja.Jd(J7U,"mousedown",J6B.J2q,false,J7U);
}
Ja.Jd(J7U,"contextmenu",Ja.J1a);
}
continue;
}
}
var J3D="F";
if(J5F=="i" && Ja.J1j.substr(0,2)=="en")
{
J3D="T";
} else
{
if(J5F.charAt(0)==J5F.charAt(0).toUpperCase())
{
J3D="T"; 
} else
if(Ja.JG) 
{
if(J76==null || (J76!=null && J76.nodeType==3 && J76.nodeValue.match(Ja.J7O)))
{
J3D="T";
}
}
}
if(Ja.J92[J5F] && J3D=="F")
{
J7U.className=Ja.J3h;
continue;
}
J7U.className=J8i; 
J8G+=J7p+J7r+" "+J5F+" "+J3D+" F";
J7p=" ";
}
if(J8G!="")
{
Ja.J6G.JL(Ja.J27,"POST","op=1&req="+J8i+"&lang="+Ja.J1j+"&text="+J8G,J6B.J12,J6B.J25,J8i,false);
}
};
this.JU= function ()
{ 	var J8G="";
var J7p="";
var J8i="jR$"+Ja.J1r();
J6w:
for (var J7r in J6B.J7w)
{
if(J6B.J47.getElementById(J7r)==null)
{
delete J6B.J7w[J7r];
continue;
}
var J7R=J6B.J7w[J7r];
var J7U=J7R[1];
var J5F=Ja.J51?J7U.innerText:J7U.textContent;
if(J7U==null || 
J7U.className==Ja.J3I ||
J5F.length<4)
continue;
if(J5F.match("@") || 
J5F.match(Ja.J4H) || 
J5F.match(Ja.J8Z) ||
J5F.match(Ja.J3M) ||
J5F.match(Ja.Jh) )
{
continue;
}
var J7u=J7R[0];
J7U.className=J8i; 
J8G+=J7p+J7r+" "+J5F;
J7p=" ";
}
if(J8G!="")
{
Ja.J6G.JL(Ja.J27,"POST","op=7&req="+J8i+"&lang="+Ja.J1j+"&text="+J8G,J6B.J13,J6B.J25,J8i,false);
}
};
this.J25=function(J4Z)
{
for (var J7r in J6B.J7w)
{
var J7U=J6B.J7w[J7r][1];
if(J7U)
{
if(J7U.className==J4Z)
{
J7U.className=Ja.J3J;
}
} else
{
delete J6B.J7w[J7r]; 
}
}
Ja.J11();
};
this.J13= function (J6q)
{
var J9g = J6q.responseXML;
var J47 = (J9g.firstChild.nextSibling)?J9g.firstChild.nextSibling:J9g.firstChild;
var J7f = J47.getElementsByTagName("requestid")[0].firstChild.nodeValue;
var J7w = J47.getElementsByTagName("span");
for(var J4Y=0;J4Y<J7w.length;J4Y++)
{
var J7s=J7w[J4Y];
var J7t=J7s.getElementsByTagName("id")[0].firstChild.nodeValue;
J7S=J6B.J47.getElementById(J7t);
if(J7S!=null)
{
if(J7S.className==J7f)
{ 
J7S.className=Ja.J3j;
J6B.J7w[J7t][3]=J7s.getElementsByTagName("wordset");
if(Ja.J1y==true)
{
Ja.Jd(J7S,"contextmenu",J6B.J2q,false,J7S);
} else
{
if(Ja.J51)
{
Ja.Jd(J7S,"click",J6B.J2q,false,J7S);					
} else
{
Ja.Jd(J7S,"mousedown",J6B.J2q,false,J7S);
}
Ja.Jd(J7S,"contextmenu",Ja.J1a);
}
}
}
}	
};
this.J12= function (J6q)
{
var J4J=J6q.responseText.split(" ");
for(var J4Y=1, J67=J4J.length; J4Y<J67; J4Y++)
{
J5D=J6B.J47.getElementById(J4J[J4Y]);
if(J5D!=null)
{
if(J5D.className==J4J[0])
{
J5D.className=Ja.J3I;
J6B.J7w[J4J[J4Y]][2]=J4J[++J4Y].split(",");
if(Ja.J1y==true)
{
Ja.Jd(J5D,"contextmenu",J6B.J2q,false,J5D);
} else
{
if(Ja.J51)
{
Ja.Jd(J5D,"click",J6B.J2q,false,J5D);					
} else
{
Ja.Jd(J5D,"mousedown",J6B.J2q,false,J5D);
}
Ja.Jd(J5D,"contextmenu",Ja.J1a);
}
}
}
}
J6B.J4I=0;
for (var J7r in J6B.J7w)
{
var J7U=J6B.J7w[J7r][1];
if(J7U)
{
if(J7U.className==J4J[0])
{
if(J6B.J7w[J7r][0]==Ja.J21((Ja.J51?J7U.innerText:J7U.textContent)))
{
J7U.className=Ja.J3h;
Ja.J92[J6B.J7w[J7r][0]]=true;
}
else
{
J7U.className=Ja.J3J;
}
}
if(J7U.className===Ja.J3I || J7U.className===Ja.J3H)
{
J6B.J4I++;
}	
} else
{
delete J6B.J7w[J7r]; 
}
}
Ja.J2S();
} ;
this.JV= function (J4K,J7D)
{ 
if (J7D=="No Suggestions")
{ Ja.J2X.className=Ja.J3i;
J6B.J4I--;
Ja.J2S();
}
else
{ 
J6B.JH(J7D);
}
return false;
} ;
this.Ji=function(J2X,J6k)
{
Ja.J3E[J2X.id]={"J2Y":J6B,
"J4F":J2X,
"J78":J6B.J7w[J2X.id][0],
"J6k":J6k,
"J77":J2X.className};
J2X.innerHTML=J2X.innerHTML.replace(new RegExp(J6B.J7w[J2X.id][0]),unescape(J6k));
J2X.className=Ja.J3h;
}
this.JH= function (J6k)
{
if(J6B.J7w[Ja.J2X.id][0]!='')
Ja.J2X.innerHTML=Ja.J2X.innerHTML.replace(new RegExp(J6B.J7w[Ja.J2X.id][0]),unescape(J6k));
else
Ja.J2X.innerHTML=unescape(J6k);
Ja.J2X.className=Ja.J3h;
this.J2u(Ja.J2X,J6k);
Ja.J2S();
} ;
this.J2u=function(J2X,J6k)
{
if(Ja.J1y==true)
{
Ja.J20(J2X,"contextmenu",J6B.J2q,false);
} else
{
if(Ja.J51)
{
Ja.J20(J2X,"click",J6B.J2q,false);	
} else
{
Ja.J20(J2X,"mousedown",J6B.J2q,false);
}
Ja.J20(J2X,"contextmenu",Ja.J1a,false);
}
J6B.J7w[J2X.id][0]=''; 
J6B.J4I--;
};
this.J1E=function()
{
for (var J7r in this.J7w)
{
var J7U=this.J7w[J7r][1];
if(J7U!=null && J7U.innerHTML===Ja.J2X.innerHTML)
{
J7U.className=Ja.J3i;
}
}
Ja.J2S();
};
this.J22=function(J6R,J6k) {
for (var J7r in this.J7w)
{
var J7U=this.J7w[J7r][1];
if(J7U!=null && J7U.innerHTML===J6R)
{
this.Ji(J7U,J6k);
}
}
};
this.Jl=function()
{
while (Ja.J8E.childNodes.length>0)
{ Ja.J20(Ja.J8E.firstChild,"click",J6B.JV);
var J7d=Ja.J8E.removeChild(Ja.J8E.firstChild);
J7d=null;
delete J7d;
}
};
this.J2q= function (J4K,J2X)
{
Ja.J4L=J4K.type;
if (window.event)
J4K.cancelBubble= true;
else
if (J4K.stopPropagation)
J4K.stopPropagation();
Ja.J2X=J2X;
while(Ja.J2X!=null && Ja.J2X.nodeName!="SPAN")
Ja.J2X=Ja.J2X.parentNode;
if (Ja.Jb.J19(Ja.J2X.ownerDocument) !== "")
{ return;
}
if (Ja.J2X.className==Ja.J3h)
{
return;
}
J6B.Jl();
Ja.J3p=J6B;
if(Ja.J2X.className==Ja.J3H)
{
Ja.Jk();
Ja.J4c.appendChild(Ja.J4a);
Ja.J4a.style.display="block";
} else if(Ja.J2X.className==Ja.J3j)
{
Ja.Jk();
J9e=J6B.J7w[Ja.J2X.id][3];
for(var J4Y=0;J4Y<J9e.length;J4Y++)
{
J9D=J9e[J4Y];	
J9d=J9D.getElementsByTagName("words")[0].firstChild.nodeValue;
J3U=J9D.getElementsByTagName("def")[0].firstChild.nodeValue;
J8W=J9D.getElementsByTagName("type")[0].firstChild.nodeValue;
Ja.J8E.appendChild(Ja.JN(J9d,J6B.JV,true,"j$m_"+J4Y,J9d,J8W,J3U));
}
Ja.J4c.appendChild(Ja.J8E);
Ja.J8E.style.display="block";
Ja.J3l.style.display="block"; 
} else
{
J8e=J6B.J7w[Ja.J2X.id][2];
if(Ja.Jz)
{
for(J4Y=0, J67=J8e.length;J4Y<J67 && J4Y<Ja.J1l; J4Y++)
{
J8e[J4Y]=J8e[J4Y].toUpperCase();
}
}
if (J8e[0].length==0)
{ Ja.J8E.appendChild(Ja.Jn("No Suggestions",J6B.JV,true,"j$m_nosg","No Suggestions"));
} else
{
for (J4Y=0, J67=J8e.length; J4Y<J67 && J4Y<Ja.J1l; J4Y++)
{
while(J8e[J4Y].indexOf("_")!=-1)
{
J8e[J4Y]=J8e[J4Y].replace("_"," ");
}
Ja.J8E.appendChild(Ja.Jn(J8e[J4Y],J6B.JV,true,"j$m_"+J4Y,J8e[J4Y]));
}
}
Ja.Jk();
Ja.J4c.appendChild(Ja.J8E);
Ja.J4c.appendChild(Ja.J3l);
Ja.J8E.style.display="block";
Ja.J3l.style.display="block"; 
}
Ja.Jv(J4K);
} ;
} ;
Ja.J23=function(J6R,J6k)
{
for(J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].J22(J6R,J6k);
}
Ja.J2S();
};
Ja.Jb.prototype.JM=function(J6Q,J3P)
{
var J8J = this.J7L;
var J62=null;
var J8p=null;
var J61;
var J8O;
var J4y = this.J2F(J3P.nodeValue);
if(Ja.J51)
{
if(J3P.parentNode.nodeName!="A")
{
J61 = Ja.J60.exec(J4y);
if (J61 !== null) {
J62 = this.J47.createTextNode(J61[0]);
J4y = J4y.substring(J61[0].length);
}
J8O = Ja.J8o.exec(J4y);
if (J8O !== null) {
J8p = this.J47.createTextNode(J8O[0]);
J4y = J4y.substring(0, J4y.length - J8O[0].length);
}
if (J62) {
J6Q.insertBefore(J62, J3P);
J62=null;
}
J8J.innerHTML = J4y;
while (J8L = J8J.firstChild) {
if(J8L.nodeName=="SPAN")
{
this.J7w[J8L.id]=new Array(Ja.J21(J8L.innerHTML),J8L);
}
J6Q.insertBefore(J8L, J3P);
}
if (J8p) {
J6Q.insertBefore(J8p, J3P);
J8p=null;
}
J6Q.removeChild(J3P);
}
} else
{
J8J.innerHTML = J4y;
while (J8L = J8J.firstChild) {
if(J8L.nodeName=="SPAN")
{
this.J7w[J8L.id]=new Array(Ja.J21(J8L.innerHTML),J8L);
}
J6Q.insertBefore(J8L, J3P);
}
J6Q.removeChild(J3P);
}
};
Ja.J90=":/"+"/"; 
Ja.Jb.prototype.J2F = function (J83) {
J83=J83.replace(/&/g,"\ufffd").replace(/</g,"\ufffe").replace(/>/g,"\uffff");
J83=J83.replace(Ja.J90,"\ufffc");
var J3C = "";
var J9c = "";
var J8K = "";
var J4k = "";
var J6i = " ";
for (var J5I = 0; J5I < J83.length; J5I++) {
J71 = J3C;
J3C = J83.charAt(J5I);
if (J5I + 1 < J83.length) {
J6i = J83.charAt(J5I + 1);
} else {
J6i = " ";
}
if (J3C.match(Ja.J2x)  
|| ((J3C==Ja.J5j || J3C=="'") &&
J6i.match(Ja.J2x) &&
J71.match(Ja.J2x))
|| (J3C.match(/[.@!]/)  && J6i.match(Ja.J2x))
|| (J3C=='-' && J9c.match(/[.]/))
) {
J9c += J3C;
} else 
{
if (J9c.length > 0) {
J8K+=this.J1o(J9c,J4k);
J4k = "";
J9c = "";
}
J8K += J3C;
}
}
if (J9c !== "") {
J8K+=this.J1o(J9c,J4k);
}
return J8K.replace(/\ufffc/g,Ja.J90).replace(/\ufffd/g,"&amp;").replace(/\ufffe/g,"&lt;").replace(/\uffff/g,"&gt;");
};
Ja.Jb.prototype.J1o=function(J9c,J4k)
{
var J8m="<SPAN ";
J8m+="id=\"";
J8m+="jS$"+Ja.J1r();
J8m+="\"";
J8m+=" class=\"";
J8m+=(Ja.J3J);
J8m+="\">";
J8m+=J9c;
J8m+="</SPAN>";
J8m+=J4k;
return J8m;
};
Ja.JS=function()
{
var J7T=Ja.J2X.previousSibling;
if(J7T!=null && J7T!="undefined" && J7T.nodeType===3 && J7T.nodeValue===" ")
{
var JA=J7T.previousSibling;
if(JA!=null && JA!="undefined" && JA.firstChild.nodeValue!="" && JA.firstChild.nodeValue.toLowerCase()==Ja.J2X.innerHTML.toLowerCase())
{
Ja.J2X.parentNode.removeChild(Ja.J2X);
delete Ja.J2X;
J7T.parentNode.removeChild(J7T);
delete J7T;
Ja.J2S();
}
}
};
Ja.J2f=function (J6h, J93, J4n, J70, J48, J7n) {
document.cookie= J6h + "=" + escape(J93) +
((J4n) ? "; expires=" + J4n.toGMTString() : "") +
((J70) ? "; path=" + J70 : "") +
((J48) ? "; domain=" + J48 : "") +
((J7n) ? "; secure" : "");
};
Ja.J16=function(J6h) {
var J3u = document.cookie;
var J73 = J6h + "=";
var J38 = J3u.indexOf("; " + J73);
if (J38 == -1) {
J38 = J3u.indexOf(J73);
if (J38 != 0) return null;
} else {
J38 += 2;
}
var J4i = document.cookie.indexOf(";", J38);
if (J4i == -1) {
J4i = J3u.length;
}
return unescape(J3u.substring(J38 + J73.length, J4i));
};
Ja.JD=function()
{
Ja.J1k[Ja.J2X.innerHTML]="";
if(Ja.J1U==="LOCAL")
{
var J6n = new Date();
var J33 = new Date(0);
var J7H = J33.getTime();
if (J7H > 0)
J6n.setTime(J6n.getTime() - J7H);
J6n.setTime(J6n.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
var J5H=false;
for(J65 in Ja.J1k)
{
if(J5H==true)
J9E+=",";
else
J9E="";
J5H=true;
J9E+=J65+","+Ja.J1k[J65];
}
Ja.J2f("jspellLearned",J9E,J6n);
} else
{
Ja.J6G.JL(Ja.J27,"POST","op=3&text="+Ja.J2X.innerHTML+"&dic="+Ja.J1u,Ja.J1Q,false);
}
Ja.J1f();
};
Ja.J1f=function()
{
for(J2Y in Ja.J2Z)
{
Ja.J2Z[J2Y].J1E();
}
};
Ja.J1F= function (J9a) { 
if(J9a==null || J9a==undefined || J9a[1]==undefined)
{
Ja.J2X.className=Ja.J3i;
} else
{
J9a[1].className=Ja.J3i;
}
Ja.J2S();
return false;
} ;
Ja.J2S=function()
{
if(Ja.Jg!="undefined" && Ja.Jg!=null)
{
Ja.Jg();
}
};
Ja.J2t=function()
{
if(Ja.JP!="undefined" && Ja.JP!=null)
{
Ja.JP();
}
};
Ja.J1w=function()
{
if(Ja.J1v!="undefined" && Ja.J1v!=null)
{
Ja.J1v();
}
}
Ja.Jb.prototype.J1A= function ()
{ var J4y=Ja.Jx(this.J4F.value);
J4y=J4y.replace(/\r\n/g,"<BR>").replace(/\n/g,"<BR>");
return J4y;
} ;
Ja.Jb.prototype.JF= function ()
{
if(!this.J31)
{
if (!Ja.Jc && this.J4F.offsetWidth === 0)
{
throw "Error: Invalid attempt to spell check a hidden element... check value of jspellAttachToHiddenElements variable or other program logic.";
}
if (this.J4F.nodeName=="TEXTAREA" || this.J4F.nodeName=="INPUT") 
{
if (Ja.J5i)
{
var J3L=window.getComputedStyle(this.J4F,null);
this.J3A=
"body {color: "+J3L.getPropertyValue("color")+"; "+
"font-family: "+J3L.getPropertyValue("font-family")+"; "+
"font-size: "+J3L.getPropertyValue("font-size")+"; "+
"font-style: "+J3L.getPropertyValue("font-style")+"; "+
"font-variant: "+J3L.getPropertyValue("font-variant")+"; "+
"font-weight: "+J3L.getPropertyValue("font-weight")+"; "+
"letter-spacing: "+J3L.getPropertyValue("letter-spacing")+"; "+
"margin-left: "+J3L.getPropertyValue("margin-left")+"; "+
"margin-right: "+J3L.getPropertyValue("margin-right")+"; "+
"margin-top: "+J3L.getPropertyValue("margin-top")+"; "+
"margin-bottom: "+J3L.getPropertyValue("margin-bottom")+"; "+
"padding-left: 1px; "+
"padding-right: "+J3L.getPropertyValue("padding-right")+"; "+
"padding-top: "+J3L.getPropertyValue("padding-top")+"; "+
"padding-bottom: "+J3L.getPropertyValue("padding-bottom")+"; ";
this.J3A+="background-color: "+J3L.getPropertyValue("background-color")+"; }";
}
else
{
var J3r=this.J4F.currentStyle;
this.J3A="body {color: "+J3r.color+"; "+
"font-family: "+J3r.fontFamily+"; "+
"font-size: "+J3r.fontSize+"; "+
"font-style: "+J3r.fontStyle+"; "+
"font-variant: "+J3r.fontVariant+"; "+
"font-weight: "+J3r.fontWeight+"; "+
"letter-spacing: "+J3r.letterSpacing+"; "+
"margin-left: "+J3r.marginLeft+"; "+
"margin-right: "+J3r.marginRight+"; "+
"margin-top: "+J3r.marginTop+"; "+
"margin-bottom: "+J3r.marginBottom+"; "+
"padding-left: 1px; "+
"padding-right: 4px; "+
"padding-top: "+J3r.paddingTop+"; "+
"padding-bottom: 1px; ";
this.J3A+="background-color: "+J3r.backgroundColor+"; }";
}
this.J44=null;
this.J54.id=this.J4z;
this.J54.style.display="none";
this.J54.style.overflow="auto";
this.J54.style.position=this.J4F.style.position;
this.J54.style.top=this.J4F.offsetTop; 
this.J54.style.left=this.J4F.offsetLeft; 
this.J54.style.marginTop=this.J4F.style.marginTop;
this.J54.style.marginBottom=this.J4F.style.marginBottom;
this.J54.style.borderTop=this.J4F.style.borderTop;
this.J54.style.borderLeft=this.J4F.style.borderLeft;
this.J54.style.borderRight=this.J4F.style.borderRight;
this.J54.style.paddingTop=this.J4F.style.paddingTop;
this.J54.style.paddingLeft=this.J4F.style.paddingLeft;
if(Ja.J51)
{
this.J54.style.paddingRight="2px"; 
this.J54.style.paddingBottom="2px";
}
this.J54.style.border=Ja.J1B;
var savedWidth=this.J4F.offsetWidth;
var savedHeight=this.J4F.offsetHeight>0?this.J4F.offsetHeight-1:0;
this.J54.style.width=savedWidth;
this.J54.style.height=savedHeight;
this.J54.style.margin="0px";
this.J54.frameBorder="0";
if (this.J4F.nodeName=="INPUT")
{ this.J54.scrolling="no";
}
else
if (this.J4F.nodeName=="TEXTAREA"
&& !Ja.J5i)
{ this.J54.scrolling="yes";
}
this.J4F.parentNode.insertBefore(this.J54,this.J4F);
this.J4G=this.J4F.style.display;
this.J4F.style.display="none";
this.J54.style.display="inline";
this.J47=this.J54.contentWindow.document;
this.J47.designMode="On";
this.J47=this.J54.contentWindow.document; 
this.J54.style.width=savedWidth+"px";
this.J54.style.height=savedHeight+"px";
this.J47.open();
this.J47.write("<html>");
this.J47.write("<head>");
this.J47.write("<style>");
this.J47.write(this.J3A); 
this.J47.write("p {padding: 0px; margin: 0px}");
this.J47.write("a {color: black; text-decoration: none}");
this.J47.write("img { display: none}");
for(J86=0;J86<Ja.J2D.length;J86++)
{
this.J47.write(Ja.J2D[J86][0]+" {"+Ja.J2D[J86][1]+"}");
}
this.J47.write("</style>");
this.J47.write("<title>"+this.J4z+"</title>");
this.J47.write("</head>");
this.J47.write("<body>");
this.J47.write(this.J1A());
this.J47.write("</body></html>");
this.J47.close();	     
}
else if (this.J4F.nodeName=="IFRAME")
{
this.J54=this.J4F;
this.J44=null;
this.J47=this.J54.contentWindow.document;
Ja.JE(this.J47,Ja.J2D);
} else
{ 
this.J54=null;
this.J44=this.J4F;
this.J47=document;
Ja.JE(this.J47,Ja.J2D);
}
this.J7L= this.J47.createElement("pre");
this.J47.body.style.cursor="text";
if(this.J44)
{
if(!this.J44.id)
this.J44.id="j$_"+Ja.J7b(5);
Ja.Jd(this.J44,"keyup",this.J1I,false,this);
}
else
{
if(Ja.J51)
{
if(!this.J47.body.id)
this.J47.body.id="j$_"+Ja.J7b(5);
Ja.Jd(this.J47.body,"keyup",this.J1I,false,this);
} else
{
if(this.J47.body && this.J47.body.spellcheck)
this.J47.body.spellcheck=false;
if(!this.J47.id)
{
this.J47.firstChild.id="j$_"+Ja.J7b(5);
this.J47.firstChild.spellcheck=false; 
}
Ja.Jd(this.J47,"keyup",this.J1I,false,this);
}
}
this.Jj(true); 
this.J31=true;
}
};	
Ja.Jb.prototype.J1I=function(J4C,J7l) 
{
if(Ja.J1T)
return;
var J6c=J7l;
var J5s=J4C.keyCode ? J4C.keyCode : J4C.which ? J4C.which : J4C.charCode;
if(J5s==244 || J5s==18 || J5s==17 || J5s==16 || J6c.J5w==18 || J6c.J5w==17 || J6c.J5w==16) 
{
J6c.J5w=J5s;
return;
} else
{
J6c.J5w=J5s;
}
var J74 = String.fromCharCode(J5s).toLowerCase();
if(J4C.ctrlKey && !(J74=="v" || J74=="x"))
{
return;
}
Ja.J1a();
if(J4C.shiftKey && (J5s<45))
return;
if(J5s==27 || (J5s>32 && J5s<46))
return;
if(Ja.J1X==true)
{
clearTimeout(J6c.J8j);
J6c.J8j=setTimeout(J6c.Jj,Ja.J2R);
}
};
Ja.J1H=function (J47,J7o,J86)
{
if (Ja.J5i)
{
J8k=J47.createElement("div");
var J87="<STYLE>";
J87+=J7o+" ";
J87+="{";
J87+=J86;
J87+="}";
J87+="</STYLE>";
J8k.innerHTML=J87;
J47.getElementsByTagName("HEAD")[0].appendChild(J8k.firstChild);
} else
{
if (!J47.styleSheets.length)
{ J47.createStyleSheet();
}
var J88=J47.styleSheets[J47.styleSheets.length-1];
J88.addRule(J7o,J86);
}
};
Ja.JE= function (J47,J89)
{
if (Ja.J5i)
{ J8k=J47.createElement("div");
var J87="<STYLE>";
for (J86=0;J86<J89.length;J86++)
{ J87+=J89[J86][0]+" {"+J89[J86][1]+"} ";
}
J87+="</STYLE>";
J8k.innerHTML=J87;
if(J47.getElementsByTagName("HEAD")!="undefined")
{
J47.getElementsByTagName("HEAD")[0].appendChild(J8k.firstChild);
}
}
else
{
if (!J47.styleSheets.length)
{ J47.createStyleSheet();
}
var J88=J47.styleSheets[J47.styleSheets.length-1];
for (J86=0;J86<J89.length;J86++)
{
if(J89[J86][1]!="") 
J88.addRule(J89[J86][0],J89[J86][1]);
}
}
};
Ja.Jb.prototype.J2Q=function()
{
if(this.J4F!=this.J54)
{
var J6K=this.Je();
this.J4F.value=J6K;
}
};
Ja.Jb.prototype.Jt= function ()
{
if(this.J31)
{
clearTimeout(this.J8j);
if(this.J44)
{
Ja.J20(this.J44,"keyup",this.J1I);
}
if(Ja.J51)
{
Ja.J20(this.J47.body,"mouseup",Ja.J1a);	
Ja.J20(this.J47.body,"keyup",this.J1I );		
} else
{
Ja.J20(this.J47.body,"mousedown",Ja.J1a);
Ja.J20(this.J47,"keyup",this.J1I );		
}
Ja.J20(this.J47.body,"keydown",Ja.J1a);
this.J31=false;
this.Ju(); 
this.Js();
var J6K=this.Je();
if (this.J4F!=this.J54)
{ 
this.J4F.parentNode.removeChild(this.J54);
this.J4F.style.display=this.J4G;
this.J54=null;
delete this.J54;
this.J4F.value=J6K;
}
this.J7w=null;
delete this.J7w;
this.J4z=null;
delete this.J4z;
}
} ;
Ja.Jb.prototype.Ju=function()
{
for (var J7r in this.J7w)
{
var J7U=this.J47.getElementById(J7r); 
if(J7U!=null)
{
J7U.className=Ja.J3J;
if(Ja.J1y==true)
{
Ja.J20(J7U,"contextmenu",this.J2q,false);
} else
{
if(Ja.J51)
{
Ja.J20(J7U,"click",this.J2q,false);	
} else
{
Ja.J20(J7U,"mousedown",this.J2q,false);
}
Ja.J20(J7U,"contextmenu",Ja.J1a,false);
}
} else
{
delete this.J7w[J7r];
}
}
};
Ja.J20= function (J6Q,J4l,J4R,J91) { 
try {
var J5s=J6Q.id+J4l;
Ja.JY[J5s]=null;
if (J6Q.removeEventListener)
{ 
J6Q.removeEventListener(J4l,Ja.Jy,J91);
return true;
}
else
if (J6Q.detachEvent)
{ var J7a=J6Q.detachEvent("on"+J4l,Ja.Jy);
return J7a;
}
} catch (e) {
}
};
Ja.JX = function(J8F,J8W,J3d,J3e,J3R)
{
this.J8F=J8F;
this.J8W=J8W;
this.J3d=J3d;
this.J3e=J3e;
this.J3R=J3R;
this.J5s=null;
if(J8F.id)
this.J5s=J8F.id+J8W;
else
if(J8F.firstChild)
if(J8F.firstChild.id)
this.J5s=J8F.firstChild.id+J8W;	
if(this.J5s==null)
{
if(J8F==window)
this.J5s="window"+J8W;	
}
}
Ja.JY=Object();
Ja.Jy=function(J4C)
{
var J8f;
if (!J4C) var J4C = window.event;
if (J4C.target) 
J8f = J4C.target;
else if (J4C.srcElement) 
J8f = J4C.srcElement;
if (J8f && J8f.nodeType == 3) 
J8f = J8f.parentNode;
var J5s=null;	
if(J8f && J8f.id)	
J5s=J8f.id+J4C.type;
else
if(J8f && J8f.firstChild)
if(J8f.firstChild.id)
J5s=J8f.firstChild.id+J4C.type;
if(J5s==null)
{
J5s="window"+J4C.type;	
}
while(!Ja.JY[J5s])
{
if(J8f.parentElement)
{
J8f=J8f.parentElement;
} else
if(J8f.parentNode)
{
J8f=J8f.parentNode;
} else
break;
if(J8f.id)	
J5s=J8f.id+J4C.type;
else
if(J8f.firstChild)
if(J8f.firstChild.id)
J5s=J8f.firstChild.id+J4C.type;
}
if(Ja.JY[J5s])
{
J3R=Ja.JY[J5s].J3R;	
if(J3R)
Ja.JY[J5s].J3d(J4C,J3R);
else
Ja.JY[J5s].J3d(J4C);
} 
return false;
};
Ja.Jd= function (J8F,J8W,J3d,J3e,J3R)
{ 
var e=new Ja.JX(J8F,J8W,J3d,J3e,J3R);
if(e.J5s!=null)
Ja.JY[e.J5s]=e;
if (J8F.addEventListener)
{
J8F.addEventListener(J8W,Ja.Jy,J3e);
}
else
if (J8F.attachEvent)
{
J8F.attachEvent("on"+J8W,Ja.Jy);
}
else
{
J8F["on"+J8W]=Ja.Jy;
}
} ;
Ja.Jb.J19= function (J47)
{ var J8P="";
if (J47.getSelection)
{ J8P=J47.getSelection()+'';
}
else
if (J47.selection)
{ J8P=J47.selection.createRange().text;
}
else
return "";
return J8P;
} ;
Ja.Jb.prototype.J10 = function (J6Q,J44) {
var J5X=null;
if(J44!=null)
J6Q=J44;
var J82=new Date().getTime();
if(J6Q.className!="undefined" && J6Q.className==Ja.J1c)
return;
for (var J4Y = 0; J4Y < J6Q.childNodes.length; J4Y++) {
var J3P=J6Q.childNodes[J4Y];
if(!J3P)
continue;
if (J3P.nodeType == 3) {
if(J3P.length==0)
{
J6Q.removeChild(J3P);
J4Y--;
continue;
}
if(J6Q.childNodes[J4Y+1] && J6Q.childNodes[J4Y+1].nodeType===3 && !J6Q.childNodes[J4Y+1].nodeValue.charCodeAt(0)!=160) {
J3P.nodeValue+=J6Q.childNodes[J4Y+1].nodeValue;
J6Q.removeChild(J6Q.childNodes[J4Y+1]);
J4Y--;
continue;
}
if(
J3P.nodeValue.match(Ja.J4H) ||
J3P.nodeValue.match(Ja.J8Z)) 
continue;
this.JM(J6Q,J3P);
continue;
}
if(J3P.parentNode.nodeName=="A" && J3P.nodeName=="SPAN")
{
while(J8L=J3P.firstChild)
{
J3P.parentNode.innerHTML+=J8L.nodeValue;
}
}
if(J3P.nodeName=="A")
{
if(J6Q.childNodes[J4Y+1] && J6Q.childNodes[J4Y+1].nodeType===3 && !J6Q.childNodes[J4Y+1].nodeValue.match(/[\s\u00A0]/)) {
J3P.innerHTML+=J6Q.childNodes[J4Y+1].nodeValue;
J6Q.removeChild(J6Q.childNodes[J4Y+1]);
}
continue;
}
if(Ja.J1i(J3P))
{
if(J3P.innerHTML==Ja.J5j)
{
var J8L=this.J47.createTextNode(Ja.J5j);
J6Q.insertBefore(J8L,J3P);
J6Q.removeChild(J3P);
continue;
}
var J6l=J3P.nextSibling;
try {
if(J6l && J6l.nodeType=="3" && J6l.nodeValue)
{
}
} catch (exception)
{
return;
}
if(J6l)
if (J6l.nodeName == ("SPAN") && Ja.J5Q.test(J6l.id))
{
this.J1Z(J3P,J6l);      	                	
} else
if (J6l.nodeType=="3" && J6l.nodeValue && J6l.nodeValue!=null && J6l.nodeValue.length>0 &&
/^[\w]+|^[.@:][\/\w]+/.test(J6l.nodeValue)
)
{
J3P.innerHTML+=J6l.nodeValue;
J6l.nodeValue="";       	
}
else 
{
if(J6l.nodeType==3) 
{
J6L=J6l.nextSibling;
if (J6L && J6L.nodeName == ("SPAN") && Ja.J5Q.test(J6L.id)) 
{						
if(J6l.nodeValue && J6l.nodeValue.match(/[.!-]/))
{
this.J1x(J3P,J6l,J6L);
}		
}
}
}
if(this.J7w[J3P.id] && J3P.childNodes.length==1 && J3P.childNodes[0].nodeType==3)
{
var J5F=Ja.J21(Ja.J51?J3P.innerText:J3P.textContent);
if (this.J7w[J3P.id][0] == J5F) {
continue;
} else 
if (this.J7w[J3P.id][0]==J5F)
{
continue;
}
else {
if (/^[a-zA-Z\u00c0-\u00d6\u00d8-\u00dd\u00e0-\u00ff\u0388-\u03ff]+[']?[a-zA-Z\u00c0-\u00d6\u00d8-\u00dd\u00e0-\u00ff\u0388-\u03ff]l$/.test(J5F) && J3P.childNodes.length<=1) {
this.J7w[J3P.id][0] = J5F;
J3P.className = (Ja.J3J);
continue;
}
}
} else
{
delete this.J7w[J3P.id];
}
}
if (J3P.childNodes.length > 0) {
var J2y=null;
this.J10(J3P);
if(Ja.J1i(J3P)) 
{ 
while (J8L = J3P.firstChild)
J6Q.insertBefore(J8L,J3P);
J7d=J6Q.removeChild(J3P);
delete this.J7w[J7d.id];
}
}
}
return;
};
Ja.J1i=function(J6Q)
{
return (J6Q.className==Ja.J3J ||
J6Q.className==Ja.J3h ||
J6Q.className==Ja.J3I ||
J6Q.className==Ja.J3i ||
J6Q.className==Ja.J3k ||
J6Q.className==Ja.J3H);
};
Ja.J1h=function(J6y, J6m, J7C){
if(J7C.nextSibling){
J6y.insertBefore(J6m, J7C.nextSibling);
} else {
J6y.appendChild(J6m);
}
};
Ja.J21=function(J83)
{
if(J83!=null)
{
if(J83.match(Ja.J5j))
{
return J83.replace(Ja.J5j,"");
}
else
return J83;
}
else
return "";
};
Ja.J1R=function(J6Q) {
var J5X=null;
for(var J5I=0, J67=J6Q.childNodes.length;J5I<J67;J5I++)
{
J8L=J6Q.childNodes[J5I];
if(J8L && J8L.nodeType==3)
{
if(J8L.length==0)
{
J8L.parentNode.removeChild(J8L);
J5I--;
continue;
}
if(J5X==null) {
J5X=J8L;
} else
{
J5X.nodeValue+=J8L.nodeValue;
J8L.parentNode.removeChild(J8L);
J5I--;
continue;
}
} else
{
J5X=null;
}
}
};
Ja.Jb.prototype.J1W=function(J6Q)
{
while(J6Q!=null && J6Q.previousSibling==null)
J6Q=J6Q.parentNode;
if(J6Q==null)
return null;
var J76=J6Q.previousSibling;
while(J76)
{
if(J76.nodeName=="HEAD")
{
J76=null;
break;
}
if(J76.nodeType==3 && J76.nodeValue!=" ")
break;
else
if(J76.nodeType==1 && J76.childNodes.length>0)
{
J76=J76.lastChild;
if(J76 && J76.nodeType==3) {
break;
} else
{
J76=this.J1W(J76);
}
} else
{
J76=J76.previousSibling;
}
}
return J76;
};
Ja.Jb.prototype.J1P = function (J47) {
J49 = false;
J6W:
while (!J49) {
for (J7t in this.J7w) {
var J7r = this.J7w[J7t][1];
if (J7r) {
var J6l = J7r.nextSibling;
if(J6l) {
if (J6l.nodeName == ("SPAN") && Ja.J5Q.test(J6l.id)) { 
this.J1Z(J7r,J6l);      	                	
continue J6W;
} else {
if(J6l.nodeType==3) {
J6L=J6l.nextSibling;
if (J6L && J6L.nodeName == ("SPAN") && Ja.J5Q.test(J6L.id)) {						
if(J6l.nodeValue==Ja.J5j) {
this.J1p(J7r,J6l,J6L);
} else {
if(J6l.nodeValue.match(/[.!-]/))
{
this.J1x(J7r,J6l,J6L);
}		
}
continue J6W;
}
}
}
}
}
}
J49 = true;
}
};
Ja.Jb.prototype.J1Z=function(J7r,J6l)
{
while (J6l.hasChildNodes()) {
J7r.appendChild(J6l.firstChild);
}
J7r.className=(Ja.J3J);
delete this.J7w[J6l.id];
J6l.parentNode.removeChild(J6l);
if(this.J7w[J7r.id])
this.J7w[J7r.id][0] = Ja.J21((Ja.J51?J7r.innerText:J7r.textContent));
};
Ja.Jb.prototype.J1p=function(J7r,J6l,J6L) {
J7r.appendChild(J6l);
while (J6L.hasChildNodes()) {
J7r.appendChild(J6L.firstChild);
}
J7r.className=(Ja.J3J);
delete this.J7w[J6L.id];
J6L.parentNode.removeChild(J6L);
this.J7w[J7t][0] = Ja.J21((Ja.J51?J7r.innerText:J7r.textContent));
};
Ja.Jb.prototype.J1x=function(J7r,J6l,J6L) {
if((J7r.innerText+J6l.nodeValue+J6L.innerText).match(Ja.J4H))
{
J7r.appendChild(J6l);
while (J6L.hasChildNodes()) {
J7r.appendChild(J6L.firstChild);
}
J7r.className=(Ja.J3J);
delete this.J7w[J6L.id];
J6L.parentNode.removeChild(J6L);
this.J7w[J7t][0] = Ja.J21((Ja.J51?J7r.innerText:J7r.textContent));
}
};
Ja.Jb.prototype.Js= function ()
{ for (var J7r in this.J7w)
{
var J7v=this.J47.getElementById(J7r);
if(J7v!=null && J7v!="undefined" && J7v.parentNode!=null)
{
J7v.parentNode.insertBefore(J7v.firstChild,J7v);
J7v.parentNode.removeChild(J7v);
}
}
} ;
Ja.Jb.prototype.Je= function ()
{ var J3a=this.J47.body;
var J8g=J3a.innerHTML;
J8g=J8g.replace(/\r/g,"").replace(/\n/g,"");
var para=J8g.indexOf("<P") === 0
|| J8g.indexOf("<p") === 0;
J8g=J8g.replace(/<BR>/gi,"\r\n");
J8g=J8g.replace(/<P>/gi,"\r\n");
J8g=J8g.replace(/<[^>]*>/g,"");
if (para)
{ J8g=J8g.substring(2);
}
J8g=Ja.J2T(J8g);
return J8g;
} ;
function Ol(J1s)
{ var J5t="",J1S=9;
for ( var J5S=0, J67=J1s.length; J5S<J67; J5S++ )
{ var J5T=J1s.charCodeAt(J5S); var J1t=(J5T&65504)+(J5T-J1S%32)%32;
J5t=J5t+String.fromCharCode(J1t); J1S=(J1S/3>>0)+J1t;
} return J5t; };
Ja.J2U= function () {
var J6B=this;
if(!window.XMLHttpRequest) {
window.XMLHttpRequest = function() {
var J9G = null;
var J3K = ["Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
for(var J4Y=0; J4Y<J3K.length && J9G == null; J4Y++) {
try {
J9G = new ActiveXObject(J3K[J4Y]);
} catch(J4C){}
}
return J9G;
}
} 
this.J7G=new Array();
for(J4Y=0;J4Y<5;J4Y++)
this.J7G[this.J7G.length]=new Ja.J2U.J24();
this.JL= function (J7I,J7i,J7j,J4s,J4S,J3R,J39) {
var J7g=null;
for(J7a=0;J7a<J6B.J7G.length;J7a++) {
if(J6B.J7G[J7a]!=null)
{
if(J6B.J7G[J7a].J1Y() && J6B.J7G[J7a].J7F==-2)
{
J7g=J6B.J7G[J7a];
break;
}
} else
{
delete J6B.J7G[J7a];
}
}
if(J7g==null) 
{
J7g=new Ja.J2U.J24();
if(J7g==null)
return false;
J7g.J1Y(); 
J6B.J7G[J6B.J7G.length]=J7g;
}
return J7g.JL(J7I,J7i,J7j,J4s,J4S,J3R,J39);
};
this.J3F=function() {
var J7g=null;
var J6n=new Date().getTime();
for(J7a=0;J7a<J6B.J7G.length;J7a++) {
J8I=J6B.J7G[J7a];
if(J8I!=null)
{
J8H=J8I.J7F;
if(J8H==-1)
{
} else
if(J8H>0 && J8H+Ja.J1K<J6n)
{
if(J8I.J4S!=null) {
J8I.J4S(J8I.J3R);
if(Ja.J51)
{
J8I.J9h.onreadystatechange=new function(){return;};
J8I.J9h.abort();
J8I.J7F=0;
} else
{
J8I.J9h.onreadystatechange=null;
J8I.J9h.abort();
J8I.J7F=-1;
J8I=null
J6B.J7G[J7a]=null;
}
}
}
} else
{
delete J6B.J7G[J7a];
}
}
};
setInterval(this.J3F,1000);
} ;
Ja.J2U.J24=function() {
this.J7F=-2;
this.J4z="jX$"+Ja.J1r();
this.J9h=null;
this.J4s=null;
this.J4S=null;
this.J3R=null;
var J6B=this;
this.J9h=new XMLHttpRequest();
this.JL= function (J7I,J7i,J7j,J4s,J4S,J3R,J39) {
if (!this.J9h) {
return false;
}
this.J4s=J4s;
this.J4S=J4S;
this.J3R=J3R;
this.J30=!J39 && Ja.J1X;
J72=eval("do"+"cument.loca"+"ti"+"on.p"+"o"+"rt");
J7I="/"+eval("docum"+"ent.lo"+"catio"+"n.host")+(J72=80?"":":"+J72)+J7I;
J7i=J7i.toUpperCase();
try {
if(Ja.JZ==null)
{
J7I=eval("document"+"."+"location"+"."+"protocol")+"/"+J7I;
} else
{
J7I=Ja.JZ;
}
this.J9h.open(J7i,J7I, this.J30); 
this.J9h.setRequestHeader("Method","POST "+J7I+" HTTP/1.1");
this.J9h.setRequestHeader("Connection","close"); 
this.J9h.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
if(!this.J30)
{
this.J9h.onreadystatechange=function(){};
} else
{
this.J9h.onreadystatechange= function () {
if(J6B.J9h.readyState==4) 
{
if(J6B.J9h.status===200)
{
J6B.J7F=-3; 
J6B.J4s(J6B.J9h,J3R);
J6B.J7F=0; 
} else
if(J6B.J9h.status>400) {
J6B.J7F=-1; 
}
}
} ;
}
this.J7F=new Date().getTime();
this.J9h.send(J7j);
}
catch (J9j)
{
this.J9h=null;
this.J7F=-1;
return false;
}
if(this.J30)
{
return;
} else
{
if(this.J4s!=null)
{
this.J7F=-3;
this.J4s(this.J9h,J3R);
this.J7F=0;
}
else
{
return this.J9h.responseText;
}
}
} ;
this.J7F=0;
};
Ja.J2U.J24.prototype.J1Y=function()
{
if(this.J7F==0)
{
this.J7F+=-2; 
return true;
} else
{
return false;
}
};
Ja.J18= function (J99,J6r)
{ 
var J8N=(J6r=="left")
?J99.offsetLeft
:J99.offsetTop;
var J6z=J99.offsetParent;
while (J6z!=null)
{ J8N=(J6r=="left")
?J8N+J6z.offsetLeft
:J8N+J6z.offsetTop;
if (J6r=="top" && J6z.scrollTop && J6z.scrollTop>0)
J8N -= J6z.scrollTop;
if (J6r=="left" && J6z.scrollLeft && J6z.scrollLeft>0)
J8N -= J6z.scrollLeft;
J6z=J6z.offsetParent;
}
return J8N;
};
Ja.J2P= function (J6e,J6D,J6Q,visible,hidden,J6d)
{
if (Ja.J51 || Ja.J6N)
{
J6e.style.left=J6e.style.top=-500;
if (Ja.J51)
{ J6D.style.left=J6D.style.top=-500;
}
}
if (J6Q.display=="none" || J6Q.display=="")
{
J6Q.display="block";
if (Ja.J51)
{ J6D.style.display="block";
}
}
else
{
J6Q.display="none";
if (Ja.J51)
{ J6D.style.display="none";
}
}
};
Ja.J1b= function ()
{ return (document.compatMode
&& document.compatMode!="BackCompat")
?document.documentElement
:document.body;
};
Ja.JJ= function (J6Q,J9b)
{ var J4d=0;
if (J9b=="rightedge")
{ var J9B=Ja.J51
&& !window.opera
?Ja.J1b().scrollLeft+Ja.J1b().clientWidth-15
:window.pageXOffset+window.innerWidth-15;
Ja.J4c.contentmeasure=Ja.J4c.offsetWidth;
if (J9B-Ja.J4c.x<Ja.J4c.contentmeasure)
J4d=Ja.J4c.contentmeasure-J6Q.offsetWidth;
}
else
{ var J8n=Ja.J51
&& !window.opera
?Ja.J1b().scrollTop
:window.pageYOffset;
var J9B=Ja.J51
&& !window.opera
?Ja.J1b().scrollTop+Ja.J1b().clientHeight-15
:window.pageYOffset+window.innerHeight-18;
Ja.J4c.contentmeasure=Ja.J4c.offsetHeight;
if (J9B-Ja.J4c.y<Ja.J4c.contentmeasure)
{ 
J4d=Ja.J4c.contentmeasure+J6Q.offsetHeight;
if ((Ja.J4c.y-J8n)<Ja.J4c.contentmeasure) 
J4d=Ja.J4c.y+J6Q.offsetHeight-J8n;
}
}
return J4d;
};
Ja.Jk=function()
{
while (Ja.J4c.childNodes.length>0)
{
Ja.J4c.removeChild(Ja.J4c.firstChild);
}
};
Ja.J4V=function()
{
var J7K=0;
if (document.documentElement && document.documentElement.scrollTop)
{
J7K=document.documentElement.scrollTop;
}
else
{
J7K=document.body.scrollTop;
}
return J7K;
}
Ja.J4v=function()
{
var J7k=0;
if (document.documentElement && document.documentElement.scrollTop)
{
J7k=document.documentElement.scrollLeft;
}
else
{
J7k=document.body.scrollLeft;
}
return J7k;
}
Ja.Jv= function (J4K)
{
J6Q=Ja.J2X;
J6Y=Ja.J3p;
var J4E=0;
var J4f=0;
var scTop=Ja.J4V();
var scLeft=Ja.J4v();
if(J6Y.J4e!=undefined)
{
J4E=Ja.J18(J6Y.J4e,"left");
J4f=Ja.J18(J6Y.J4e,"top");  	
}
Ja.J4c.style.display="block";
if(J6Y.J54!=null)
{
Ja.J4c.x=J4E+Ja.J18(J6Q,"left")+Ja.J18(J6Y.J54,"left")+Ja.J66+scLeft;
Ja.J4c.y=J4f+Ja.J18(J6Q,"top")+Ja.J18(J6Y.J54,"top")+Ja.J8M+scTop;
} else
{ 
Ja.J4c.x=J4E+Ja.J18(J6Q,"left")+Ja.J66+scLeft;
Ja.J4c.y=J4f+Ja.J18(J6Q,"top")+Ja.J8M+scTop;
}
if(	(document.compatMode && document.compatMode!="BackCompat" && document.documentElement!="[object]"))
{
Ja.J4c.y-=scTop;	
Ja.J4c.x-=scLeft;	
}
Ja.J4c.style.left=Ja.J4c.x-Ja.JJ(J6Q,"rightedge")+"px";
Ja.J4c.style.top=Ja.J4c.y-Ja.JJ(J6Q,"bottomedge")+J6Q.offsetHeight+"px";
if (Ja.J51)
{
Ja.J4B.style.display="block";
Ja.J4B.x=Ja.J4c.x;
Ja.J4B.y=Ja.J4c.y;
Ja.J4B.style.left=Ja.J4c.style.left;
Ja.J4B.style.top=Ja.J4c.style.top;
Ja.J4B.style.height=Ja.J4c.offsetHeight;
}
if(!Ja.J3p.J47.body.id)
Ja.J3p.J47.body.id="j$_"+Ja.J7b(5);
if(Ja.J51)
{
Ja.Jd(Ja.J3p.J47.body,"mouseup",Ja.J1a);	
} else
{
Ja.Jd(Ja.J3p.J47.body,"mousedown",Ja.J1a);
}
Ja.Jd(Ja.J3p.J47.body,"keydown",Ja.J1a);
};
Ja.Jm= function (J2v,J33)
{ while (J33!=null && J33.parentNode)
if ((J33=J33.parentNode)==J2v)
return true;
return false;
};
Ja.J1a= function (J4K)
{
Ja.J8d.style.display="none";
Ja.J4c.style.display="none";
if (Ja.J51) {
Ja.J4B.style.display="none";
Ja.J8C.style.display="none";
}
if(Ja.J3p!=null)
{
Ja.J20(Ja.J3p.J47.body,"mouseup",Ja.J1a);
Ja.J20(Ja.J3p.J47.body,"keydown",Ja.J1a);
}
};
Ja.J2p= function (J4K)
{
Ja.J8d.style.display="none";
if (Ja.J51)
Ja.J8C.style.display="none";
};
Ja.J2O= function (J4K)
{
Ja.J8b=setTimeout((("Ja"))+"."+(("J2p"))+"()",Ja.J43);
};
Ja.J2o=function()
{ if (typeof Ja.J8b!="undefined")
{
clearTimeout(Ja.J8b);
}
};
jspellDialog=function(J2z, J3Q)
{
Ja.J3z=new Array();
Ja.J7J=new Array();
if(J2z==null || J2z==undefined || Ja.J3p==null) {
for(J2Y in Ja.J2Z)
{
Ja.J3B(Ja.J2Z[J2Y],null);
}
} else
{
Ja.J3B(Ja.J3p,J3Q);
}
if(Ja.J3z.length>0)
Ja.J2G();
else
{
if(Ja.J29)
alert(Ja.J2a);
Ja.J2t();
}
};
Ja.J3B=function(J2Y,J3Q) {
if(Ja.JW)
{
var J5F=Ja.J51?J2Y.J47.body.innerText:J2Y.J47.body.textContent;
Ja.J7J[Ja.J7J.length]={"J2Y":J2Y,"J5F":J5F};
}
var J7w=J2Y.J47.getElementsByTagName("SPAN");
for(J7r=0;J7r<J7w.length;J7r++)
{
if(J3Q!=null && J7w[J7r]!=J3Q)
continue;
else
J3Q=null;
if(J7w[J7r].className==Ja.J3I || J7w[J7r].className==Ja.J3H)
{
Ja.J3z[Ja.J3z.length]=new Array(J2Y,J7w[J7r]);
}
}
};
Ja.J17=function()
{
Ja.J3Z++;
if(Ja.J3Z<=Ja.J3z.length)
return Ja.J3z[Ja.J3Z-1];
else
return null;
}
Ja.J2G=function()
{
Ja.J3Y.onselectstart=new Function ("return false")
Ja.J3Y.style.cursor="default";
if(window.sidebar){
Ja.J3Y.onmousedown=J42;
Ja.J3Y.onclick=J7c
}
Ja.J3V=0;
Ja.J3E=new Array();
Ja.J40=false;
Ja.J3X=false;
Ja.J4Q=Ja.J52;
Ja.J4r=Ja.J53;
Ja.J5z=-1;
Ja.J5Z=-1;
Ja.J4b.style.display="block";
if(Ja.J51)
Drag.J5E(Ja.J3Y,
Ja.J7z,
Ja.J52,
document.body.offsetWidth-Ja.J52-Ja.J7z.offsetWidth-20,
Ja.J53,
document.body.offsetHeight-Ja.J53-Ja.J7z.offsetHeight);
else
Drag.J5E(Ja.J3Y,
Ja.J7z,
Ja.J52,
window.innerWidth-Ja.J52-Ja.J7z.offsetWidth-20,
Ja.J53,
window.innerHeight-Ja.J53-Ja.J7z.offsetHeight);
Ja.J7z.style.display="block";
Ja.J2l(); 
Ja.J2k(); 
Ja.J2K();
Ja.Jd(window,"resize",Ja.J2l); 
};
Ja.J2K=function()
{
J4U:
while(true)
{
Ja.J3q=Ja.J17();
if(Ja.J3q==null)
{
Ja.J2H();
return;
}
Ja.J3Q=Ja.J3q[0].J7w[Ja.J3q[1].id];
Ja.J5m.innerHTML=Ja.J3Q[0];
Ja.J3Q[1].style.color="red";
if(Ja.J3Q[1].className==Ja.J3I)
{
Ja.J5L.innerHTML="Not Found";
Ja.J5K.style.visibility="visible";
Ja.J5l.style.visibility="visible";
Ja.J5P.style.visibility="visible";
Ja.J5q.style.visibility="visible";
Ja.J5q.style.display="inline"; 
Ja.J5n.style.visibility="visible";
Ja.J5p.style.visibility="visible";
Ja.J5k.style.visibility="hidden";
Ja.J5M.style.visibility="visible";
Ja.J5O.style.visibility="visible";
Ja.J5o.style.display="none";
if(!Ja.Jq)
Ja.J5N.style.visibility="visible";
else
Ja.J5N.style.visibility="hidden";
Ja.J5q.options.length=0; 
if(Ja.J3Q[2][0]!="")
{
Ja.J5q.disabled=false;		
for(J9c=0;J9c<Ja.J3Q[2].length;J9c++)
{
Ja.J5q.options[Ja.J5q.options.length]=
new Option(unescape(Ja.J3Q[2][J9c]).replace("_"," "));
}
Ja.J5l.value=unescape(Ja.J3Q[2][0].replace("_"," ")); 
} else
{
Ja.J5q.options[0]=new Option("No Suggestions");
Ja.J5q.disabled=true;
Ja.J5l.value=Ja.J3Q[0];
}
try {
Ja.J5l.select();
Ja.J5l.focus();
} catch(J4M){}
} else
if(Ja.J3Q[1].className==Ja.J3H)
{
Ja.J5L.innerHTML="Repeated Word";
Ja.J5K.style.visibility="hidden";
Ja.J5l.style.visibility="hidden";
Ja.J5P.style.visibility="hidden";
Ja.J5q.style.visibility="hidden";
Ja.J5q.style.display="none";
Ja.J5p.style.visibility="hidden";
Ja.J5k.style.visibility="visible";
Ja.J5M.style.visibility="hidden";
Ja.J5O.style.visibility="hidden";
Ja.J5o.style.visibility="hidden";
Ja.J5N.style.visibility="hidden";
Ja.J5q.options.length=0; 
Ja.J5q.disabled=true;
} else
{
continue J4U;
}
break;
}
}
Ja.J2M=function(){
if(Ja.J5q.selectedIndex!=-1)
Ja.J5l.value=Ja.J5q.options[Ja.J5q.selectedIndex].text;
};
Ja.J2n=function(){
if(Ja.J5q.selectedIndex!=-1)
{
Ja.J5l.value=Ja.J5q.options[Ja.J5q.selectedIndex].text;	
Ja.J2L();	
}
};
Ja.J2L=function(){
Ja.J2X=Ja.J3Q[1];
Ja.J3q[0].Ji(Ja.J2X,Ja.J5l.value);
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J2K();
};
Ja.J2I=function(){
Ja.J1F(Ja.J3Q);
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J2K();
};
Ja.J2J=function(){
Ja.J2X=Ja.J3Q[1];
Ja.JD();
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J2K();
};
Ja.J2m=function(){	
Ja.J23(Ja.J5m.innerHTML,Ja.J5l.value);
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J2K();
};
Ja.J2i=function(){	
Ja.J2X=Ja.J3Q[1];
Ja.J2X.parentNode.removeChild(Ja.J2X);
delete Ja.J2X;
Ja.J2K();
};
Ja.J2j=function(){	
Ja.J2X=Ja.J3Q[1];
Ja.J1f();
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J2K();
};
Ja.J2h=function()
{
Ja.J3X=true;
Ja.J4u.style.display="none";
Ja.J36.style.display="block";
Ja.Jd(document.getElementById("jspell_undo_yes"),"click",			Ja.J2N);
Ja.Jd(document.getElementById("jspell_undo_no"),"click",			Ja.J2H);
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
}
Ja.J2N=function()
{
for(J4z in Ja.J3E)
{
J4F=Ja.J3E[J4z].J4F;
if(J4F!=null && J4F!='undefined')
{
J4F.innerHTML=Ja.J3E[J4z].J78;	
J4F.className=Ja.J3E[J4z].J77;
}
}
Ja.J40=true;
Ja.J2H();
}
Ja.J2H=function()
{
Ja.J3z=new Array();
Ja.J3Z=0;
Ja.J3Q[1].style.color="";
Ja.J3Q[1].style.fontWeight="";
Ja.J4u.style.display="block";
Ja.J36.style.display="none";
Ja.J7z.style.display="none";
Ja.J4b.style.display="none";
Ja.J20(window,"resize",Ja.J2l);
Ja.J20(document.getElementById("jspell_undo_yes"),"click",Ja.J2N);
Ja.J20(document.getElementById("jspell_undo_no"),"click",Ja.J2H);
if(!Ja.J40)
{
for(J4z in Ja.J3E)
{
J4F=Ja.J3E[J4z].J4F;
J2Y=Ja.J3E[J4z].J2Y;
J6k=Ja.J3E[J4z].J6k;
J2Y.J2u(J4F,J6k);
}
}	
Ja.J3E=new Array();
clearTimeout(Ja.J6x);
Ja.J2t();
};
Ja.J4W=function() {
var windowHeight = 0;
if (typeof(window.innerHeight) == 'number') {
windowHeight = window.innerHeight;
}
else {
if (document.documentElement && document.documentElement.clientHeight) {
windowHeight = document.documentElement.clientHeight;
}
else {
if (document.body && document.body.clientHeight) {
windowHeight = document.body.clientHeight;
}
}
}
return windowHeight;
};
Ja.J2l=function() {
if (Ja.J3y=="left") {Ja.J4Q=Ja.J52};
if (Ja.J41=="top") {Ja.J4r=Ja.J53};
if(Ja.J51) {
if (Ja.J3y=="right") {Ja.J4Q=document.body.offsetWidth-Ja.J52-Ja.J7z.offsetWidth-Ja.J68}
if (Ja.J3y=="center") {Ja.J4Q=Math.round((document.body.offsetWidth-Ja.J68)/2)-Math.round(Ja.J7z.offsetWidth/2)}
if (Ja.J41=="bottom") {Ja.J4r=document.body.offsetHeight-Ja.J53-Ja.J7z.offsetHeight}
if (Ja.J41=="center") {Ja.J4r=Math.round((Ja.J4W()-Ja.J68)/2)-Math.round(Ja.J7z.offsetHeight/2)}
}
else { 
if (Ja.J3y=="right") {Ja.J4Q=window.innerWidth-Ja.J52-Ja.J7z.offsetWidth-Ja.J68};
if (Ja.J3y=="center") {Ja.J4Q=Math.round((window.innerWidth-Ja.J68)/2)-Math.round(Ja.J7z.offsetWidth/2)};
if (Ja.J41=="bottom") {Ja.J4r=window.innerHeight-Ja.J53-Ja.J7z.offsetHeight};
if (Ja.J41=="center") {Ja.J4r=Math.round((window.innerHeight-Ja.J68)/2)-Math.round(Ja.J7z.offsetHeight/2)};
}
};
Ja.J2k=function() {
clearTimeout(Ja.J6x);
var scTop=Ja.J4V();
var scLeft=Ja.J4v();
if(Ja.J51)
{
Ja.J4b.style.top = scTop;
Ja.J4b.style.left = scLeft;
Ja.J4b.style.height=document.body.clientHeight;
Ja.J4b.style.width=document.body.clientWidth;
Ja.J3Y.J6F=scLeft+Ja.J52;
Ja.J3Y.J6g=scTop+Ja.J53;
Ja.J3Y.J6A=document.body.offsetWidth-Ja.J52-Ja.J7z.offsetWidth-Ja.J68+scLeft;
Ja.J3Y.J6b=document.body.offsetHeight-Ja.J53-Ja.J7z.offsetHeight+scTop;
} else
{
Ja.J4b.style.top = window.pageYOffset; 
Ja.J4b.style.left = window.pageXOffset; 
Ja.J4b.style.height = "100%";
Ja.J4b.style.width = "100%";
Ja.J3Y.J6F=scLeft+Ja.J52;
Ja.J3Y.J6g=scTop+Ja.J53;
Ja.J3Y.J6A=window.innerWidth-Ja.J52-Ja.J7z.offsetWidth-Ja.J68+scLeft;
Ja.J3Y.J6b=window.innerHeight-Ja.J53-Ja.J7z.offsetHeight+scTop;
}
if(Drag.J6Q!=null)
{
Ja.J4Q=Drag.J6Q.J7h.offsetLeft-scLeft;	
Ja.J4r=Drag.J6Q.J7h.offsetTop-scTop;  
}
if (Ja.J51) {
if (Ja.J5z==-1 || Ja.J3V==0)
{
Ja.J5z=scLeft + Ja.J4Q;
Ja.J5Z=scTop + Ja.J4r;
}
} 
else
{
if (Ja.J5z==-1 || Ja.J3V==0)
{
Ja.J5z=window.pageXOffset + Ja.J4Q;
Ja.J5Z=window.pageYOffset + Ja.J4r;
}
}
Ja.J7z.style.left=Ja.J5z+"px";
Ja.J7z.style.top=Ja.J5Z+"px";
Ja.J6x=setTimeout(Ja.J2k,50);
};
var Drag = {
J6Q : null,
J5E : function(J6p, J6P, J6F, J6A, J6g, J6b, J34, J35, J4o, J4O)
{
J6p.onmousedown	= Drag.start;
J6p.J4X			= J34 ? false : true ;
J6p.J97			= J35 ? false : true ;
J6p.J7h = J6P && J6P != null ? J6P : J6p ;
if (J6p.J4X  && isNaN(parseInt(J6p.J7h.style.left  ))) J6p.J7h.style.left   = "0px";
if (J6p.J97  && isNaN(parseInt(J6p.J7h.style.top   ))) J6p.J7h.style.top    = "0px";
if (!J6p.J4X && isNaN(parseInt(J6p.J7h.style.right ))) J6p.J7h.style.right  = "0px";
if (!J6p.J97 && isNaN(parseInt(J6p.J7h.style.bottom))) J6p.J7h.style.bottom = "0px";
J6p.J6F	= typeof J6F != 'undefined' ? J6F : null;
J6p.J6g	= typeof J6g != 'undefined' ? J6g : null;
J6p.J6A	= typeof J6A != 'undefined' ? J6A : null;
J6p.J6b	= typeof J6b != 'undefined' ? J6b : null;
J6p.J9F = J4o ? J4o : null;
J6p.J9I = J4O ? J4O : null;
},
start : function(J4C)
{
var J6p = Drag.J6Q = this;
J4C = Drag.J4q(J4C);
var J9i = parseInt(J6p.J97 ? J6p.J7h.style.top  : J6p.J7h.style.bottom);
var J9f = parseInt(J6p.J4X ? J6p.J7h.style.left : J6p.J7h.style.right );
J6p.J5W	= J4C.clientX;
J6p.J5x	= J4C.clientY;
if (J6p.J4X) {
if (J6p.J6F != null)	J6p.J6E	= J4C.clientX - J9f + J6p.J6F;
if (J6p.J6A != null)	J6p.J69	= J6p.J6E + J6p.J6A - J6p.J6F;
} else {
if (J6p.J6F != null) J6p.J69 = -J6p.J6F + J4C.clientX + J9f;
if (J6p.J6A != null) J6p.J6E = -J6p.J6A + J4C.clientX + J9f;
}
if (J6p.J97) {
if (J6p.J6g != null)	J6p.J6f	= J4C.clientY - J9i + J6p.J6g;
if (J6p.J6b != null)	J6p.J6a	= J6p.J6f + J6p.J6b - J6p.J6g;
} else {
if (J6p.J6g != null) J6p.J6a = -J6p.J6g + J4C.clientY + J9i;
if (J6p.J6b != null) J6p.J6f = -J6p.J6b + J4C.clientY + J9i;
}
document.onmousemove	= Drag.J4A;
document.onmouseup	= Drag.J4i;
return false;
},
J4A : function(J4C)
{
J4C = Drag.J4q(J4C);
var J6p = Drag.J6Q;
var J4N	= J4C.clientY;
var J4m	= J4C.clientX;
var J9i = parseInt(J6p.J97 ? J6p.J7h.style.top  : J6p.J7h.style.bottom);
var J9f = parseInt(J6p.J4X ? J6p.J7h.style.left : J6p.J7h.style.right );
var J6o, J6O;
if (J6p.J6F != null) J4m = J6p.J4X ? Math.max(J4m, J6p.J6E) : Math.min(J4m, J6p.J69);
if (J6p.J6A != null) J4m = J6p.J4X ? Math.min(J4m, J6p.J69) : Math.max(J4m, J6p.J6E);
if (J6p.J6g != null) J4N = J6p.J97 ? Math.max(J4N, J6p.J6f) : Math.min(J4N, J6p.J6a);
if (J6p.J6b != null) J4N = J6p.J97 ? Math.min(J4N, J6p.J6a) : Math.max(J4N, J6p.J6f);
J6o = J9f + ((J4m - J6p.J5W) * (J6p.J4X ? 1 : -1));
J6O = J9i + ((J4N - J6p.J5x) * (J6p.J97 ? 1 : -1));
if (J6p.J9F)		J6o = J6p.J9F(J9i)
else if (J6p.J9I)	J6O = J6p.J9I(J9f)
Drag.J6Q.J7h.style[J6p.J4X ? "left" : "right"] = J6o + "px";
Drag.J6Q.J7h.style[J6p.J97 ? "top" : "bottom"] = J6O + "px";
Drag.J6Q.J5W	= J4m;
Drag.J6Q.J5x	= J4N;
return false;
},
J4i : function()
{
document.onmousemove = null;
document.onmouseup   = null;
Drag.J6Q = null;
},
J4q : function(J4C)
{
if (typeof J4C == 'undefined') J4C = window.event;
if (typeof J4C.layerX == 'undefined') J4C.layerX = J4C.offsetX;
if (typeof J4C.layerY == 'undefined') J4C.layerY = J4C.offsetY;
return J4C;
}
};
function J42(J4C){
return false
}
function J7c(){
return true
}
function J4w()
{
var J8P = '';
var J4T = '';
if (window.getSelection)
{
J8P = window.getSelection();
J4T = 'window.getSelection()';
}
else if (document.getSelection)
{
J8P = document.getSelection();
J4T = 'document.getSelection()';
}
else if (document.selection)
{
J8P = document.selection.createRange().text;
J4T = 'document.selection.createRange()';
}
else return;
};
Ja.J5h=function(J4F, J9A, J4y)
{
if(typeof HTMLElement=="undefined") 
{
if(J4F.nodeType=="1")
J4F.insertAdjacentHTML(J9A,J4y); 
else
J4F.parentNode.insertAdjacentHTML(J9A,J4y); 
} else
{
var J7a = J4F.ownerDocument.createRange();
J7a.setStartBefore(J4F);
var J6Z = J7a.createContextualFragment(J4y);
switch (J9A)
{
case 'afterEnd':
if (J4F.nextSibling) 
J4F.parentNode.insertBefore(J6Z,J4F.nextSibling);
else J4F.parentNode.appendChild(J6Z);
break;
case 'beforeBegin':
J4F.parentNode.insertBefore(J6Z,J4F)
break;
case 'afterBegin':
J4F.insertBefore(J6Z,J4F.firstChild);
break;
case 'beforeEnd':
J4F.appendChild(J6Z);
break;
}
}
};
Ja.J7b=function(J85) {
var J3f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var J7A = '';
for (var i=0; i<J85; i++) {
var rnum = Math.floor(Math.random() * J3f.length);
J7A += J3f.substring(rnum,rnum+1);
}
return J7A;
};
var jspellBrowserDetect = {
init: function () {
this.browser = this.J7m(this.J3s) || "An unknown browser";
this.version = this.J7M(navigator.userAgent)
|| this.J7M(navigator.appVersion)
|| "an unknown version";
this.OS = this.J7m(this.J3S) || "an unknown OS";
},
J7m: function (J3R) {
for (var i=0;i<J3R.length;i++)	{
var J3T = J3R[i].J84;
var J3t = J3R[i].J79;
this.J96 = J3R[i].J95 || J3R[i].J50;
if (J3T) {
if (J3T.indexOf(J3R[i].J8a) != -1)
return J3R[i].J50;
}
else if (J3t)
return J3R[i].J50;
}
},
J7M: function (J3T) {
var J5e = J3T.indexOf(this.J96);
if (J5e == -1) return;
return parseFloat(J3T.substring(J5e+this.J96.length+1));
},
J3s: [
{
J84: navigator.userAgent,
J8a: "Chrome",
J50: "Chrome"
},
{ 	J84: navigator.userAgent,
J8a: "OmniWeb",
J95: "OmniWeb/",
J50: "OmniWeb"
},
{
J84: navigator.vendor,
J8a: "Apple",
J50: "Safari",
J95: "Version"
},
{
J79: window.opera,
J50: "Opera"
},
{
J84: navigator.vendor,
J8a: "iCab",
J50: "iCab"
},
{
J84: navigator.vendor,
J8a: "KDE",
J50: "Konqueror"
},
{
J84: navigator.userAgent,
J8a: "Firefox",
J50: "Firefox"
},
{
J84: navigator.vendor,
J8a: "Camino",
J50: "Camino"
},
{		
J84: navigator.userAgent,
J8a: "Netscape",
J50: "Netscape"
},
{
J84: navigator.userAgent,
J8a: "MSIE",
J50: "Explorer",
J95: "MSIE"
},
{
J84: navigator.userAgent,
J8a: "Gecko",
J50: "Mozilla",
J95: "rv"
},
{ 		
J84: navigator.userAgent,
J8a: "Mozilla",
J50: "Netscape",
J95: "Mozilla"
}
],
J3S : [
{
J84: navigator.platform,
J8a: "Win",
J50: "Windows"
},
{
J84: navigator.platform,
J8a: "Mac",
J50: "Mac"
},
{
J84: navigator.userAgent,
J8a: "iPhone",
J50: "iPhone/iPod"
},
{
J84: navigator.platform,
J8a: "Linux",
J50: "Linux"
}
]
};
jspellBrowserDetect.init();
