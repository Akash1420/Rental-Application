package com.ibm.RentalApplication.Services;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.RentalApplication.Entities.Home;
import com.ibm.RentalApplication.Entities.HomeOwner;
import com.ibm.RentalApplication.Entities.HomeTenant;
import com.ibm.RentalApplication.Entities.InterestedHome;
import com.ibm.RentalApplication.Repositories.HomeOwnerRepository;
import com.ibm.RentalApplication.Repositories.HomeRepository;
import com.ibm.RentalApplication.Repositories.HomeTenantRepository;
import com.ibm.RentalApplication.Repositories.InterestedHomeRepository;


@Service
public class HomeService {

	@Autowired
	HomeRepository homeRepository;
	
	@Autowired
	HomeOwnerRepository homeOwnerRepository;
	
	@Autowired
	HomeTenantRepository homeTenantRepository;
	
	@Autowired
	InterestedHomeRepository interestedHomeRepository;
	
	
	
	@Transactional
	public void addHome(Home home,String email) {
		HomeOwner homeOwner=homeOwnerRepository.findByEmail(email);
		System.out.println("Hi i am a owner!!!!!!!!!"+homeOwner);
		List<Home> homes=homeOwner.getHomes();
		System.out.println("List of homes are="+homes);
		homes.add(home);
		System.out.println("Homes after adding="+homes);
		homeOwner.setHomes(homes);
		System.out.println("Home set to"+homeOwner.getHomes());
		System.out.println("Owner is"+homeOwner);
		System.out.println("Through find method"+findAllHomeOwner());
		
		
	}
	

	public List<Home> findAllHomes() {
		List<Home> homes =  homeRepository.findAll();
		System.out.println(homes);
		return homes;
	}
	
	public Home findHomeById(int id)
	{
		return homeRepository.findById(id);
	}
	
	public List<Home> findHomeByType(String type) {
		return homeRepository.findByType(type);
	}

	public List<Home> findHomeByLocation(String location) {
		return homeRepository.findByLocation(location);
	}
	
	public List<Home> findHomeByOccupancy(String occupancy) {
		return homeRepository.findByOccupancy(occupancy);
	}
	
	public List<Home> findHomeByFurnished(String furnished) {
		return homeRepository.findByFurnished(furnished);
	}

	public HomeOwner addHomeOwner(HomeOwner homeOwner,String email) {
		HomeOwner homeOwner1=homeOwnerRepository.findByEmail(email);
		if(homeOwner1==null) {
			return homeOwnerRepository.save(homeOwner);
		}
		else
		{
			return null;
		}
	}
	
	public List<HomeOwner> findAllHomeOwner() {
		List<HomeOwner> homeOwner =  homeOwnerRepository.findAll();
		System.out.println(homeOwner);
		return homeOwner;
	}
	
    public void deleteHomeById(int id) {
		
		homeRepository.deleteById(id);
		
	}
    
    public List<Home> viewHomeOfOwner(String email)
    {
    	HomeOwner homeOwner2=homeOwnerRepository.findByEmail(email);
    	return homeOwner2.getHomes();
    }
    
    @Transactional
    public void updateStatusOfHome(int homeId,String status)
    {
    	Home home=homeRepository.findById(homeId);
    	home.setStatus(status);
    	
    }

    @Transactional
	public void updateCostOfHome(int id, Double cost) {
		Home home=homeRepository.findById(id);
    	home.setMonthlyCost(cost);
		
	}

    @Transactional
	public void updateOccupancyOfHome(int id, String occupancy) {
		Home home=homeRepository.findById(id);
    	home.setOccupancy(occupancy);
		
	}

    @Transactional
	public void updateSecurityOfHome(int id, Double security) {
    	Home home=homeRepository.findById(id);
    	home.setSecurityDeposit(security);
		
	}
    
    //For HomeTenant and Interested Homes
    
    public HomeTenant addHomeTenant(HomeTenant homeTenant,String email) {
		HomeTenant homeTenant1=homeTenantRepository.findByEmail(email);
		if(homeTenant1==null) {
			return homeTenantRepository.save(homeTenant);
		}
		else
		{
			return null;
		}
	}
	
    //adding home of interest
    
