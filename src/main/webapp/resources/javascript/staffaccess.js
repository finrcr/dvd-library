$(function() {
	/* both email and persons */
	$('table.persons, table.email').dataTable({
		bAutoWidth: false,
		bJQueryUI: true,
		iDisplayLength: 10,
		aoColumnDefs: [ {"bSortable": false, "sWidth": "10%", "aTargets": [2] } ],
		fnDrawCallback : function() {
				var buttons = $('.selectPerson, .selectEmail');
				buttons.button({
					icons: {primary: "ui-icon ui-icon-arrow-1-e" }
				});
				buttons.css("width", "50%");
			
		}
	});
	
	
	// since there could be more than one page
	$('table.persons').on("click", "span.selectPerson", function() {
		//console.log(this);
		var email = $(this).parent().siblings('.email').text();
		var form = $(this).parents('form');
		$('[name=email]', form).val(email);
		//console.log(email);
		
		form.submit();
	});
	
	/* reviewers table */
	var reviewers = $('table#reviewers');
	reviewers.dataTable({bJQueryUI: true, iDisplayLength: 10});
	
	reviewers.on("click", "a", function(event) {
		// stop it from propagating
		event.preventDefault();
		var name = $(this).text();
		$('form[name=ReviewersForm] > input[name=reviewer]').val(name);
		$('form[name=ReviewersForm]').submit();
	});
	
	//$('table#reviewers > tbody > tr > td').button();
	//$('table#reviewers td > span').css('display', 'inline');
	
	$('table.email').on("click", "span.selectEmail", function() {
		var emailTitle = $(this).parent().siblings('.emailTitle').text();
		var form = $(this).parents('form');
	
		// submits email title for email field
		$('[name=email]', form).val(emailTitle);
		
		form.submit();
	});
});