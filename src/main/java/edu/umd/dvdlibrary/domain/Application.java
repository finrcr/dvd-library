package edu.umd.dvdlibrary.domain;

import java.io.Serializable;

import lombok.Getter;

import org.springframework.beans.factory.annotation.Value;

@Getter
public class Application implements Serializable {
	private static final long serialVersionUID = 8686041835348158055L;

	// Application version
	private @Value("#{pom['application.version']}") String applicationVersion;

	// Application SVN build/revision number
	private @Value("#{pom['application.buildNumber']}") String buildNumber;
}
