package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDefs {
    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();
    Registration_Result_Page registration_result_page = new Registration_Result_Page();
    Online_Store_Page online_store_page = new Online_Store_Page();
    JewelleryPage jewelleryPage = new JewelleryPage();
    Shopping_Cart_Page shopping_cart_page = new Shopping_Cart_Page();
    Sign_In_Page sign_in_page = new Sign_In_Page();
    Continue_Page continue_page = new Continue_Page();
    Billing_Address billing_address =new Billing_Address();
    Shipping_method_page shipping_method_page=new Shipping_method_page();
    Payment_Method_Page payment_method_page= new Payment_Method_Page();
    CardPayment_Details_Page cardPayment_details_page=new CardPayment_Details_Page();
    Confirm_Order_Page confirm_order_page=new Confirm_Order_Page();
    Buy_Jewellery_Product_Assert buy_jewellery_product_assert=new Buy_Jewellery_Product_Assert();


    //****************************Registration successfully  Scenario ************************
    @Given("^user is on register page$")
    public void user_is_on_register_page() {
        homePage.clickOnRegisterButton();
    }

    @When("^user enters all required register details$")
    public void user_enters_all_required_register_details() {
        registerPage.registration_Successfully();
    }

    @Then("^user should able to register successfully$")
    public void user_should_able_to_register_successfully() {
        registration_result_page.registration_Completed_Assert();
    }

    //**************************** User Able to select currency from drop down scenario **********************
    @Given("^User on home page$")
    public void user_on_home_page() {

    }

    @When("^User Select any one currency from drop down$")
    public void user_Select_any_one_currency_from_drop_down() {
        homePage.click_On_Currency_Field();
    }

    @Then("^Verify all product currency same as select currency from drop down$")
    public void verify_all_product_currency_same_as_select_currency_from_drop_down() {
        homePage.verify_Currency_Symbol_In_Each_Prices();
    }

    //********************* Comments aAdded successfully ********************
    @When("^User click on online store is open$")
    public void user_click_on_online_store_is_open() {
        homePage.click_On_Online_Store_Is_Open();
    }

    @When("^User type title and comment in the box$")
    public void user_type_title_and_comment_in_the_box() {
        online_store_page.enter_Title_And_Comment();
    }

    @When("^Click on new comment$")
    public void click_on_new_comment() {
        online_store_page.click_On_New_Comment();
    }

    @Then("^User able to see comments added in comment box$")
    public void user_able_to_see_comments_added_in_comment_box() {
        online_store_page.verify_Comment_Successfully_Added();
        online_store_page.verify_Comment_Present_In_Comment_List();
        online_store_page.verify_Your_Comment_Last_In_List();

    }

    //*************** Jewellery Product Purchase **************************

    @When("^User click on jewellery category$")
    public void user_click_on_jewellery_category() {
        homePage.click_On_jewelleryCategory();
    }

    @When("^User click on Vintage Style Engagement Ring product$")
    public void user_click_on_Vintage_Style_Engagement_Ring_product() {
        jewelleryPage.click_on_vintage_Style_Engagement_Ring();
    }

    @When("^User click on checkout$")
    public void user_click_on_checkout() {

        shopping_cart_page.click_On_Checkout();
    }

    @When("^User enter register details$")
    public void user_enter_register_details() {
        sign_in_page.click_Register();
        registerPage.registration_Successfully();
    }

    @When("^User click on continue$")
    public void user_click_on_continue() {
        continue_page.click_On_Continue();
    }

    @When("^User click on Sopping cart checkbox and checkout$")
    public void user_click_on_Sopping_cart_check_box_and_checkout() {
        shopping_cart_page.click_On_Checkout();
    }
    @When("^User enter Billing Address details$")
    public void user_enter_Billing_Address_details() {
      billing_address.enter_Shipping_Address_Details();

    }
    @When("^User select shipping method and click on continue$")
    public void user_select_shipping_method_and_click_on_continue() {
       shipping_method_page.click_On_NextDayAir();
    }

    @When("^User select payment method and click on continue$")
    public void user_select_payment_method_and_click_on_continue() {
        payment_method_page.click_on_CreditCard_Payment();

    }
    @When("^User enter payment information and click on continue$")
    public void user_enter_payment_information_and_click_on_continue()  {
       cardPayment_details_page.enter_Card_Details();
    }
    @When("^User click on confirm$")
    public void user_click_on_confirm() {
       confirm_order_page.click_On_Confirm();
    }

    @Then("^User able to buy product successfully$")
    public void user_able_to_buy_product_successfully()  {
        buy_jewellery_product_assert.jewellery_Assert();

    }

}