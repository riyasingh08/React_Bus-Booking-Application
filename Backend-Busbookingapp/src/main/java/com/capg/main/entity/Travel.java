package com.capg.main.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

import org.hibernate.validator.constraints.Range;

@Entity
public class Travel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Range(min=0l,message = "## Price Should Not be Negative. Put positive amount ##")
	private int destprice;
	@NotEmpty(message = "## DestName Should Not be Empty. Put Something ##")
	private String destname;
	@Column(name= "origin")
	private String originname;
	private Date destdate;
	public Travel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Travel(int id, @Positive(message = "## Price Should Not be Negative. Put positive amount ##") int destprice,
			@NotEmpty(message = "## DestName Should Not be Empty. Put Something ##") String destname, String originname,
			Date destdate) {
		super();
		this.id = id;
		this.destprice = destprice;
		this.destname = destname;
		this.originname = originname;
		this.destdate = destdate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDestprice() {
		return destprice;
	}
	public void setDestprice(int destprice) {
		this.destprice = destprice;
	}
	public String getDestname() {
		return destname;
	}
	public void setDestname(String destname) {
		this.destname = destname;
	}
	public String getOriginname() {
		return originname;
	}
	public void setOriginname(String originname) {
		this.originname = originname;
	}
	public Date getDestdate() {
		return destdate;
	}
	public void setDestdate(Date destdate) {
		this.destdate = destdate;
	}
	@Override
	public String toString() {
		return "Travel [id=" + id + ", destprice=" + destprice + ", destname=" + destname + ", originname=" + originname
				+ ", destdate=" + destdate + "]";
	}

	

}