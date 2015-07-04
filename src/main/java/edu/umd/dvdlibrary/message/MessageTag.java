package edu.umd.dvdlibrary.message;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.tags.RequestContextAwareTag;

import edu.umd.dvdlibrary.service.MessageServer;
import edu.umd.dvdlibrary.message.MessageBean.Message;
import edu.umd.dvdlibrary.message.MessageBean.MessageType;

/**
 * Custom tag that renders messages from the messageServer entity into jsps.<br>
 * The type of the message determines how the message is formatted and displayed.<br>
 * Usage: Add <umd:messages/> to a jsp, this will display the messages there then clear the message list
 */
public class MessageTag extends RequestContextAwareTag {
	private static final long serialVersionUID = -7034070455868475540L;

	private static final String SYSTEM_ERROR_ADDENDUM = " If the error reoccurs, please notify: <a href=\"mailto:sfa-webstatus@umd.edu\">sfa-webstatus@umd.edu</a> with this error message.";

	// All message types in order of descending severity/priority
	private static final List<MessageType> TYPES_BY_PRIORITY = Arrays.asList(
			MessageType.SYSTEM, MessageType.ERROR, MessageType.ACCESS,
			MessageType.TIMEOUT, MessageType.LOCKOUT, MessageType.WARNING,
			MessageType.VALIDATE,
			MessageType.GENERAL, MessageType.INFORMATION,
			MessageType.CONFIRM, MessageType.STOP);

	@Inject private MessageServer messageServer;

	@Override
	protected int doStartTagInternal() throws Exception {
		if (messageServer == null) {
			// Necessary to inject into non-Spring managed object
			WebApplicationContext wac = getRequestContext().getWebApplicationContext();
			AutowireCapableBeanFactory acbf = wac.getAutowireCapableBeanFactory();
			acbf.autowireBean(this);
		}
		displayTag();
		return SKIP_BODY;
	}
	/**
	 * Render the specified messages if there are any.
	 * @exception JspException if a JSP exception has occurred
	 */
	public void displayTag() throws JspException {
		//		HttpSession sss = pageContext.getSession();
		//		MessageServer messageServer = (MessageServer) sss.getAttribute("messageServer");

		if (messageServer == null || !messageServer.hasMessages()) {
			return;
		}

		// Render the messages in order of descending severity
		StringBuilder messageReport = new StringBuilder();
		for (MessageType messageType : TYPES_BY_PRIORITY) {
			renderMessage(messageServer, messageReport, messageType);
		}
		// Print the messages to the client output writer as an unnumbered list
		try {
			JspWriter out = pageContext.getOut();
			out.println("<ul class=\"message\">");
			out.println(messageReport.toString());
			out.println("</ul>");

		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
	}

	/**
	 * Renders all the messages in a messageServer for a particular messageType into a given buffer.
	 */
	protected void renderMessage(MessageServer messageServer,
			StringBuilder messageBuffer, MessageType messageType) {
		List<Message> messages;
		String messageClass;
		String messageColor;

		if (messageServer.messageCategorySize(messageType) > 0) {
			messages = messageServer.getMessagesByCategory(messageType);

			for (Message message: messages) {

				if (message != null) {
					messageClass = messageType.getMessageClass();
					messageColor = messageType.getMessageColor();

					if (messageClass != null) {
						messageBuffer.append("<li class=\"");
						messageBuffer.append(messageClass);
						messageBuffer.append("\">");

					} else {
						messageBuffer.append("<li>");
					}
					if (messageColor != null) {
						messageBuffer.append("<font color='");
						messageBuffer.append(messageColor);
						messageBuffer.append("'>");
					}
					messageBuffer.append(message.getMessage());

					if (messageType == MessageType.SYSTEM) {
						messageBuffer.append(SYSTEM_ERROR_ADDENDUM);
					}

					if (messageColor != null) {
						messageBuffer.append("</font>");
					}
					messageBuffer.append("</li>\r\n");
				}
			}
			messageServer.clearMessagesByCategory(messageType);
		}
	}
}