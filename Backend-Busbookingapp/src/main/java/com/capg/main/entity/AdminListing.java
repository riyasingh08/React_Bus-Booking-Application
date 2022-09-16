package com.capg.main.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Positive;

@Entity
public class AdminListing {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int aid;
	private String fromOrigin;
	private String toDest;
	private Date date;
	private int abusno;
	public AdminListing() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminListing(int aid, String fromOrigin, String toDest, Date date, int abusno) {
		super();
		this.aid = aid;
		this.fromOrigin = fromOrigin;
		this.toDest = toDest;
		this.date = date;
		this.abusno = abusno;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getFromOrigin() {
		return fromOrigin;
	}
	public void setFromOrigin(String fromOrigin) {
		this.fromOrigin = fromOrigin;
	}
	public String getToDest() {
		return toDest;
	}
	public void setToDest(String toDest) {
		this.toDest = toDest;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getAbusno() {
		return abusno;
	}
	public void setAbusno(int abusno) {
		this.abusno = abusno;
	}
	@Override
	public String toString() {
		return "AdminListing [aid=" + aid + ", fromOrigin=" + fromOrigin + ", toDest=" + toDest + ", date=" + date
				+ ", abusno=" + abusno + "]";
	}
	
	
	
	
	

}
