package com.ibm.RentalApplication.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.RentalApplication.Entities.InterestedHome;

public interface InterestedHomeRepository extends JpaRepository<InterestedHome, Integer>{

	public List<InterestedHome> findByHomeId(int id);
	public void deleteByHomeId(int homeId);
}
