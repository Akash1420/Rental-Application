package com.example.RentalInsightsApplication;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class RentalStore {

	@Id
	String location;
	 int noOfHomes;
	 int noOfTenants;
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
