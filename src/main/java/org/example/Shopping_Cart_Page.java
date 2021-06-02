package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Shopping_Cart_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _checkBox = By.xpath("(//input[contains(@type, \"checkbox\")])[2]");
    private By _checkOut = By.cssSelector("button#checkout");


    public void click_On_Checkout() {
        //expected result
        String Expected_Add_To_Cart_url = "https://demo.nopcommerce.com/cart";
        //actual result
        String Actual_Add_To_Cart_url = driver.getCurrentUrl();
        //verify expected result  and actual result
        Assert.assertEquals(Actual_Add_To_Cart_url, Expected_Add_To_Cart_url, "Shopping cart page is not open");
        //print output
        System.out.println("Shopping page assert ="+" "+loadProperty.getProperty("ShoppingCartPageSOut"));
        thread_Sleep();
        //click on check box
        clickOnElement(_checkBox);
        //click on checkout
        clickOnElement(_checkOut);
        thread_Sleep();
    }

}
