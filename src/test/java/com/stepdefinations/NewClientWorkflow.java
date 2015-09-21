package com.stepdefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import com.helper.DriverFactory;
import com.pages.HomePage;
import com.pages.LandingPage;
import com.pages.SignupPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewClientWorkflow extends DriverFactory {

	@Given("^the user is on landing page$")
	public void the_user_is_on_landing_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.get("http://accountsdemo.herokuapp.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^she chooses to sign up$")
	public void she_chooses_to_sign_up() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, LandingPage.class);
		LandingPage.signUpLink.click();
	}

	@When("^she provides the first name as \"(.*?)\"$")
	public void she_provides_the_first_name_as(String firstName)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.firstNameTextBox.sendKeys(firstName);
	}

	@When("^she provides the last name as \"(.*?)\"$")
	public void she_provides_the_last_name_as(String lastName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.lastNameTextBox.sendKeys(lastName);
	}

	@When("^she provides the email as \"(.*?)\"$")
	public void she_provides_the_email_as(String email) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.emailTextBox.sendKeys(email);
	}

	@When("^she provides the password as \"(.*?)\"$")
	public void she_provides_the_password_as(String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.passwordTextField.sendKeys(password);
	}

	@When("^she provides the confirm password again as \"(.*?)\"$")
	public void she_provides_the_confirm_password_again_as(String confPassword)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.confirmPasswordTextFiled.sendKeys(confPassword);
	}

	@When("^she signs-up$")
	public void she_signs_up() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.submitButton.click();
	}

	@Then("^she should be logged in to the application$")
	public void she_should_be_logged_in_to_the_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		PageFactory.initElements(driver, HomePage.class);
		HomePage.signOutButton.isDisplayed();
		HomePage.signOutButton.click();
	}

}
