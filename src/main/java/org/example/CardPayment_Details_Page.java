package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class CardPayment_Details_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _select_Credit_Card = By.cssSelector("select#CreditCardType");
    private By _cardholderName = By.cssSelector("input#CardholderName");
    private By _cardNumber = By.cssSelector("input#CardNumber");
    private By _ExpirationMonth = By.cssSelector("select#ExpireMonth");
    private By _ExpirationYear = By.cssSelector("select#ExpireYear");
    private By _cardCode = By.cssSelector("input#CardCode");
    private By _click_On_Continue = By.cssSelector("button.button-1.payment-info-next-step-button");

    public void enter_Card_Details() {
//        //expected result
//        String Expected_Result="https://demo.nopcommerce.com/onepagecheckout#opc-payment_info";
//        //actual result
//        String Actual_Result=driver.getCurrentUrl();
//        //verify actual result and expected result
//        Assert.assertEquals(Actual_Result,Expected_Result,"Card payment page is not open");
//        //print output
        //  System.out.println("Card payment page Assert ="+""+loadProperty.getProperty("CardPaymentPageSOut"));
        //select credit card
        selectFromDropdownByVisibleText(_select_Credit_Card, loadProperty.getProperty("SelectCardPayment"));
//enter cardholder name
        enterText(_cardholderName, loadProperty.getProperty("CardholderName"));
//enter card number
        enterText(_cardNumber, loadProperty.getProperty("CardNumber"));
//select expiry month
        selectFromDropdownByValue(_ExpirationMonth, loadProperty.getProperty("ExpiryMonth"));
//select expiry year
        selectFromDropdownByVisibleText(_ExpirationYear, loadProperty.getProperty("ExpiryYear"));
//enter card code
        enterText(_cardCode, loadProperty.getProperty("CardCode"));
//click on continue
        clickOnElement(_click_On_Continue);
    }
}
