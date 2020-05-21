package com.ibm.RentalApplication.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.RentalApplication.Entities.HomeOwner;

public interface HomeOwnerRepository extends JpaRepository<HomeOwner, Integer> {

	public HomeOwner findByEmail(String email);
}
