package com.modules;

import org.openqa.selenium.WebDriver;

import com.pages.LandingPage;

public class SignUp {
	
	private WebDriver driver;

	public void signUpTest(){
		
		LandingPage.signUpLink.click();
		
	}
	
}
