package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class HomePage extends Utils {

    LoadProperty loadProperty = new LoadProperty();
    // SoftAssert softAssert = new SoftAssert();
    private By _register = By.xpath("//a[contains(text(),'Register')]");
    private By _selectCurrency = By.cssSelector("select#customerCurrency");
    private By _priceList = By.cssSelector("span.price.actual-price");
    private By _selectEuro = By.cssSelector("select[id$='Currency']");
    private By _onlineStore = By.xpath("(//a[@class=\"news-title\"])[1]");
    private By _click_On_Jewellery = By.xpath("(//a[@href=\"/jewelry\"])[1]");
    private By _click_On_Login=By.cssSelector("a.ico-login");


    public void clickOnRegisterButton() {
        //wait for click on register button
        waitForClickable(_register, 10);
        //Click on register
        clickOnElement(_register);
    }

    public void verify_Currency_Symbol_In_Each_Prices() {
        //getting name of currency selected
        String currencyNameSelected = getSelectedTextFromDropDown(_selectCurrency);
        //getting currency symbol
        String expectedCurrencySymbol = getCurrencySymbol(currencyNameSelected);
        //list of product price
        List<WebElement> priceList = driver.findElements(_priceList);
        //item list
        for (WebElement element : priceList) {
            String actualCurrencySymbol = element.getText().substring(0, 1);
            //asserting actual currency symbol with expected currency symbol
            Assert.assertEquals(actualCurrencySymbol, expectedCurrencySymbol, "Actual currency symbol not matching with expected currency symbol");
        }
        //printing output
        System.out.println("Currency Verified successfully:" + currencyNameSelected + " as " + expectedCurrencySymbol);
    }

    public void click_On_Currency_Field() {   //selecting currency
        selectFromDropdownByVisibleText(_selectEuro, loadProperty.getProperty("selectCurrency"));

    }

    public void click_On_Online_Store_Is_Open() {
        //click on online store is open
        clickOnElement(_onlineStore);
    }

    public void click_On_jewelleryCategory() {
        //click on jewellery
        clickOnElement(_click_On_Jewellery);

    }
    public void click_On_Login(){
        //click on login
        clickOnElement(_click_On_Login);
    }
}
