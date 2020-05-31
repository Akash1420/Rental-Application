package com.ibm.RentalApplication;

import java.util.Optional;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@FeignClient(name="RentalInsightsApplication")
@RibbonClient(name="RentalInsightsApplication")
public interface RentalInsightsServiceProxy {

	@PostMapping(path = "/api/rentalStore")
	public RentalStore fetchInsightsDetailByLocation(@RequestBody RentalStore rentalStore);
	
	@GetMapping("/location/{location}")
	public RentalStore fetchStoreByLocation(@PathVariable("location") String location);
	
}
