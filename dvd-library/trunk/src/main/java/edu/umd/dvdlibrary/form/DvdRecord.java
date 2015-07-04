package edu.umd.dvdlibrary.form;

import java.math.BigDecimal;

import lombok.ToString;

@ToString
public class DvdRecord implements Comparable<DvdRecord> {
 
	public BigDecimal id, columne, rowe;
	public String director="", name="", genre = "";

	public DvdRecord () {} ;
	
	public DvdRecord(Object[] result) { // if SQL query changes, must change order
		int index = 0;
		this.id = (BigDecimal) result[index++];
		this.columne = (BigDecimal) result[index++];
		this.director = result[index++].toString();
		this.genre = result[index++].toString();
		this.rowe = (BigDecimal) result[index++];
		this.name = (String) result[index++];
	}

	// Overriding the compareTo method
	public int compareTo(DvdRecord a) {
		return (this.name).compareTo(a.name);
	}
}