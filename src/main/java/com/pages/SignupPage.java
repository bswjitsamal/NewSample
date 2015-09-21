package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SignupPage {

	static WebDriver driver;

	public SignupPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "user_first_name")
	public static WebElement firstNameTextBox;

	@FindBy(how = How.ID, using = "user_last_name")
	public static WebElement lastNameTextBox;

	@FindBy(how = How.ID, using = "user_email")
	public static WebElement emailTextBox;

	@FindBy(how = How.ID, using = "user_password")
	public static WebElement passwordTextField;

	@FindBy(how = How.ID, using = "user_password_confirmation")
	public static WebElement confirmPasswordTextFiled;

	@FindBy(how = How.NAME, using = "commit")
	public static WebElement submitButton;

}
