// jspellSettings.js - This file is a configuration file for the JSpell Evolution Spell Checker
//
// This file should be placed in a common location to be shared by all web pages which make
// use of the JSpell Evolution spell checker.
//
// The default configuration of this file is to have all lines of code commented out. The
// JSpell Evolution Spell Checker has built-in defaults that correspond to the commented
// out blocks of code.
//
// If you need to change the default behavior of a JSpell configuration item, such as the
// location of the server or the language of the user interface then you may change it in
// this shared configuration file by uncommenting the appropriate variable declaration.
//
// You may also copy the overridden values into the web page that uses JSpell. The values
// are simply kept in this file for readability and manageability.
//
// For further information please see the documentation that accompanies the JSpell Evolution
// Spell Checker.
//
// Uncomment the following lines and make modifications as necessary:
//
	var jspellImagePath="/osfa-audit/jspellimages/"; // specifies the relative path to the JSpell Evolution images (MUST HAVE TRAILING BACKSLASH)
	var jspellDisableLearn=true; 	// set to true, to remove the Learn words capability
//	var jspellForceUpperCase=false; // force suggestions and spell checker to use upper case
//	var jspellCapitalizeSentences=true; // ignore lower case sentence beginnings, etc.
//	var jspellIgnoreNumbers=true; 	// ignore words with embedded numbers
//	var jspellIgnoreUpper=true; 	// ignore words in all upper case
//	var jspellIgnoreDouble=false; 	// ignore repeated words
//	var jspellShowOptionsMenu=true; // enable options menu to allow end user modification of spell check parameters
	var jspellShowSpellingMenu=true; // show Spelling menu to allow dialog based spell checking
//	var jspellTextLanguage="enUS"; // Language in which to perform spell check, e.g., "English (US)", "Spanish (ES)", "English (US) Medical"
//	var jspellGUILanguage="enUS";			  // Language of JSpell GUI, can be independent of spell check language
//	var jspellGUIMatchesText=false;			  // Should GUI language match text language
//	var jspellPersonalDictionary="sample.txt"; // Personal dictionary identifier, could be user id, department, etc. Has no effect when jspellPersonalDictionaryType=="LOCAL"
//	var jspellPersonalDictionaryType="SERVER"; // may be either LOCAL or ROAMING.
//											  // LOCAL stores dictionary entries locally via a COOKIE,
//											  // ROAMING stores dictionary entries at the server based
//											  // on the jspellPersonalDictionary 'key' which can be a
//											  // unique user name, department name, etc. ROAMING provides
//											  // the ability to share a dictionary among more than one
//											  // user by setting the jspellPersonalDictionary value to a
//											  // shared value, e.g. department, corporate, etc.
//	var jspellMaxSuggestions=5; // Maximum number of suggestions to show, internal max is 10.
// var jspellTimeout=500; // default spell check interval in milliseconds (ms) decrease for more frequent spell check requests
   var jspellRealtime=false; // perform check as you type spelling. If false only one spell check request is sent for all elements in getSpellCheckArray
   var jspellAutoAttach=true; // should spell checker start working immediately after jspellInit function is called? Default is true. Otherwise developer can call jspellAttach to begin spell checking and jspellDetach to disable spell checker.
// var jspellCustomRegExp=null; // if specified, is a Regular Expression which if 'matched' will result in the word being ignored during spell checking
// e.g. var jspellCustomRegExp=/^.{8,99}$/; // this sample custom regular expression will ignore words between 8 and 99 characters long
   var jspellDialogShowNoErrors=false; // show a message if there are no errors
   var jspellDialogShowNoErrorsMessage="Spell check completed."; // message displayed when there are no errors
   var jspellDialogHalign="center"; // Horizontal alignment of popup dialog - "right", "center", "left"
   var jspellDialogValign="center"; // Vertical alignment of popup dialog - "top", "center", "bottom"
// var jspellDropSheetColor='lightgrey'; // drop sheet color when manual spell check mode is in progress
// var jspellDropSheetOpacity='15'; // percent opacity for drop sheet displayed when manual spell check mode is in progress
// var jspellAttachToHiddenElements=false; // if true, allow JSpell to attach to hidden and disabled elements
// var jspellIgnoreClass="jspellignoreclass"; // if an element is a member of this class then JSpell will ignore and not parse the contents
// var jspellDialogEnableUndo=true; // enable undo capability from within the spelling dialog popup
//
// Uncomment the jspellStyles variable definition to use your own JSpell style definitions
// instead of the built-in JSpell styles for indicating errors, ignored words, etc.
//
// For example, uncomment the following section to apply different styles to the spell check results. The following
// styles will make incorrect words highlighted in yellow.
//
// 1== unknown, 2==correct, 3==incorrect, 4==ignored, 5==user, 6==double
//var jspellStyles = [["a.j1", ""], 
//	["a.j2", ""], 
//	["a.j3", "background: yellow"], 
//	["a.j4", "color:#787878"], 
//	["a.j5", "color:#787878"], 
//	["a.j6", "background: pink"]];
//
// For extremely fast spell check requests try using a jspellTimeout value of 200 (or less). If you are experiencing problems
// try increasing the spell check request delay. 
//
// var jspellTimeout=200; // faster than Microsoft Word
// var jspellTimeout=2000; // may be better on very slow systems
//var jspellStyles = [["span.j1", ""], 
//	["span.j2", ""], 
//	["span.j3", "background: url(\"/jspellEvolution/jspellimages/yellow.gif\") repeat center "], 
//	["span.j4", "color:#787878"], 
//	["span.j5", "color:#787878"], 
//	["span.j6", "background: pink"]];
var jspellServerPath="/osfa-audit/abc"; // specifies the relative path to the JSpell Evolution spell check server, absolute URLs are not supported and are *incorrect*
