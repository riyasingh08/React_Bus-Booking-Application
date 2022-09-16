package com.capg.main.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Positive;

@Entity
public class Buses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Positive(message = "## BusNumber Should Not be Negative. Put Positive No. ##")
	private int busno;
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "travel_id", referencedColumnName = "id")
	private Travel travel;
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "user_id", referencedColumnName = "id")

	private Users user;

	public Buses() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Buses(int id, @Positive(message = "## BusNumber Should Not be Negative. Put Positive No. ##") int busno,
			Travel travel, Users user) {
		super();
		this.id = id;
		this.busno = busno;
		this.travel = travel;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getBusno() {
		return busno;
	}

	public void setBusno(int busno) {
		this.busno = busno;
	}

	public Travel getTravel() {
		return travel;
	}

	public void setTravel(Travel travel) {
		this.travel = travel;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Buses [id=" + id + ", busno=" + busno + ", travel=" + travel + ", user=" + user + "]";
	}

}