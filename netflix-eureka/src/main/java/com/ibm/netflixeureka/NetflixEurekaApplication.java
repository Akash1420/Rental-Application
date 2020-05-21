package com.ibm.netflixeureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class NetflixEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetflixEurekaApplication.class, args);
	}

}
