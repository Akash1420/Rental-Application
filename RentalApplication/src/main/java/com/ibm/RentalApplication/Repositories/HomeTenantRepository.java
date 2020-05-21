package com.ibm.RentalApplication.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.RentalApplication.Entities.HomeTenant;

public interface HomeTenantRepository extends JpaRepository<HomeTenant, Integer>{
	public HomeTenant findByEmail(String email);
	public HomeTenant findById(int id);
}
