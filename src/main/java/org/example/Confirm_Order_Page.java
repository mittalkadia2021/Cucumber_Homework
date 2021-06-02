package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Confirm_Order_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _click_On_Confirm = By.cssSelector("button.button-1.confirm-order-next-step-button");

    public void click_On_Confirm() {
//        //expected result
//     String Expected_Confirm_Url="https://demo.nopcommerce.com/onepagecheckout#opc-confirm_order";
//        //actual result
//     String Actual_Confirm_Url=driver.getCurrentUrl();
//        //verify actual result and expected result
//        Assert.assertEquals(Actual_Confirm_Url,Expected_Confirm_Url,"This is not confirm order url page");
//        //print output
//        System.out.println("Confirm order page Assert ="+""+loadProperty.getProperty("ConfirmOrderPageSOut"));
        thread_Sleep();
        //click on confirm
        clickOnElement(_click_On_Confirm);
    }
}
