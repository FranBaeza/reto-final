package org.springframework.samples.petclinic.model;

import java.util.Date;

public class Oferta extends BaseEntity {
	
	private String title;
	private String description;
	private double discount;
	private Date expireDate;
	
	public Oferta(String title, String description, double discount, Date expireDate) {
		this.title = title;
		this.description = description;
		this.discount = discount;
		this.expireDate = expireDate;
		
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public Date getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}

}
