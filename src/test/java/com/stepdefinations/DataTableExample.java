package com.stepdefinations;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.support.PageFactory;
import com.helper.DriverFactory;
import com.pages.SignupPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class DataTableExample extends DriverFactory {

	@When("^she provides the her details as follows:$")
	public void she_provides_the_her_details_as_follows(List<UserDetails> users)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

		UserDetails userToBeSignedUp = users.get(0);

		// Entering the SIgnUp form
		PageFactory.initElements(driver, SignupPage.class);
		SignupPage.firstNameTextBox.sendKeys(userToBeSignedUp.firstName);
		SignupPage.lastNameTextBox.sendKeys(userToBeSignedUp.lastName);
		SignupPage.emailTextBox.sendKeys(userToBeSignedUp.email);
		SignupPage.passwordTextField.sendKeys(userToBeSignedUp.password);
		SignupPage.confirmPasswordTextFiled
				.sendKeys(userToBeSignedUp.cnfpassword);

	}

	// Inner class concept

	private class UserDetails {
		public String firstName;
		public String lastName;
		public String email;
		public String password;
		public String cnfpassword;
	}

}
