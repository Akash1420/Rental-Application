HuntAbode - Frontend

RentalApplication - Backend

Prerequisites : 
1. Tomcat Server should be available.
2. Eclipse IDE should be available and Tomcat Server should be added inside servers section in eclipse.
3. Eclipse IDE should support Maven Projects.
4. MySQL and MongoDB should be installed.

Steps for running the Application :

1. Take a clone from our GitHub Repository https://github.com/vanshi1998/RentalAppProject/ to local machine.
2. Open eclipse IDE under the Project Explorer Right Click and Import -> Existing Maven Project.
3. Following the above Steps Import Netflix-Eureka, RentalApplication and RentalInsights in Eclipse.
4. After it is imported go to Netflix-Eureka and run NetflixEurekaNamingServerApplication.java as Java Application.
5. Once step 4 has been executed Successfully , go to RentalApplication in your Project Explorer.
6. In the application.properties of RentalApplication change spring.datasource.username, spring.datasource.password and spring.datasource.url to your database username, password and url.
7. Once this is done save changes and Run RentalApplication.java as Java Application.
8. After this go to the RentalInsights Application in your Project Explorer.
9. Run the RentalInsightsApplication.java as java application.
