package com.example.RentalInsightsApplication;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api")
public class RentalStoreController {

	

	 RentalStoreRepository rentalStoreRepository;

	public RentalStoreController(RentalStoreRepository userRepository) {
		this.rentalStoreRepository = userRepository;
	}
	
	@GetMapping("/allStores")
	public List<RentalStore> getAllStores() {
		System.out.println("Getting all stores.");
		return rentalStoreRepository.findAll();
	}
	

	@GetMapping("/location/{location}")
	public RentalStore getStore(@PathVariable("location") String location) {
		System.out.println("Getting store with location:"+ location);
		return rentalStoreRepository.findByLocation(location);
	}
	
	@PostMapping("/rentalStore")
	public RentalStore addNewStores(@RequestBody RentalStore rentalStore) {
		System.out.println("Saving store.");
		return rentalStoreRepository.save(rentalStore);
	}
	
	
}
