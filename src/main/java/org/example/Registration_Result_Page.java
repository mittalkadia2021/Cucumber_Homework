package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

import java.sql.Timestamp;

public class Registration_Result_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    private By _register_actualResult = By.xpath("//div[contains(text(),'Your registration completed')]");


    public void registration_Completed_Assert() {
        //verify register successfully message
        Assert.assertEquals(get_Text_From_Element(_register_actualResult), "Your registration completed", "Registration is not complete");

        //print output
        System.out.println(loadProperty.getProperty("RegisterPassAssertMessage"));
    }

}
