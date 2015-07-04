<!DOCTYPE html>
<html lang=en xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib uri="/WEB-INF/dvd.tld" prefix="dvd" %>

<%@ page session="false" %>

<head>
	<title>DVD Staff Home</title>
	<%@ include file="../includes/head.jspf"%>
</head>

<body id="home">
	<%@ include file="../includes/header.jspf"%>
	<!-- <div id="title">UMD Federal Work-Study System</div> -->
	<%@ include file="../includes/menu.jspf"%>
	<div id="text_container">
		<h1>Welcome to the Federal Work-Study System!</h1>
		<p class="subheading">Select from the following options:</p>

		<noscript>
			<p class = "warn">
				Your browser does not support JavaScript, or you currently have JavaScript disabled.
				Much of this application will not work without JavaScript enabled.
			</p>
		</noscript>
		<hr>
		
		<div class="tile">
			<a href="/dvd/secure/studentRecords" class="tile_heading">View Student Earnings</a>
			<p>Look at a student's work-study offer amounts, earnings by department, and DVD payroll records</p>
			<a href="/dvd/secure/studentRecords" class="btn">Students »</a>
		</div>
		
		<div class="tile">
			<a href="/dvd/secure/departmentRecords" class="tile_heading">Modify DVD Departments</a>
			<p>View, Edit, or Create department records and allocations, Set earning limits for departments</p>
			<a href="/dvd/secure/departmentRecords" class="btn">Departments »</a>
		</div>
		
		
		<p>&nbsp;</p><hr>
		
		<div class="tile">
			<a href="/dvd/secure/universityRecords" class="tile_heading">Modify University Profile</a>
			<p>Modify fall/spring and summer semester start dates for the DVD calendar, change email threshold percentages</p>
			<a href="/dvd/secure/universityRecords" class="btn">University »</a>
		</div>

		<div class="tile">
			<a href="/dvd/secure/DVDEmail" class="tile_heading">Build/Send Email Notifications</a>
			<p>View and Edit email templates, send emails to DVD Departments or DVD Students</p>
			<a href="/dvd/secure/DVDEmail" class="btn">Emails »</a>
		</div>

		<p>&nbsp;</p><br>

	</div>
	<%@ include file="../includes/footer.jspf"%>
</body>
</html>
