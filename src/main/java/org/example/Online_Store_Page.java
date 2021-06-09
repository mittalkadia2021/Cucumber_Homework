package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.sql.Timestamp;
import java.util.List;

public class Online_Store_Page extends Utils {
    LoadProperty loadProperty = new LoadProperty();
    private By _titleType = By.xpath("//input[starts-with(@class, 'enter')]");
    private By _commentType = By.cssSelector("textarea#AddNewComment_CommentText");
    private By _click_NewComment = By.xpath("//button[contains(text(), 'New comment')]");
    private Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    private By _register_actualResult = By.xpath("//div[contains(text(),'Your registration completed')]");
    private By _comment_Successfully_Added = By.xpath("//div[contains(text(),'News comment is successfully added.')]");
    private By _commentsBox = By.cssSelector("div.comments");
    private By _comment_Whole_Box = By.cssSelector("div.comment.news-comment");

    String commentText = loadProperty.getProperty("Comment_Give") + dateStamp();
    String commentTitle = loadProperty.getProperty("TitleName") + dateStamp();


    public void enter_Title_And_Comment() {
        thread_Sleep();
        //enter title
        enterText(_titleType, commentTitle);
        waitForClickable(_commentType, 30);
        //enter comment
        enterText(_commentType, commentText);

    }

    public void click_On_New_Comment() {
        //click on new comment
        clickOnElement(_click_NewComment);
    }


    public void verify_Comment_Successfully_Added() {
        //to verify comment added successfully
        thread_Sleep();
        Assert.assertEquals(get_Text_From_Element(_comment_Successfully_Added), "News comment is successfully added.", "Comment not added successfully");

        //print output
        System.out.println(loadProperty.getProperty("Comment_Added_Successfully"));
    }

    public void verify_Comment_Present_In_Comment_List() {
        //verify Comment Present In Comment List
        Assert.assertTrue(get_Text_From_Element(_commentsBox).contains(commentText), "newly added comment is NOt present in comment list");

        //print output
        System.out.println(loadProperty.getProperty("Comment_Present_In_List"));
    }

    public void verify_Your_Comment_Last_In_List() {
        //finding total comments
        List<WebElement> commentList = driver.findElements(_comment_Whole_Box);

        //total comments
        int numberOfComments = commentList.size();

        //finding last comment index
        int lastCommentIndex = numberOfComments - 1;

        //get text of whole last comment
        String lastCommentActualText = commentList.get(lastCommentIndex).getText();

        //verifying last comments contains text of added comment
        Assert.assertTrue(lastCommentActualText.contains(commentText), "Added comment is NOT at last in comment list");

        //print output
        System.out.println(loadProperty.getProperty("Comment_Last_In_LIst"));
    }
}