    @Transactional
    public void addHomeOfInterest(String email,int homeid,String meetingDate)
    {
    	HomeTenant homeTenant2=homeTenantRepository.findByEmail(email);
    	int tenantid=homeTenant2.getId();
    	//Home reqHome=homeRepository.findById(homeid);
    	System.out.printf("Interested home of tenant are before:-",homeTenant2.getHomesOfInterest());
    	List<InterestedHome> interestedHomes=homeTenant2.getHomesOfInterest();
    	InterestedHome intHome = new InterestedHome();
    	intHome.setHomeId(homeid);
    	intHome.setTenantId(tenantid);
    	intHome.setMeetingDate(meetingDate);
    	System.out.println("Interested Home to be added="+intHome);
    	interestedHomes.add(intHome);
    	System.out.println("Interested home of tenant after-"+interestedHomes);
    	homeTenant2.setHomesOfInterest(interestedHomes);
    	System.out.println("Final updation done"+homeTenant2.getHomesOfInterest());
    }

    @Transactional
    public void deleteInterestedHomeByHomeId(int homeId)
    {
    	List<InterestedHome> intHomes =  interestedHomeRepository.findAll();
    	for(InterestedHome intHome:intHomes)
    	{
    		int id=intHome.getHomeId();
    		if(id==homeId)
    		{
    			interestedHomeRepository.deleteByHomeId(id);
    		}
    	}
    }

	public List<HomeTenant> findAllHomeTenants() {
		List<HomeTenant> homeTenants =  homeTenantRepository.findAll();
		System.out.println(homeTenants);
		return homeTenants;
	}
    
	public List<InterestedHome> findInterestedHomeOfTenant(String email)
	{
		HomeTenant tenant=homeTenantRepository.findByEmail(email);
		System.out.println("Interested homes are="+tenant.getHomesOfInterest());
		return tenant.getHomesOfInterest();
	}
	
	public List<Home> findHomeOfInterestedHomes(String email)
	{
		List<InterestedHome> intHomes=findInterestedHomeOfTenant(email);
		List<Home> homes=new LinkedList<>();
		System.out.println("All interested homes="+intHomes);
		for(InterestedHome intHome:intHomes)
		{
			int id=intHome.getHomeId();
			Home home=homeRepository.findById(id);
			homes.add(home);
			
		}
		return homes;
		
	}
	
	public List<InterestedHome> findAllInterestedHomes() {
		List<InterestedHome> interestedHomes =  interestedHomeRepository.findAll();
		System.out.println(interestedHomes);
		return interestedHomes;
	}
    
	public List<HomeTenant> interestedTenantsOfHome(int homeid)
	{
		List<InterestedHome> intHomes4=interestedHomeRepository.findByHomeId(homeid);
		List<HomeTenant> intTenants=new LinkedList<>();
		for(InterestedHome intHome :intHomes4)
		{
			int tenantId=intHome.getTenantId();
			HomeTenant te=homeTenantRepository.findById(tenantId);
			intTenants.add(te);
		}
		
		return intTenants;
		
	}
	
	public HomeTenant findTenantByEmail(String email)
	{
		return homeTenantRepository.findByEmail(email);
	}
	
	public HomeOwner findOwnerByEmail(String email)
	{
		return homeOwnerRepository.findByEmail(email);
	}
	
	@Transactional
	public void updateMeetingStatus(int homeId,int tenantId,String status)
	{
		List<InterestedHome> intHomes=interestedHomeRepository.findAll();
		for( InterestedHome intHome : intHomes)
		{
			int hId=intHome.getHomeId();
			int tId=intHome.getTenantId();
			if(hId==homeId)
			{
				if(tId==tenantId)
				{
					intHome.setApprove(status);
				}
			}
		}
	}
	
	public String getLocationByHomeId(int id)
	{
		Home home=findHomeById(id);
		String location=home.getLocation();
		return location;
	}
	
	public int getNoOfHomes(String loc)
	{
		List<Home> homes=homeRepository.findAll();
		int count=0;
		for(Home home:homes)
		{
			String location=home.getLocation();
			if(location.equals(loc))
			{
				count++;
			}
		}
		return count;
	}
	
	public int getNoOfTenants(String loc)
	{
		List<HomeTenant> tenants=homeTenantRepository.findAll();
		List<InterestedHome> intHomes=new LinkedList<>();
		int count2=0;
		for(HomeTenant tenant:tenants)
		{
			intHomes=tenant.getHomesOfInterest();
			for(InterestedHome intHome:intHomes)
			{
				int hid=intHome.getHomeId();
				String location=getLocationByHomeId(hid);
				if(location.equals(loc))
				{
					System.out.println("in method"+location);
					count2++;
				}
			}
		}
		return count2;
	}
	
}
