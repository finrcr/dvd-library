$(document).ready(function() {
	
	var students = $('table#students');
	var accesses = $('table#accesses');
	var form = $('form[name=PDFForm]');
	
	students.dataTable({
		bAutoWidth: true,
		bJQueryUI: true,
		iDisplayLength : 10,
		aaSorting: [],
		fnDrawCallback: function(oSettings) {
			$('button').button();
		},
		aoColumnDefs: [ {bSortable: false,aTargets: [1] } ]
	});
	
	// function handler for links
	students.on("click", ".viewPDF", function(event) {
		
		var button = $(this);

		var id = button.attr("id").substr(2);
		// update field
		$('[name=id]', form).val(id);		
		// send
		form.submit();

	});

	accesses.dataTable({
		order: [ 0, "desc" ],
		bAutoWidth: true,
		bJQueryUI: true,
		iDisplayLength : 10,
		"aaSorting": [[0, "desc"]],	
		aoColumnDefs: [ {bSortable: false,aTargets: [0] } ],
	});
	
	$('input[type=button], input[type=submit], button').button();
	
	$('#logoffBtn').click(function() {
		window.location = "/osfa-audit/logout";
	});
	
	
	$('form[name=ExcelForm]').submit(function() {
				
		// add spinning thingy 
		var div = $('div#overlay');
		div.height($(document).height());
		div.width($(document).width());
		div.addClass('disableWindow');

		// add spinner 
		var opts = {
			lines : 13, // The number of lines to draw
			length : 60, // The length of each line
			width : 7, // The line thickness
			radius : 10, // The radius of the inner circle
			corners : 1, // Corner roundness (0..1)
			rotate : 0, // The rotation offset
			color : '#FFFFFF', // #rgb or #rrggbb
			speed : 1, // Rounds per second
			trail : 60, // Afterglow percentage
			shadow : false, // Whether to render a shadow
			hwaccel : false, // Whether to use hardware acceleration
			className : 'spinner', // The CSS class to assign to the spinner
			zIndex : 2e9, // The z-index (defaults to 2000000000)
			top : 'auto', // Top position relative to parent in px
			left : 'auto' // Left position relative to parent in px
		};
		var target = document.getElementById('spinner');
		var spinner = new Spinner(opts).spin(target);

		div.show();
		
		/* actual call */
		var form = $(this);
		$.fileDownload(form.attr('action'), {
			data: form.serialize(),
			successCallback : function() {
				spinner.stop();
				div.hide();
			}
		});
		
		return false;
	});
});