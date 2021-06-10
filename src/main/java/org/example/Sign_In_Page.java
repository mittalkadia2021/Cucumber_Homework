package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Sign_In_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _register = By.xpath("//a[contains(text(),'Register')]");

    public void click_Register() {
        //expected result
        String url = "https://demo.nopcommerce.com/login/checkoutasguest?returnUrl=%2Fcart";
        //verify url
        assertCurrentURL(url);
        //print output
        System.out.println("Sing in page assert = " + " " + loadProperty.getProperty("SignInPageSOut"));
        thread_Sleep();
        //Click on register
        clickOnElement(_register);
    }
}
