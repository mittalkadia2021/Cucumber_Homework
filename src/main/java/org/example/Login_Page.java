package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class Login_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    SoftAssert softAssert = new SoftAssert();
    private By _email = By.cssSelector("input#Email.email");
    private By _password = By.cssSelector("input#Password");
    private By _login = By.cssSelector("button.button-1.login-button");
    private By _actual_ErrorMessage = By.cssSelector(".returning-wrapper.fieldset");


    public void enter_Username_Password(String email, String password) {

        //expected login url
        String url = "https://demo.nopcommerce.com/login?returnUrl=%2F";
        //verify url
        assertCurrentURL(url);
        //print output
        System.out.println("Login URL assert = " + loadProperty.getProperty("LoginPageSOut"));

        //type email
        enterText(_email, email);
        //type password
        enterText(_password, password);
    }

    public void click_LoginButton() {
        //click on log in button
        clickOnElement(_login);
    }

    public void error_Message_Assert(String error_message) {

        WebElement Error_Message = driver.findElement(_actual_ErrorMessage );
        String Actual_Error_Message = Error_Message.getText();
        if (error_message.equals(Actual_Error_Message)) {
            System.out.println("Actual And Expected Message are same and it is : " + Actual_Error_Message);
        } else {
            System.out.println("Actual is :" + Actual_Error_Message);
            System.out.println("Expected is :" + error_message);
        }

    }
}
