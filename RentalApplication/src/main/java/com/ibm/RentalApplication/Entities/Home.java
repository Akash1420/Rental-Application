package com.ibm.RentalApplication.Entities;


import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Home{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	int OwnerId;
	String type;
	String location;
	String detailedLocation;
	int rooms;
	String occupancy;
	String status;
	double monthlyCost;
	double securityDeposit;
	String furnished;
	String details;
	String name;
	String[] urlOfImage;
	
	//@OneToMany(cascade=CascadeType.ALL)
	//List<HomeTenant> interestedTenants;
	
	
	public Home()
	{
		
	}
	
	public Home(int ownerId, String type, String location, String detailedLocation, int rooms, String occupancy,
			String status, double monthlyCost, double securityDeposit, String furnished, String details, String name,
			String[] urlOfImage) {
		super();
		OwnerId = ownerId;
		this.type = type;
		this.location = location;
		this.detailedLocation = detailedLocation;
		this.rooms = rooms;
		this.occupancy = occupancy;
		this.status = status;
		this.monthlyCost = monthlyCost;
		this.securityDeposit = securityDeposit;
		this.furnished = furnished;
		this.details = details;
		this.name = name;
		this.urlOfImage = urlOfImage;
	}

	public Home(int id, int ownerId, String type, String location, String detailedLocation, int rooms, String occupancy,
			String status, double monthlyCost, double securityDeposit, String furnished, String details, String name,
			String[] urlOfImage) {
		super();
		this.id = id;
		OwnerId = ownerId;
		this.type = type;
		this.location = location;
		this.detailedLocation = detailedLocation;
		this.rooms = rooms;
		this.occupancy = occupancy;
		this.status = status;
		this.monthlyCost = monthlyCost;
		this.securityDeposit = securityDeposit;
		this.furnished = furnished;
		this.details = details;
		this.name = name;
		this.urlOfImage = urlOfImage;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDetailedLocation() {
		return detailedLocation;
	}
	public void setDetailedLocation(String detailedLocation) {
		this.detailedLocation = detailedLocation;
	}
	public int getRooms() {
		return rooms;
	}
	public void setRooms(int rooms) {
		this.rooms = rooms;
	}
	public String getOccupancy() {
		return occupancy;
	}
	public void setOccupancy(String occupancy) {
		this.occupancy = occupancy;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getMonthlyCost() {
		return monthlyCost;
	}
	public void setMonthlyCost(double monthlyCost) {
		this.monthlyCost = monthlyCost;
	}
	public double getSecurityDeposit() {
		return securityDeposit;
	}
	public void setSecurityDeposit(double securityDeposit) {
		this.securityDeposit = securityDeposit;
	}
	public String getFurnished() {
		return furnished;
	}
	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	
	
	
	public int getOwnerId() {
		return OwnerId;
	}


	public void setOwnerId(int ownerId) {
		OwnerId = ownerId;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String[] getUrlOfImage() {
		return urlOfImage;
	}

	public void setUrlOfImage(String[] urlOfImage) {
		this.urlOfImage = urlOfImage;
	}

	@Override
	public String toString() {
		return "Home [id=" + id + ", OwnerId=" + OwnerId + ", type=" + type + ", location=" + location
				+ ", detailedLocation=" + detailedLocation + ", rooms=" + rooms + ", occupancy=" + occupancy
				+ ", status=" + status + ", monthlyCost=" + monthlyCost + ", securityDeposit=" + securityDeposit
				+ ", furnished=" + furnished + ", details=" + details + ", name=" + name + ", urlOfImage="
				+ Arrays.toString(urlOfImage) + "]";
	}

}








	

	




