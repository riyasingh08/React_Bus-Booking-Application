package com.capg.main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	@NotEmpty(message = "## UserName Cannot be Empty. Put Something ##")
	private String username;
	@Positive(message = "## Mobile Number Should Not be Negative. Remove negative symbol ##")
	private double mobno;
	
	private String email;
	private String password;
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Users(int id, @NotEmpty(message = "## UserName Cannot be Empty. Put Something ##") String username,
			@Positive(message = "## Mobile Number Should Not be Negative. Remove negative symbol ##") double mobno,
			String email, String password) {
		super();
		this.id = id;
		this.username = username;
		this.mobno = mobno;
		this.email = email;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public double getMobno() {
		return mobno;
	}
	public void setMobno(double mobno) {
		this.mobno = mobno;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", mobno=" + mobno + ", email=" + email + ", password="
				+ password + "]";
	}
	

	

}