package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Shipping_method_page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _click_OnNextDAyAir = By.cssSelector("input#shippingoption_1");
    private By _click_OnContinue = By.cssSelector("button.button-1.shipping-method-next-step-button");

    public void click_On_NextDayAir() {
//        //expected result
//         String Expected_Result="https://demo.nopcommerce.com/onepagecheckout#opc-shipping_method";
//       //actual result
//        String Actual_Result=driver.getCurrentUrl();
//        //verify actual result and expected result
//        Assert.assertEquals(Actual_Result,Expected_Result,"shipping method page is not open");
//        //print output
//        System.out.println("Shipping Page Assert ="+" "+loadProperty.getProperty("ShippingPageSOut"));
       thread_Sleep();
        //click on next day air
        clickOnElement(_click_OnNextDAyAir);
        //click on continue
        clickOnElement(_click_OnContinue);

    }
}
