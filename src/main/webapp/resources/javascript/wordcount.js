/* wodcount.js contains javascript functions for limiting the number of words, counting the number of words, and
 * other useful functions for use with a text field
 */

var jspellEditor; // save reference to JSpell editor area... initialized in jspellPostInit
jspellMenuStyle="display: none; position:absolute; width: 160px; border:1px solid black; border-bottom-width: 1; z-index:1501; background: #F6F6F6";
	jspellMenuAnchorStyle="display: block; color: black; text-align: left; text-decoration: none; text-indent: 5px; font-size: 0.8em; line-height: 12pt; font-family: Verdana, Arial, sans-serif; font-weight: bold; padding:1px; ";
	jspellSubMenuAnchorStyle="background-color: #F6F6F6; text-align: left; display: block; color: black; text-decoration: none; text-indent: 5px; font-size: 0.8em; line-height: 12pt; font-family: Verdana, Arial, sans-serif; font-weight: bold; padding:1px; ";
	jspellMenuHoverStyle="background-color: #FFEEC2; background-image: none; ";
	jspellMenuSpacerStyle="background-color: #FFEEC2; background-image: none; ";

var ie=document.all; // check if running in Internet Explorer

function getSpellCheckArray() {
	var fieldsToCheck=new Array();
	
	fieldsToCheck[0]=[document,"bio"];
	fieldsToCheck[1]=[document,"careerPlans"];
	fieldsToCheck[2]=[document,"shortAnswer"];
	
	return fieldsToCheck;
}

/*  This is the callback for the JSpell Dialog which is called when the user clicks Submit.
 
function jspellDialogCallBack(){
	jspellDetach(); // detach iframe
	
	// confirm that user wishes to submit the form
	var answer = confirm("Please note that your Thank You Note will be submitted to the University for final review prior to submission to the scholarship donor.\n\n" +
						"You can return to this page to make changes to your note if necessary.");
	if (answer){
		document.TYSUBMITFORM.submit(); // submit form
	}
};*/

function spellCheck(){
	jspellInit(); jspellDialog(); return false;	
}

function removeTextAreaWhiteSpace(field) {
	field.value = field.value.replace(/^\s*|\s*$/g,'');
}

/* Count the number of words entered into a textarea or field */
function cnt(textField){
	if(textField.value !== null && textField.value.trim().length > 0){
		var y = textField.value;
		var count = 0;
		text = y.replace(/\s/g,' ');
	 	text = text.split(' ');
		
		for (i=0; i < text.length; i++) {
			if (text[i].length > 0) count++;
		}
		
		return count;
	} else return 0;
}

function initWordCnt(txtFieldId, counterId){
	if(document.getElementById(txtFieldId) !== null){
		var field = document.getElementById(txtFieldId);
		var count = cnt(field);
		document.getElementById(counterId).value = count;
	}
}

/* limit the number of characters in a text area */
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}

/* counts the remaining number of characters and lines in a text area, given the
	textarea name (theField), the text field for the character counter (theCharCounter),
	the text field for the line counter, the max number of characters desired, the max
	number of lines desired, and the max number of characters per line.
	Call this function onKeyUp event */
function textCounter(theField,theCharCounter,theLineCounter,maxChars,maxLines,maxPerLine){
	var strTemp = "";
	var strLineCounter = 0;
	var strCharCounter = 0;

	for (var i = 0; i < theField.value.length; i++){
		var strChar = theField.value.substring(i, i + 1);

		if (strChar == '\n'){
			strTemp += strChar;
			strCharCounter = 1;
			strLineCounter += 1;
		} else if (strCharCounter == maxPerLine) {
			strTemp += '\n' + strChar;
			strCharCounter = 1;
			strLineCounter += 1;
		} else {
			strTemp += strChar;
			strCharCounter ++;
		}
	}

	theCharCounter.value = maxChars - strTemp.length;
	theLineCounter.value = maxLines - strLineCounter;
}