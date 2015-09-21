package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LandingPage {

	static WebDriver driver;

	public LandingPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.ID, using = "user_email")
	public static WebElement emailTextField;
	
	@FindBy(how = How.ID,using = "user_password")
	public static WebElement passwordTextField;

	@FindBy(how = How.LINK_TEXT, using = "Sign up")
	public static WebElement signUpLink;
	
	@FindBy(how = How.LINK_TEXT, using = "Forgot your password?")
	public static WebElement forgotPassword;

}
