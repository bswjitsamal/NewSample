package com.stepdefinations;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import com.helper.DriverFactory;
import com.helper.ReusableMethods;

import cucumber.api.java.en.*;

public class UserForm extends DriverFactory {

	// Om MAA

	@Given("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		// Entering the URL
		driver.get("http://executeautomation.com/demosite/Login.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}

	@When("^chooses to fill the user form$")
	public void chooses_to_fill_the_user_form() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.xpath("//*[@id='userName']/p[3]/input")).click();
		System.out.println("------------->");

	}

	@When("^provides the user details as follows:$")
	public void provides_the_user_details_as_follows(List<FormDetails> users)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

		FormDetails userFormToBeFilledUp = users.get(0);

		// Select form drop down
		ReusableMethods.SelectDropDown(driver, "TitleId",userFormToBeFilledUp.title, "id");
		

		// Enteering the value in text box
		ReusableMethods.enterText(driver, "Initial",userFormToBeFilledUp.initial, "id");
		

		ReusableMethods.enterText(driver, "FirstName",userFormToBeFilledUp.firstName, "id");
				
		ReusableMethods.enterText(driver, "MiddleName", userFormToBeFilledUp.lastName, "id");

	}

	private class FormDetails {

		public String title;
		public String initial;
		public String firstName;
		public String lastName;

	}

	@When("^save the form$")
	public void save_the_form() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
       driver.findElement(By.xpath("//*[@id='details']/table/tbody/tr[7]/td/input")).click();
	}

	@Then("^form should be saved in to the application$")
	public void form_should_be_saved_in_to_the_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	/*
	 * public void sample(){
	 * 
	 * UserDetail userToBeSignedUp = new UserDetail();
	 * 
	 * //Entering thee URL
	 * driver.get("http://executeautomation.com/demosite/Login.html");
	 * 
	 * ReusableMethods.Click(driver, "Login", "name");
	 * 
	 * //Selecting the title form dropdown
	 * ReusableMethods.SelectDropDown(driver,"TitleId","Mr.","id");
	 * 
	 * //Enteering Text in text field ReusableMethods.enterText(driver,
	 * "Initial", userToBeSignedUp.firstName, "id");
	 * 
	 * 
	 * 
	 * }
	 * 
	 * //Inner class concept to be implemented later.
	 * 
	 * public class UserDetails{
	 * 
	 * public String firstName; public String lastName;
	 * 
	 * 
	 * }
	 */
}
