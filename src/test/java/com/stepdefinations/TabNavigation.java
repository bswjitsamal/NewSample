package com.stepdefinations;

import java.util.ArrayList;

import org.openqa.selenium.By;

import com.helper.DriverFactory;

import cucumber.api.java.en.*;

public class TabNavigation extends DriverFactory {

	@Given("^user is on landing page$")
	public void user_is_on_landing_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.get("https://business.twitter.com/start-advertising");

	}

	@When("^I chooses to blogs$")
	public void i_chooses_to_blogs() throws Throwable {

		// considering that there is only one tab opened in that point.
		String oldTab = driver.getWindowHandle();
		driver.findElement(By.linkText("Twitter Advertising Blog")).click();
		ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
		newTab.remove(oldTab);

		// change focus to new tab
		driver.switchTo().window(newTab.get(0));

		// Do what you want here, you are in the new tab

		driver.close();
		// change focus back to old tab
		driver.switchTo().window(oldTab);

	}

	@Then("^I should be redirect to the previous tab$")
	public void i_should_be_redirect_to_the_previous_tab() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

}
