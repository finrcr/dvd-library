<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<html>

<head>

<%@ include file="/WEB-INF/includes/CommonIncludes.jspf" %>

<link rel="stylesheet" type="text/css" href="//ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.3/css/jquery.dataTables_themeroller.css" media="all" />
<link rel="stylesheet" type="text/css" href="${base}/resources/css/Reviewer.css"/>

<title>DVD Library Web Application | Access Point | ${_version}</title>

<script type="text/javascript">
$(document).ready(function() {
	$('input[type=button], input[type=submit], button').button();
});
</script>

</head>

<body>

<div class="umd-frame">
<div id="umd-frame-header"> 
</div>
</div>
	
<table class="bodyContTable" id="mainFrame" >
<!-- <table> -->
    <tr>
    	<th class="headingSmall" colspan="2">
    		<span class="title" style="float:left;">&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the Dvd Library</span>
		</th>
	</tr>	
	<tr>
		<td>
		<div class="accesserror">	
			<dvd:messages />
		</div>
		</td>
	</tr>	
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	<tr class="blank"><td></td></tr>
	
  	<tr><td class="half">
		<form action="/dvd-library/dvds/list" name="DvdAccessForm">
			<div class="center">
				<input type="submit" value="Enter Dvd Library"/>
			</div>
		</form>		
	</td>
	<td class="half">
		<img src="${base}/resources/images/picture10.jpg" id="SFAPackage_Picture" class="floatRight"
		      alt="Random Picture"/> 
	</td></tr>

	<tr>
	<td colspan="2" >
	</td>
	</tr>
 
  	<tr><td colspan="2">&nbsp;</td></tr>
  
	<%@ include file="/WEB-INF/includes/CommonFooter.jspf" %>
  
</table><!-- Body cont ends here: end mainFrame -->

</body><!-- End umd-frame -->

</html>
