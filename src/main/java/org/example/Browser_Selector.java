package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Browser_Selector extends BasePage {

    LoadProperty loadProperty = new LoadProperty();

    String browserName = loadProperty.getProperty("browser");
    public static final String AUTOMATE_USERNAME = "mittalkadia_c5AduX";
    public static final String AUTOMATE_ACCESS_KEY = "r56zcp2swxqvZhvxB5De";
    public static final String URL = "http://" + AUTOMATE_USERNAME + ":" + AUTOMATE_ACCESS_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static final boolean browserStack = false;
    DesiredCapabilities caps = new DesiredCapabilities();


    public void open_Browser() {
        if (browserStack) {
            if (browserName.equalsIgnoreCase("chrome")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "90.0");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.14.0");
            } else if (browserName.equalsIgnoreCase("edge")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "7");
                caps.setCapability("browser", "Edge");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.5.2");
            } else if (browserName.equalsIgnoreCase("Firefox")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "8");
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("resolution", "1600x1200");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.10.0");
            }


            try {
                driver = new RemoteWebDriver(new URL(URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

        }
        //open locally
        else {
            if

            (browserName.equalsIgnoreCase("chrome")) {
                //setting up chromedriver path from your system
                System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDriver/chromedriver.exe");
                //creating object for driver
                driver = new ChromeDriver();
            } else if (browserName.equalsIgnoreCase("edge")) {
                //setting up EdgeDriver path from your system
                System.setProperty("webdriver.edge.driver", "src/test/resources/BrowserDriver/msedgedriver.exe");
                //creating object for driver
                driver = new EdgeDriver();
            } else if (browserName.equalsIgnoreCase("Firefox")) {
                //setting up FirefoxDriver path from your system
                System.setProperty("webdriver.gecko.driver", "src/test/resources/BrowserDriver/geckodriver.exe");
                //creating object for driver
                driver = new FirefoxDriver();
            } else {
                System.out.println("In correct browser name or empty" + browserName);
            }
        }
        //maximize the browser window
        driver.manage().window().maximize();
        //Apply implicitlyWait to driver object
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

}
