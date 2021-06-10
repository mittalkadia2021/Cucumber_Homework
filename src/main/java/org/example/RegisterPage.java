package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

import java.sql.CallableStatement;
import java.sql.Timestamp;

public class RegisterPage extends Utils {

    LoadProperty loadProperty = new LoadProperty();

    private By _gender = By.cssSelector("input#gender-female");
    private By _firstName = By.xpath("//input[starts-with(@name,'FirstName')]");
    private By _lastname = By.xpath("//input[starts-with(@name,'LastName')]");
    private By _date_of_birth = By.xpath("//select[contains(@name, 'DateOfBirthDay')]");
    private By _date_of_month = By.xpath("//select[contains(@name,'DateOfBirthMonth')]");
    private By _birth_year = By.xpath("//select[starts-with(@name, 'DateOfBirthYear')]");
    private By _email = By.cssSelector("input[id='Email']");
    private By _company_name = By.cssSelector("input[id^='Company']");
    private By _option = By.cssSelector("input#Newsletter");
    private By _password = By.xpath("(//input[contains(@id, 'Password')])[1]");
    private By _confirm_password = By.xpath("(//input[contains(@id, 'Password')])[2]");
    private By _register_button = By.xpath("//button[contains(text(),'Register')]");


    public void registration_Successfully() {
        //String url=("https://demo.nopcommerce.com/register?returnUrl=%2Fcart");
        //assertCurrentURL(url);
//        String Expected_url="https://demo.nopcommerce.com/register?returnUrl=%2Fcart";
//        String Actual_url=driver.getCurrentUrl();
//        Assert.assertEquals(Actual_url,Expected_url,"Register page is not open");
        //System.out.println("Register page assert ="+" "+loadProperty.getProperty("RegisterPageSOut"));

        //click on gender
        thread_Sleep();
        clickOnElement(_gender);
        //type first name
        thread_Sleep();
        enterText(_firstName, loadProperty.getProperty("Firstname"));
        //type last name
        waitForClickable(_lastname, 10);
        enterText(_lastname, loadProperty.getProperty("Lastname"));
        //enter date of birth
        thread_Sleep();
        selectFromDropdownByVisibleText(_date_of_birth, loadProperty.getProperty("DateOfBirth"));
        //enter birth month
        selectFromDropdownByValue(_date_of_month, loadProperty.getProperty("DateOfMonth"));
        //enter birth of year
        thread_Sleep();
        selectFromDropdownByVisibleText(_birth_year, loadProperty.getProperty("BirthYear"));
        //Type email with timestamp
        enterText(_email, loadProperty.getProperty("Email") + dateStamp() +
                "@gmail.com");
        //enter company name
        enterText(_company_name, loadProperty.getProperty("CompanyName"));
        // Click on option
        clickOnElement(_option);
        //enter password
        enterText(_password, loadProperty.getProperty("Password"));
        //enter confirm password
        enterText(_confirm_password, loadProperty.getProperty("ConfirmPassword"));
        //click on register button
        clickOnElement(_register_button);
        thread_Sleep();
    }


}
