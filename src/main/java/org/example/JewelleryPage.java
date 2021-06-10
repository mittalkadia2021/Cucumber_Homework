package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class JewelleryPage extends Utils {

    LoadProperty loadProperty = new LoadProperty();
    private By _clickAddToCart = By.xpath("(//button[contains(@type, 'button')])[7]");
    private By _clickShoppingCart = By.xpath("//a[contains(text(),'shopping cart' )]");


    public void click_on_vintage_Style_Engagement_Ring() {
        //expected result
        String url = "https://demo.nopcommerce.com/jewelry";
        //verify url
        assertCurrentURL(url);
        //print output
        System.out.println("Jewellery page assert =" + " " + loadProperty.getProperty("JewelleryURLSOut"));
        //click on add to cart
        thread_Sleep();
        clickOnElement(_clickAddToCart);
        //click on shopping cart
        clickOnElement(_clickShoppingCart);
    }
}
