package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.testng.Assert;

public class Billing_Address extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _countryName = By.cssSelector("select#BillingNewAddress_CountryId");
    // private By _countryName=By.cssSelector("//select[contains(@data-trigger, \"country-select\")]");
    private By _stateName = By.cssSelector("select#BillingNewAddress_StateProvinceId");
    private By _cityName = By.cssSelector("input#BillingNewAddress_City");
    private By _address1 = By.cssSelector("input#BillingNewAddress_Address1");
    private By _postcode = By.cssSelector("input#BillingNewAddress_ZipPostalCode");
    private By _phoneNumber = By.cssSelector("input#BillingNewAddress_PhoneNumber");
    private By _click_On_Continue = By.xpath("(//button[contains(text(), 'Continue')])[1]");


    public void enter_Shipping_Address_Details() {
        //expected result
        String url = "https://demo.nopcommerce.com/onepagecheckout#opc-billing";
        //verify url
        assertCurrentURL(url);
        //print output
        System.out.println("Billing page assert =" + " " + loadProperty.getProperty("BillingPageSOut"));
        thread_Sleep();
        //select country name
        selectFromDropdownByVisibleText(_countryName, loadProperty.getProperty("CountryName"));
        //enter state name
        enterText(_stateName, loadProperty.getProperty("StateName"));
        //enter city name
        enterText(_cityName, loadProperty.getProperty("CityName"));
        //enter address
        enterText(_address1, loadProperty.getProperty("Address1"));
        //enter postcode
        enterText(_postcode, loadProperty.getProperty("Postcode"));
        //enter phone number
        enterText(_phoneNumber, loadProperty.getProperty("PhoneNumber"));
        //click on continue
        clickOnElement(_click_On_Continue);


    }
}
