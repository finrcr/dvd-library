<!DOCTYPE html>
<html lang=en xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib uri="/WEB-INF/dvd.tld" prefix="dvd" %>

<%@ page session="false" %>

<head>
	<meta charset="utf-8">	
	<title>OSFA DVD Home</title>
</head>

<body>
	<%@ include file="includes/head.jspf"%>
	<%@ include file="includes/header.jspf"%>
	
	<div id="homepage">
		<h2>OSFA DVD</h2>
		<hr/>
		<h1>UMD Federal Work-Study System</h1>
		<p> The University of Maryland Federal Work Study (DVD) system allows authorized Office of Student Financial Aid
		 (OSFA) staff to configure and view DVD student award, student payroll, DVD Program and employer account information.
		</p>
		<a class="btn btn-large btn-success" href="/dvd/secure/">Enter</a>
	</div>

	<%@ include file="includes/footer.jspf"%>
</body>
</html>
