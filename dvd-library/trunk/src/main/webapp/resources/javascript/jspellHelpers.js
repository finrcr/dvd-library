var jspellEditor; // save reference to JSpell editor area... initialized in jspellPostInit
var ie=document.all; // check if running in Internet Explorer

/*****************************************************/
/* Implement this function to explicitly declare the */
/* fields that you want to spell check.              */
/*****************************************************/
function getSpellCheckArray() {
	var fieldsToCheck=new Array();
	
	fieldsToCheck[0]=[document,"bio"];
	fieldsToCheck[1]=[document,"careerPlans"];
	fieldsToCheck[2]=[document,"shortAnswer"];
	
	return fieldsToCheck;
}


/*  This is the callback for the JSpell Dialog which is called when the user clicks Submit.
 */
function jspellDialogCallBack(){
	jspellDetach(); // detach iframe

	var answer = confirm("Spell check complete.  Submit now?");
	if (answer){
		document.ApplicationForm.submit();
	}
};

function spellCheck(){
	jspellInit(); jspellDialog(); return false;	
}