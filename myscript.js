
var username = document.getElementById("username");
var openPage = document.getElementById("openPage");
var userStory = document.getElementById("userStory");
var postPage = document.getElementById("postPage");
var homePage = document.getElementById("homePage");
var story = document.getElementById("storyInput");
var post = document.getElementById("post");
var storyBox = document.getElementById("stories");

var storyArr = [];




openPage.addEventListener("click", function(){
    console.log("Hi");
    postPage.style.display="block";
    homePage.style.display="none";
    
 
});
    








 post.addEventListener("click", function(){
     console.log("post");
 
          

     if (story.value == "") {
		alert("Your story is blank!");
	}
     
     else {
         
        postPage.style.display="none";
        homePage.style.display="block";
        userStory.style.display="block";
         
        var storeitem = document.createElement("div");
        storeitem.id = 'storeitem_id';
        storeitem.innerHTML = username.value + "<br> <br> <br>" + story.value;
		userStory.appendChild(storeitem);   
         
     }
     

        for (var i = 0; i < storyArr.length; i++) {
		
		storyBox.innerHTML = storyArr[i];
	}
     
       

});   
     
     
     
  


function addToDB(){
    var xmlhttp = new XMLHttpRequest(),
        request = "http://localhost:8888/10words/insert.php?&uname="+username.value + "&ustory=" + story.value;
    
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
  
            
        };
        
        
    };
    
    xmlhttp.open("GET", request, true);
    xmlhttp.send();
    
    
};





    
//10 word limit function

$(document).ready(function() {
    $("#storyInput").on('keydown', function(e) {
        var words = $.trim(this.value).length ? this.value.match(/\S+/g).length : 0;
        if (words <= 9) {
            $('#word_left').text(9-words)
        }else{
            if (e.which !== 8) e.preventDefault();
        }
    });
 }); 


// Scroll Feature 

$(document).ready(function(){
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});





