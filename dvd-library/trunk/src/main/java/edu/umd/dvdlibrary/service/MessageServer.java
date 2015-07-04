package edu.umd.dvdlibrary.service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;

import edu.umd.dvdlibrary.message.MessageBean.Message;
import edu.umd.dvdlibrary.message.MessageBean.MessageType;

/**
 * manages messages for jsps, such as empty form fields, confirmation of submitted documents, etc.
 *
 * messagesByCaterory is the map that contains the list of messages by categories
 */

@Service
@Scope(value="session", proxyMode=ScopedProxyMode.TARGET_CLASS)
public class MessageServer implements Serializable {
	private static final Logger logger = LoggerFactory.getLogger(MessageServer.class);

	private static final long serialVersionUID = 2506567499101819993L;

	// Values (List<Message>) in this map will never be null
	private Map<MessageType, List<Message>> messagesByCategory = null;

	public MessageServer() {
		this.clear(); // initialize map & lists to be non-null
	}
	/**
	 * Clear all messages recorded by this object.<br>
	 * Create an empty (initial) list for each message type.
	 */
	public void clear() {
		messagesByCategory = new HashMap<MessageType, List<Message>>();

		for (MessageType messageType: MessageType.values()) {
			messagesByCategory.put(messageType, new ArrayList<Message>());
		}
	}
	/**
	 * Print out the messages by message types and messages to console.<br>
	 * Messages are not visible to actual user of application, this is just meant to store messages in logs.
	 */
	public void logMessagesByCategory() {
		logger.trace("@@@@@_ server (MessageServer.logMessagesByCategory())");

		for (MessageType messageType: MessageType.values()) {
			List<Message> messages = this.getMessagesByCategory(messageType);
			for (Message message: messages) {
				logger.trace("Type: Message: " + messageType + ": " + message.getMessage());
			}
		}
	}
	/**
	 * Print out the messages for a single message type to console.<br>
	 * Messages are not visible to actual user of application, this is just meant to store messages in logs.
	 */
	public void logMessagesByCategory(MessageType messageType) {
		logger.trace("@@@@@_ server (MessageServer.logMessagesByCategory(MessageType))");

		List<Message> messages = this.getMessagesByCategory(messageType);
		for (Message message: messages) {
			logger.trace("Type: Message: " + messageType + ": " + message.getMessage());
		}
	}

	/**
	 * clear/remove messages from messagesByCategory by message type
	 */
	public void clearMessagesByCategory(MessageType messageType) {
		logger.trace("@@@@@_ server (MessageServer.clearMessagesByCategory())");

		if (this.messagesByCategory.size() > 0) {
			this.messagesByCategory.remove(messageType);
			this.messagesByCategory.put(messageType, new ArrayList<Message>());
		}
	}

	/**
	 * Add an message to the set of messages for the specified type.
	 *
	 * @param message The message message to be added
	 */
	public void addMessage(Message message) {
		logger.trace("@@@@@_ server (MessageServer.addMessage()): " + message);

		List<Message> list = messagesByCategory.get(message.getMessageType());
		list.add(message);
	}
	/**
	 * Return the number of messages associated with the specified type.
	 *
	 * @param messageType type of message
	 */
	public int messageCategorySize(MessageType messageType) {
		return messagesByCategory.get(messageType).size();
	}
	public int countAllMessages() {
		int totalCount = 0;
		for (MessageType messageType: MessageType.values()) {
			totalCount += messageCategorySize(messageType);
		}
		return totalCount;
	}

	public boolean hasMessages() {
		return countAllMessages() > 0;
	}
	/**
	 * Return the set of messages related to a specific type.
	 *
	 * @param messageType of message
	 */
	public List<Message> getMessagesByCategory (MessageType messageType) {
		logger.trace("@@@@@_ server (MessageServer.getMessagesByCategory())");
		return messagesByCategory.get(messageType);
	}
	/**
	 * Combine multiple arguments into one.
	 * Useful for messageServer.addValidationMessage("validation.oneof", asOrPhrase(...))
	 * Ex: asOrPhrase("Award Type") = "Award Type"
	 * Ex: asOrPhrase("UID", "DirectoryID") = "UID or DirectoryID"
	 * Ex: asOrPhrase("Address", "Phone", "Email") = "Address, Phone, or Email"
	 */
	public static String asOrPhrase(String ... args) {
		if (args.length == 1) {
			return args[0];
		} else if (args.length == 2) {
			return args[0] + " or " + args[1];
		} else {
			StringBuilder phrase = new StringBuilder();
			for (int i = 0; i < args.length; i++) {
				if (i != 0) {
					phrase.append(", ");
				}
				if (i == args.length - 1) {
					phrase.append("or ");
				}
				phrase.append(args[i]);
			}
			return phrase.toString();
		}
	}
	/**
	 * Message adding methods - for convenience and syntactic sugar
	 */
	public void addSystemMessage(String message) {
		addMessage(new Message(MessageType.SYSTEM, message));
	}
	public void addErrorMessage(String message) {
		addMessage(new Message(MessageType.ERROR, message));
	}
	public void addAccessMessage(String message) {
		addMessage(new Message(MessageType.ACCESS, message));
	}
	public void addTimeoutMessage(String message) {
		addMessage(new Message(MessageType.TIMEOUT, message));
	}
	public void addLockoutMessage(String message) {
		addMessage(new Message(MessageType.LOCKOUT, message));
	}
	public void addWarningMessage(String message) {
		addMessage(new Message(MessageType.WARNING, message));
	}
	public void addValidationMessage(String message) {
		addMessage(new Message(MessageType.VALIDATE, message));
	}
	public void addGeneralMessage(String message) {
		addMessage(new Message(MessageType.GENERAL, message));
	}
	public void addInformationMessage(String message) {
		addMessage(new Message(MessageType.INFORMATION, message));
	}
	public void addConfirmMessage(String message) {
		addMessage(new Message(MessageType.CONFIRM, message));
	}
	public void addStopMessage(String message) {
		addMessage(new Message(MessageType.STOP, message));
	}
	/**
	 * Only method provided to allow custom messages.
	 * Use sparingly, this means that the messages are hardcoded in Java and require recompilation to change.
	 */
	public void addCustomMessage(MessageType type, String message) {
		addMessage(new Message(type, message));
	}
}