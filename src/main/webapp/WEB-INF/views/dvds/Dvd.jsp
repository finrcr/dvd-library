<!DOCTYPE html>
<html lang=en xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib uri="/WEB-INF/dvd.tld" prefix="dvd" %>

<head>
<meta charset="utf-8">
<title>DVDs</title>
<%@ include file="../includes/head.jspf"%>
</head>

<body id="departments">
	<%@ include file="../includes/header.jspf"%>
	<%@ include file="../includes/menu.jspf"%>
	<script src="/dvd/resources/js/department.js"></script>
	
	<div id="text_container">
		<h1>DVD</h1>
		
		<dvd:messages/>
		
		<hr>
		
		<form:form action="/dvd/secure/departmentRecords" id="aidyearform" modelAttribute = "search">
			<c:choose>
				<c:when test = "${! empty search.selectedAidYear}">
					<div class="right">
						<span class = "raised">Search</span>
						<form:input type="text" id="inputFilter" path = "inputFilter" autocomplete = "off"/>
					</div>
				</c:when>
			</c:choose>
		
			<span class="left">
				<span class = "raised">Please select an aid year:</span>
				<%@ include file="../includes/selectaidyear.jspf"%>
			</span>
		</form:form>
		
		
		<table class="table" id="department-list">
			<c:choose>
				<c:when test = "${writeaccess && ! empty search.selectedAidYear}">
					<tr>
						<td class = "paddedname"></td>
						<td colspan="2">
						<c:if test="${writeaccess && empty departmentList}">
							<a class="alloc btn btn-success" href="/dvd/secure/GenerateDepartments">Generate
								Departments</a>
						</c:if>
						</td>
						<td><a data-toggle="modal" href="#createModal" class="btn btn-primary">Create</a></td>
						
					</tr>
				</c:when>
			</c:choose>
			<c:forEach var="department" items="${departmentList}">
				<tr class = "concealable">
					<td class = "paddedname">${department.value}</td>
					<c:choose>
						<c:when test="${writeaccess}">
							<td>
								<a data-toggle="modal" href="#allocateModal" class="alloc btn" 
									data-departmentid="${department.key}">Allocate</a>
							</td>
							
							<td>
								<a data-toggle="modal" href="#editModal" class="editbtn btn" 
									data-departmentid="${department.key}">Edit</a>
							</td>
						</c:when>
						<c:otherwise>
							<td></td><td></td>
						</c:otherwise>
					</c:choose>
					
					<td>
						<a data-toggle="modal" href="#viewModal" class="viewbtn btn btn-success" 
							data-departmentid="${department.key}">View</a>
					</td>
					
				</tr>
			</c:forEach>
		</table>

		<!--  tab index enables esc functionality -->
		<!-- Create Department Pop-up Area -->
		<div id="createModal" class="modal hide" data-backdrop="static"
			tabindex="-1" style="display: none;">
			<div class="modal-dialog">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">×</button>
					<h3>Create Department</h3>
					<h4>
						For Aid Year ${aidYearDescription}
					</h4>
				</div>
				<div class="modal-body">
					<h4>Department Info</h4>
					<ul>
						<li><span class="lbl">Department Name*</span><input
							type="text" id="create-name" maxlength = "50">
						<li><span class="lbl">Department Number*</span><input
							type="text" id="create-num" class="short-textbox"
							maxlength="${idlength}" pattern = ".{${idlength},}">
						<li><span class="lbl">Department Type*</span><select id = "create-type">
								<option value = "TRAD">Traditional</option>
								<option value = "AR">America Reads</option>
								<option value = "AC">America Counts</option>
								<option value = "SCHL">DVD Scholar</option>
						</select><br>
						<li><span class="lbl">Departmental Acct.*</span><input
							type="text" id="create-acct" class="short-textbox"
							maxlength="6" pattern = ".{6,}">
					</ul>
					<span class = "small">* indicates required fields</span>
					<hr>
					<h4>Contact Info</h4>
					<ul>
						<li><span class="lbl">U ID*</span><input type="text" id="create-uid" maxlength="9" pattern=".{9}" class="short-textbox"></li>
						<li><span class="lbl">Name</span><input type="text" id="create-cname" maxlength = "35">
						<li><span class="lbl">E-Mail*</span><input type="text" id="create-email" pattern = ".{5,}" maxlength = "25">
						<li><span class="lbl">Phone</span><input type="text" id="create-phone" pattern = ".{5,10}" maxlength = "10">
						<li><span class="lbl">Fax</span><input type="text" id="create-fax" pattern = ".{5,10}" maxlength = "10">
						<li><span class="lbl">Address</span><input type="text" id="create-address1" maxlength = "80">
						<li><span class="lbl">&nbsp;</span><input type="text" id="create-address2" maxlength = "80">
					</ul>
					<span class = "small">* UID or E-mail fields must be filled.</span>
					<hr>
					<h5>Department Notes</h5>
					<textarea id = "create-notes" class="department-notes"></textarea>
				</div>

				<div class="modal-footer">
					<a href="#" class="btn" data-dismiss="modal">Cancel</a> 
					<a href="#" class="saveCreate btn btn-primary" data-dismiss="modal">Create</a>
				</div>
			</div>
		</div>
		
		<!-- View Info Pop-up Area -->
		<div id="viewModal" class="widemodal hide" data-backdrop="static"
			tabindex="-1" style="display: none;">
			<div class="modal-dialog">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">×</button>
					<br>
					<h3 class = "center">
						<span id="show-department-name"></span>
					</h3>
					<h4 class = "center">
						Aid Year <span class="aidyear-label">${aidYearDescription}</span>
					</h4>
				</div>
				<div class="modal-body">
				
					<div class = "block">
						<h4 class = "center">Department Information</h4>
						<table class = "modal-table">
						<tr><td class = "right bold tdpadded">Department Number: </td><td><span id = "show-num"></span></td></tr>
						<tr><td class = "right bold tdpadded">Department Type: </td><td><span id = "show-type"></span></td></tr>
						<tr><td class = "right bold tdpadded">Department Account: </td><td><span id = "show-acct"></span></td></tr>
						</table>
					</div>
					<hr>
					<div class = "block">
						<h4 class = "center">Contact Information</h4>
						<table class = "modal-table">
						<tr><td class = "right bold tdpadded">Name: </td><td><span id = "show-name"></span></td></tr>
						<tr><td class = "right bold tdpadded">UID: </td><td><span id = "show-uid"></span></td></tr>
						<tr><td class = "right bold tdpadded">Email: </td><td><span id = "show-email"></span></td></tr>
						<tr><td class = "right bold tdpadded">Phone: </td><td><span id = "show-phone"></span></td></tr>
						<tr><td class = "right bold tdpadded">Fax: </td><td><span id = "show-fax"></span></td></tr>
						<tr><td class = "right bold tdpadded">Address: </td><td><span id = "show-address1"></span><br>
								<span id = "show-address2"></span></td></tr>
						</table>
					</div>
					<hr>
					<div class = "block">
						<h4 class = "center">Semester Allocation Amounts</h4>
						<table class = "modal-table">
							<tr>
							<td class = "center bold">Summer</td>
							<td class = "center bold">Fall/Spring</td>
							</tr>
							<tr>
							<td>
								<table class = "modal-table">
								<tr><td class = "right bold tdpadded">Allocation:</td><td> $ <span id="show-alloc-summer"></span></td></tr>
								<tr><td class = "right bold tdpadded">Earnings:</td><td> $ <span id="show-earnings-summer"></span></td></tr>
								<tr><td class = "right bold tdpadded">Adjustments:</td><td> $ <span id="show-adjustments-summer"></span></td></tr>
								<tr><td class = "right bold tdpadded">Transactions:</td><td> $ <span id="show-transactions-summer"></span></td></tr>
								<tr><td class = "right bold tdpadded">Total:</td><td> $ <span id="show-total-summer"></span></td></tr>
								<tr><td class = "right bold tdpadded">Remaining:</td><td> $ <span id="show-remaining-summer"></span></td></tr>
								</table>
							</td>
								
							<td>
								<table class = "modal-table">
								<tr><td class = "right bold tdpadded">Allocation:</td><td> $ <span id="show-alloc-fs"></span></td></tr>
								<tr><td class = "right bold tdpadded">Earnings:</td><td> $ <span id="show-earnings-fs"></span></td></tr>
								<tr><td class = "right bold tdpadded">Adjustments:</td><td> $ <span id="show-adjustments-fs"></span></td></tr>
								<tr><td class = "right bold tdpadded">Transactions:</td><td> $ <span id="show-transactions-fs"></span></td></tr>
								<tr><td class = "right bold tdpadded">Total:</td><td> $ <span id="show-total-fs"></span></td></tr>
								<tr><td class = "right bold tdpadded">Remaining:</td><td> $ <span id="show-remaining-fs"></span></td></tr>
								</table>
							</td>
							
							</tr>
						</table>
					</div>
					
					<hr>
					Last Email Sent: <span class="show-last-email"></span>&nbsp;&nbsp;<span class="show-last-email_date"></span> <br><br>
					
					<h5>Department Notes</h5>
					<textarea id = "view-notes" class="department-notes" readonly = "readonly"></textarea>
				</div>

				<div class="modal-footer">
					<a href="#" class="btn" data-dismiss="modal">Exit</a>
				</div>
			</div>
		</div>
		
		<!-- Edit Info Pop-up Area -->
		<div id="editModal" class="modal hide" data-backdrop="static"
			tabindex="-1" style="display: none;">
			<div class="modal-dialog">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">×</button>
					<h3>Edit Department <span
							id="department-num"></span> for ${aidYearDescription}</h3>

				</div>
				<div class="modal-body">
					<h4>Department Info</h4>
					<ul>
						<li><span class="lbl">Department Name*</span><input
							type="text" id="department-name" maxlength = "50">
						<li><span class="lbl">Department Type*</span><select id = "department-type">
								<option value = "TRAD">Traditional</option>
								<option value = "AR">America Reads</option>
								<option value = "AC">America Counts</option>
								<option value = "SCHL">DVD Scholar</option>
						</select><br>
						<li><span class="lbl">Departmental Acct.*</span><input
							type="text" id="department-acct" class="short-textbox"
							maxlength="6" pattern = ".{6,}">
					</ul>
					<span class = "small">* indicates required fields</span>
					<hr>
					<h4>Contact Info</h4>
					<ul>
						<li><span class="lbl">U ID*</span><input type="text" id="contact-uid" maxlength="9" class="short-textbox"></li>
						<li><span class="lbl">Name</span><input type="text" id="contact-name" maxlength = "35">
						<li><span class="lbl">E-Mail*</span><input type="text" id="contact-email" pattern = ".{5,}" maxlength = "25">
						<li><span class="lbl">Phone</span><input type="text" id="contact-phone" pattern = ".{5,10}" maxlength = "10">
						<li><span class="lbl">Fax</span><input type="text" id="contact-fax" pattern = ".{5,10}" maxlength = "10">
						<li><span class="lbl">Address</span><input type="text" id="contact-address1" maxlength = "80">
						<li><span class="lbl">&nbsp;</span><input type="text" id="contact-address2" maxlength = "80">
					</ul>
					<span class = "small">* UID or E-mail fields must be filled.</span>
					<hr>
					<h5>Department Notes</h5>
					<textarea id = "edit-notes" class="department-notes"></textarea>
				</div>

				<div class="modal-footer">
					<a href="#" class="btn" data-dismiss="modal">Cancel</a> <a href="#"
						class="saveEdit btn btn-primary" data-dismiss="modal">Save
						changes</a>
				</div>
			</div>
		</div>
		
		<!-- Allocate $ Pop-up Area -->
		<div id="allocateModal" class="modal hide" data-backdrop="static"
			tabindex="-1" style="display: none;">
			<div class="modal-dialog">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">×</button>
					<h3>
						Allocate Money for Aid Year <span class="aidyear-label">${aidYearDescription}</span>
					</h3>
					<h4>
						Department: <span id="modal-department"></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="block">
						<h4>Summer</h4>
						<ul>
							<li><span class="lbl">Allocation:</span> $ <input
								type="text" id="alloc-summer" class="short-textbox"></li>
							<li><span class="lbl">Earnings:</span> $ <span
								id="modal-earnings-summer"></span></li>
							<li><span class="lbl">Adjustments:</span> $ <span
								id="modal-adjustments-summer"></span></li>
							<li><span class="lbl">Transactions:</span> $ <span
								id="modal-transactions-summer"></span></li>
							<li><span class="lbl">Total:</span> $ <span
								id="modal-total-summer"></span></li>
							<li><span class="lbl">Remaining:</span> $ <span
								id="modal-remaining-summer"></span></li>
						</ul>
					</div>

					<div class="block">
						<h4>Fall/Spring</h4>
						<ul>
							<li><span class="lbl">Allocation:</span> $ <input
								type="text" id="alloc-fs" class="short-textbox"></li>
							<li><span class="lbl">Earnings:</span> $ <span
								id="modal-earnings-fs"></span></li>
							<li><span class="lbl">Adjustments:</span> $ <span
								id="modal-adjustments-fs"></span></li>
							<li><span class="lbl">Transactions:</span> $ <span
								id="modal-transactions-fs"></span></li>
							<li><span class="lbl">Total:</span> $ <span
								id="modal-total-fs"></span></li>
							<li><span class="lbl">Remaining:</span> $ <span
								id="modal-remaining-fs"></span></li>
						</ul>
					</div>

					<hr> 
					
					<h5>Department Notes</h5>
					<textarea id = "alloc-notes" class="department-notes"></textarea>
				</div>

				<div class="modal-footer">
					<a href="#" class="btn" data-dismiss="modal">Cancel</a> <a href="#"
						class="save btn btn-primary" data-dismiss="modal">Save changes</a>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="../includes/footer.jspf"%>
</body>
</html>
