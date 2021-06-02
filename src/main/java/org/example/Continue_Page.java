package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Continue_Page extends Utils{
    LoadProperty loadProperty = new LoadProperty();
    private By _ClickContinue=By.cssSelector("a.button-1.register-continue-button");

    public void click_On_Continue(){

       //expected result
        String Expected_Add_To_Cart_url = "https://demo.nopcommerce.com/registerresult/1?returnUrl=/cart";
        //actual result
       String Actual_Add_To_Cart_url = driver.getCurrentUrl();
       //verify actual result and expected result
        Assert.assertEquals(Actual_Add_To_Cart_url,Expected_Add_To_Cart_url,"Register page is not open");
        //print output
       System.out.println("Continue page assert = "+" "+loadProperty.getProperty("ContinuePageSOut"));
        //click on continue
        clickOnElement(_ClickContinue);
    }
}
