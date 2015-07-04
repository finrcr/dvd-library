<!DOCTYPE html>
<html lang=en xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="/WEB-INF/dvd.tld" prefix="dvd" %>
<head>
<meta charset="utf-8">
<title>Confirm Send Email</title>
<%@ include file="../includes/head.jspf"%>
</head>

<body id="email">
	<%@ include file="../includes/header.jspf"%>
	<%@ include file="../includes/menu.jspf"%>
	<div id="text_container">

		<br>
		<h1>Send Confirmation</h1>
		
		<br>

		<form:form id="submittable" modelAttribute="em">
			<div class="record" align="center">

				<h4>Are you sure you want to send emails to these recipients?</h4>

				<br>

				<table class="table_top">
					<tr>
						<td>
							<button formaction="/dvd/secure/DVDEmail" form="submittable"
								class="alloc btn btn-danger" id="retrieveemail" type="submit"
								value="Submit">Go Back</button>
						</td>
						<td>
							<button formaction="/dvd/secure/SendEmails"
								form="submittable" class="alloc btn btn-primary" id="build"
								type="submit">Send Emails</button>
						</td>
					<tr>
				</table>

				<br> <br>
				<table class="table_alone">
					<tr class="bold">
					<tr>
						<td class="bold">Recipients Found:
						<td>
						<td><select id="recipients" name="recs"
							class="input_field_table">
								<c:forEach items="${recmap}" var="rec">
									<option value="${rec.value}">${rec.key}</option>
								</c:forEach>
						</select></td>
					</tr>
				</table>
				<table class="table_alone">
					<tr>
						<td class="bold">Email Title:</td>
						<td><form:input name="emailtitle" readonly="true"
								class="input_field_table" path="id.emailTitle" /></td>
					</tr>
					<tr>
						<td class="bold">Email Subject:</td>
						<td><form:input name="emailsubject" readonly="true"
								class="input_field_table" path="emailSubject" /></td>
					</tr>
			
				</table>
				<table class="table_center">
				<tr class="bold" align="center">
						<td>Sample Email with recipient '${sampleRecipient}':</td>
					</tr>
					<tr>
						<td>
						 <textarea style="width: 600px; height: 450px" readonly>${sampleBody}</textarea>
						<td>
					</tr>
				</table>

			</div>
		</form:form>
	</div>
	<%@ include file="../includes/footer.jspf"%>

</body>
</html>