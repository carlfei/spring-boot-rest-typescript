package com.simple.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "coche")
public class Coche {

	@Override
	public String toString() {
		return "Coche{" +
				"id=" + id +
				", tipo='" + tipo + '\'' +
				'}';
	}

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;

	@Column(name = "tipo")
	String tipo;

	public Coche(int id, String tipo) {
	this.id=id;
	this.tipo = tipo;
	}
	public Coche(String tipo) {

		this.tipo = tipo;
	}

	public Coche() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}
	
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	

	
}
