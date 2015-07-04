<%@ include file="/WEB-INF/includes/top.jspf" %>
<%-- Here so the errors will go away --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

	<tr>
		<td colspan="2">
		<form:form id="UpdateForm" name="updateDvd" action="/dvd-library/dvds/update" method="POST" modelAttribute="dvdForm">
			<input type="hidden" name="buttonState" value='UpdateDvd'/>
			
			<br/><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;Update/Change an Existing DVD in the Library</strong><br/><br/><br/>

			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
					<form:input type="text" path="id" value="${id}"/>
				</p>
			</div>
			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Film Title:&nbsp;</b>
					<form:input type="text" path="name" value="${name}"/>
				</p>
			</div>
			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Column:&nbsp;&nbsp;&nbsp;</b>
						<form:input type="text" path="columne" value="${columne}"/>
				</p>
			</div>
			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Row:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
					<form:input type="text" path="rowe" value="${rowe}"/>
				</p>
			</div>
			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Director:&nbsp;</b>
					<form:input type="text" path="director" value="${director}"/>
				</p>
			</div>
			<div class="formWrap">	
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<b>Genre:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
					<form:input type="text" path="genre" value="${Sgenre}"/>
				</p>
			</div>
			<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="submit" value="Find Dvd by Id Number" onClick="buttonState.value = 'SearchDvd';"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="submit" value="Update Dvd in Library" />
			
		</form:form>	
	</td>
		 	
 <%@ include file="/WEB-INF/includes/footer.jspf" %>
 