
var username = document.getElementById("username");
var openPage = document.getElementById("openPage");
var userStory = document.getElementById("userStory");
var postPage = document.getElementById("postPage");
var homePage = document.getElementById("homePage");
var story = document.getElementById("storyInput");
var post = document.getElementById("post");





openPage.addEventListener("click", function(){
    postPage.style.display="block";
    homePage.style.display="none";
    
 
});
    
function publish(){
    userStory.style.display="block";
    userStory.innerHTML =  username.value + story.value;
    postPage.style.display="none";
    homePage.style.display="block";
    
}
    






