package com.ibm.RentalApplication.Entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class HomeTenant {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;
	String email;
	long contactNumber;
	
	@OneToMany(cascade=CascadeType.ALL)
	List<InterestedHome> homesOfInterest;
	
	public HomeTenant()
	{
		
	}
	
	public HomeTenant(int id, String name, String email, long contactNumber, List<InterestedHome> homesOfInterest) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contactNumber = contactNumber;
		this.homesOfInterest = homesOfInterest;
	}
	public HomeTenant(String name, String email, long contactNumber, List<InterestedHome> homesOfInterest) {
		super();
		this.name = name;
		this.email = email;
		this.contactNumber = contactNumber;
		this.homesOfInterest = homesOfInterest;
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
	public List<InterestedHome> getHomesOfInterest() {
		return homesOfInterest;
	}
	public void setHomesOfInterest(List<InterestedHome> homesOfInterest) {
		this.homesOfInterest = homesOfInterest;
	}
	@Override
	public String toString() {
		return "HomeTenant [id=" + id + ", name=" + name + ", email=" + email + ", contactNumber=" + contactNumber
				+ ", homesOfInterest=" + homesOfInterest + "]";
	}
	
	
	
}
