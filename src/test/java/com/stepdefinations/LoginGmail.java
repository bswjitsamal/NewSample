package com.stepdefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.*;

public class LoginGmail {

	private WebDriver driver;	
	
	@Given("^I go to \"(.*?)\"$")
	public void i_go_to(String url) throws Throwable {
		
		url = "http://gmail.com";
		driver = new FirefoxDriver();
		driver.get(url);
	}

	@When("^I enter the below details as follows$")
	public void i_enter_the_below_details_as_follows(List<UserCredentials> credentials) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)

  
		UserCredentials userToBeSignIn =  credentials.get(0);
		
	}

	@Then("^it should login$")
	public void it_should_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions


	}
	
	private class UserCredentials {
        public String email;
        public String password;
    }

}
