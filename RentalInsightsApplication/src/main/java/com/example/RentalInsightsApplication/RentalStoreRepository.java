package com.example.RentalInsightsApplication;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentalStoreRepository extends MongoRepository<RentalStore, String> {

	public Optional<RentalStore> findById(String location);

	public RentalStore findByLocation(String location);
}
