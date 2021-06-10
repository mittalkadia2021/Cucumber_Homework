package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Buy_Jewellery_Product_Assert extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _successfully_Message = By.xpath("//strong[contains(text(), 'Your order has been successfully processed!')]");

    public void jewellery_Assert() {
        //expected message
        String Expected_Checkout_Message = "Your order has been successfully processed!";
        //actual message
        String Actual_Checkout_Message = get_Text_From_Element(_successfully_Message);
        //verify actual result and expected result
        Assert.assertEquals(Actual_Checkout_Message, Expected_Checkout_Message, "Your order has not been successfully processed");
        //print output
        System.out.println(loadProperty.getProperty("jewelleryAssertSOut"));
    }
}
