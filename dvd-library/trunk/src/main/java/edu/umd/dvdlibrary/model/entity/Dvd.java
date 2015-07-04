package edu.umd.dvdlibrary.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.EqualsAndHashCode;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Table(schema = "DVDS", name = "DVD")
public class Dvd { 
	@Id
	private int id; 
	
	@Column(name = "coloana")
	private int columne; 

	private String director; 

	private String genre; 

	@Column(name = "linie")
	private int rowe; 

	private String name; 

	public Dvd() {}
	
	public Dvd(int columne, String director, String genre, int rowe, String name) { 
		this.columne = columne;
		this.director = director; 
		this.genre = genre; 
		this.rowe = rowe;
		this.name = name; 
	} 		
}