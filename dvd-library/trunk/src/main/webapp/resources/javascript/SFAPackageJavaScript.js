
// 	OSFA Audit JavaScript

// 	JavaScript functions common to the OSFA Audit application JSPs 

/*
	closeRecordWindow
	dumpVariables	
	killback
	
	Also includes functions for validating input, confirming form submission, spell checking,
	and word counting
*/
	
var tmp ="";
var listWindow = null;
var selectWindow = null;

/*
	closeRecordWindow

	Close select or view windows when exiting a form or when submitting a new search.
*/ 
function closeRecordWindow () {

	if (typeof selectWindow != 'undefined' && selectWindow != null) {
		selectWindow.close();
	}
	if (typeof listWindow != 'undefined' && listWindow != null) {
		listWindow.close();
	}
	
}

function checkFileExtension(path, ext) {
	var pExt = path.substring(path.length-3,path.length);
  	pExt = pExt.toLowerCase();
  	
  	if(ext === pExt) {
  		return true;
  	}
  	else {
  		alert("You can only import files of type ." + ext);
  		return false;
  	}
}


/*
	killback
	
	Stops the user from going back to the page by buttons or shortcuts.
*/
function killBack() {
	// Works if we backed up to get here
  	try {
    	history.forward();
  	} catch (e) {
    	return;
  	}
	// Every 500 ms, try again. The only
	// guaranteed method for Opera, Firefox,
	// and Safari, which don't always call
  	// onLoad but *do* resume any timers when
  	// returning to a page
  	timer = setTimeout("killBack()", 500);
}


/* sends the user to the next text field */
function onKeyPress(e) {
	var keycode;
	if(window.event) keycode = window.event.keyCode;
	else if(e) keycode = e.keyCode;
	else return true;
	
	if(nextfield != 'done' && (keycode == 13 || keycode == 9)) {
		eval('document.forms[0].' + nextfield + '.focus()');
		return false;
	}
	else if(nextfield == 'done' && keycode == 9) {
		eval('document.forms[0].' + firstfield + '.focus()');
		return false;
	}
	return true;
}


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function removeTextAreaWhiteSpace() {
	var recText = document.getElementById('recText');
	recText.value = recText.value.replace(/^\s*|\s*$/g,'');
}
/* Count the number of words entered into a textarea or field */
function cnt(w,x){
	var y=w.value;
	var r = 0;
	a=y.replace(/\s/g,' ');
	a=a.split(' ');
	
	for (var z=0; z<a.length; z++) {if (a[z].length > 0) r++;}
		x.value=r;
}
/* limit the number of characters in a text area */
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}


function confirmLogoff(form){
	if(form.elements['hasChangedT'].checked===true) {
		 var logoff = confirm("All changes to this page will be discarded once you logoff.\n\n" +
		 			"Click OK if you are sure you want to discard all changes and logoff.  Click Cancel to remain on this page.");
		 if (logoff === true)
		 {
		   form.elements['modeLogoff'].checked=true; 
		   form.elements['gotoHome'].checked=true ;
		   form.submit();
		 }
 	} else {
 		form.elements['modeLogoff'].checked=true; 
		form.elements['gotoHome'].checked=true ;
		form.submit();
 	}
}

function confirmLeave(form, gotoDir){
	if(form.elements['hasChangedT'].checked===true) {
		 var discard = confirm("You have unsaved changes. All changes to this page will be discarded " +
		 			"when you leave this page.\n\n" +
		 			"Click OK to discard changes or Cancel to remain on this page.");
		if (discard === true) {
			if(gotoDir == 'prev')
				window.location.href="/recmd/".concat((form.elements['gotoPrev']).value);
	   		else if (gotoDir == 'next')
	   			window.location.href="/recmd/".concat((form.elements['gotoNext']).value);
	 	}
  } else {
  		if(gotoDir == 'prev')
   			window.location.href="/recmd/".concat((form.elements['gotoPrev']).value);
   		else if (gotoDir == 'next')
   			window.location.href="/recmd/".concat((form.elements['gotoNext']).value);
  }
}

function confirmAccess(potrezebie){
	//alert(potrezebie);
	if (! potrezebie) { 
		window.location.replace("/osfa-audit/jsp/AccessDenied.jsp");	
	}
}

function confirmSaveAndLogoff(form){
	if(form.elements['hasChangedT'].checked===true){
		 var saveAndLogoff = confirm("Save all changes and exit the Recommendation System?");
	 
		 if (saveAndLogoff === true) {
		 	form.elements['gotoHome'].checked=true;
		 	form.elements['modeSaveAndLogoff'].checked=true;
			form.elements['statPending'].checked=true;
			form.submit();
	 	}
	} else {
		form.elements['gotoHome'].checked=true;
		form.elements['modeSaveAndLogoff'].checked=true;
		form.elements['statPending'].checked=true;
		form.submit();
	}
}

function confirmSubmit(form){
	if(form.elements['hasChangedT'].checked===true) {
	 	var submit = confirm("Submit recommendation to the university?");
	 
	 	if (submit === true) {
	 		form.elements['received'].checked=true;
		 	form.elements['modeSubmit'].checked=true;
			form.elements['statReceived'].checked=true;
			form.elements['gotoNext'].checked=true ;
			form.submit();
		}
	} else {
	 	form.elements['received'].checked=true;
		form.elements['modeSubmit'].checked=true;
		form.elements['statReceived'].checked=true;
		form.elements['gotoNext'].checked=true ;
		form.submit();
	}
}


function confirmSave(form){
	if(form.elements['hasChangedT'].checked===true){
		 var save = confirm("Save all changes?");
	 
		 if (save === true) {
		 	form.elements['gotoThisPage'].checked=true;
		 	form.elements['modeSave'].checked=true;
			form.elements['statPending'].checked=true;
			form.submit();
	 	}
	} else {
		form.elements['gotoThisPage'].checked=true;
	 	form.elements['modeSave'].checked=true;
		form.elements['statPending'].checked=true;
		form.submit();
	}
}

function doSave(form){
 	form.elements['gotoThisPage'].checked=true;
 	form.elements['modeSave'].checked=true;
	form.elements['statPending'].checked=true;
	form.submit();
}

function doSubmit(form){
 	var ans = confirm("Are you ready to submit this recommendation to the University?");
	 
	if (ans === true) {
		form.elements['received'].checked=true;
		form.elements['modeSubmit'].checked=true;
		form.elements['statReceived'].checked=true;
		//form.elements['gotoNext'].checked=true ;	// successful submit will change destination
		form.elements['gotoThisPage'].checked=true; 
		form.submit();
	}
}

