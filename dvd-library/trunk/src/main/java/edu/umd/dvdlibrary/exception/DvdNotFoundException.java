package edu.umd.dvdlibrary.exception;

import java.io.Serializable;

// Server restarted while session was active
public class DvdNotFoundException extends Exception implements Serializable{
	private static final long serialVersionUID = -3938212520610499003L;

	public DvdNotFoundException(String message) {
		super(message);
	}
}