package org.example;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.sun.deploy.cache.Cache.copyFile;

public class Hooks extends Utils {

    Browser_Selector browser_selector = new Browser_Selector();

    @Before
    public void openBrowser() {

        browser_selector.open_Browser();
        driver.get("https://demo.nopcommerce.com/");

    }

    @After
    public void closeBrowser(Scenario scenario) {
        //test data
        String screenshotName = scenario.getName().replaceAll(". , : ; ! ?", "") + dateStamp() + ".png";
        //capture screenshot if test is fail
        if (scenario.isFailed()) {
            File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File destinationPath = new File(System.getProperty("user.dir") + "/target/destination/screenshot/" + screenshotName);

            try {
                copyFile(sourcePath, destinationPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

            scenario.write(("!!!!!!!!!!!!!......Scenario Failed.......!!!!!!!!!!!"));
            scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
        }
        // close browser
        close_Browser();
    }

}

