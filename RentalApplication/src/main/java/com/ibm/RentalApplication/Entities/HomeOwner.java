package com.ibm.RentalApplication.Entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class HomeOwner {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;
	String email;
	long contactNumber;
	@OneToMany(cascade=CascadeType.ALL)
	List<Home> homes;
	public HomeOwner()
	{
		
	}
	public HomeOwner(int id, String name, String email, long contactNumber, List<Home> homes) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contactNumber = contactNumber;
		this.homes = homes;
	}
	public HomeOwner(String name, String email, long contactNumber, List<Home> homes) {
		super();
		this.name = name;
		this.email = email;
		this.contactNumber = contactNumber;
		this.homes = homes;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public List<Home> getHomes() {
		return homes;
	}
	public void setHomes(List<Home> homes) {
		this.homes = homes;
	}
	@Override
	public String toString() {
		return "HomeOwner [id=" + id + ", name=" + name + ", email=" + email + ", contactNumber=" + contactNumber
				+ ", homes=" + homes + "]";
	}
	
	
	
	
	
}
