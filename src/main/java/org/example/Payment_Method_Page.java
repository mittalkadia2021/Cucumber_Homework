package org.example;

import cucumber.api.java.cs.A;
import org.openqa.selenium.By;
import org.testng.Assert;

public class Payment_Method_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _click_OnCreditCard = By.cssSelector("input#paymentmethod_1");
    private By _click_OnContinue = By.cssSelector("button.button-1.payment-method-next-step-button");


    public void click_on_CreditCard_Payment() {
//        //expected result
//      String Expected_Payment_url="https://demo.nopcommerce.com/onepagecheckout#opc-payment_method";
//       //actual result
//       String Actual_Payment_url= driver.getCurrentUrl();
//       //verify actual result and expected result
//       Assert.assertEquals(Actual_Payment_url,Expected_Payment_url,"Payment url is not open");
//        //print output
//       System.out.println("Payment page Assert ="+""+loadProperty.getProperty("PaymentPageSOut"));
        //click on credit card
        clickOnElement(_click_OnCreditCard);
        //click on continue
        clickOnElement(_click_OnContinue);

    }
}
