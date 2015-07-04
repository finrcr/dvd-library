package edu.umd.dvdlibrary.message;

import java.io.Serializable;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * The message.  Each message object represents a message to be displayed to the user by a message tag in the next JSP rendered
 */
public class MessageBean {
	@Getter
	public enum MessageType {
		SYSTEM(null, "RED"), ERROR("info", "RED"), ACCESS("stop", "RED"),
		TIMEOUT("info", "BROWN"), LOCKOUT("info", "BROWN"), WARNING("stop", "BROWN"),
		VALIDATE(null, "BLUE"),
		GENERAL(null, "GREEN"), INFORMATION("infoImportant", "GREEN"),
		CONFIRM("check", null), STOP("stop", null);

		private final String messageClass; // css class, used for formatting
		private final String messageColor;
		private MessageType(String messageClass, String messageColor) {
			this.messageClass = messageClass;
			this.messageColor = messageColor;
		}
	}

	@Getter
	@Setter
	@ToString
	@EqualsAndHashCode
	public static class Message implements Serializable {
		private static final long serialVersionUID = 2506567499101819993L;

		private MessageType messageType = null;
		private String message = null;

		public Message() {}

		public Message(MessageType messageType, String message) {
			this.messageType = messageType;
			this.message = message;
		}
	}
}
