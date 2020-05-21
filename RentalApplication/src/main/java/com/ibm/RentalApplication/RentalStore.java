package com.ibm.RentalApplication;

import org.springframework.data.annotation.Id;

public class RentalStore {

	@Id
	String location;
	 int noOfHomes;
	 int noOfTenants;
	 
	 public RentalStore()
	 {
		 
	 }
	 
	public RentalStore(String location, int noOfHomes, int noOfTenants) {
		super();
		this.location = location;
		this.noOfHomes = noOfHomes;
		this.noOfTenants = noOfTenants;
	}

	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getNoOfHomes() {
		return noOfHomes;
	}
	public void setNoOfHomes(int noOfHomes) {
		this.noOfHomes = noOfHomes;
	}
	public int getNoOfTenants() {
		return noOfTenants;
	}
	public void setNoOfTenants(int noOfTenants) {
		this.noOfTenants = noOfTenants;
	}
	@Override
	public String toString() {
		return "RentalStore [location=" + location + ", noOfHomes=" + noOfHomes + ", noOfTenants=" + noOfTenants + "]";
	}
	
	
}
