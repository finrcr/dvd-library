<%@ include file="/WEB-INF/includes/top.jspf" %>
<%-- Here so the errors will go away --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
			
			<table id="dvds" style="width: 928px;">
				<thead>
					<tr>
						<th>Id</th>
						<th width="300em">Film Title</th>
						<th>Column</th>
						<th>Row</th>
						<th>Director</th>
						<th>Genre</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="entry" items="${records}" varStatus="status">
						<tr>
							<td align="center"> 
								${entry.value.id} 
							</td>
							<td align="center"> 
								${entry.value.name} 
							</td>
							<td align="center"> 
								${entry.value.columne} 
							</td>
							<td align="center"> 
								${entry.value.rowe} 
							</td>
							<td align="center"> 
								${entry.value.director} 
							</td>
							<td align="center"> 
								${entry.value.genre} 
							</td>
						</tr>
					</c:forEach>							
				</tbody>
			</table>
		</div>
	</td></tr>
  	
 <%@ include file="/WEB-INF/includes/bottom.jspf" %><br/><br/>
 