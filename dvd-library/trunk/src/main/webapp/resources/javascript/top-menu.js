
$(document).ready(function() {
	var pathname = window.location.pathname;
	var parent = null;
	
	$('#tabs a').each(function(i, element){
		var e = $(element);
		if(pathname.indexOf(e.attr("href")) >= 0)
			parent = e.parent();
	});
	
	if(parent != null)
		parent.addClass('ui-state-active');
});