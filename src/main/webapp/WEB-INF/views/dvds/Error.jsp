<!DOCTYPE html>
<html lang=en xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib uri="/WEB-INF/dvd.tld" prefix="dvd" %>

<head>
<meta charset="utf-8">
<title>DVD Site Error</title>
<%@ include file="../includes/head.jspf"%>
</head>

<body id="denied">
	<%@ include file="../includes/header.jspf"%>
	<%@ include file="../includes/menu.jspf"%>
	<div id="text_container">
	
		<div class = "center">
		<br/>
		<h3>${errorMessage}</h3>
		<hr>
		
		An error has occurred. If this problem re-occurs, please contact 
		<a href="mailto:finrcr@umd.edu">finrcr@umd.edu</a>.
		
		<br/><br/>
		<button class="alloc btn btn-success" id = "back" type = "button" onclick = "javascript:history.back();">
			Back
		</button>
		</div>
	</div>
	<%@ include file="../includes/footer.jspf"%>
</body>
</html>
