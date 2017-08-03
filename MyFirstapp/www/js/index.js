
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();

var topics = [
{title:"Benz",posts:54},
{title:"BMW",posts:51},
];

function showLoginPage(){
     var page = $("<div></div>");
     page.append("<h1 class = 'logintitle'>Login page</h1>");
     var username = $("<input type='text'></input>");
     var usernameLine = $("<p class='bodyfont'><b>Username: </b></p>");
     var password = $("<input type='text'></input>");
     var passwordLine = $("<p class='bodyfont'><b>Password: </b></p>");
     page.append(usernameLine);
     usernameLine.append(username);
     page.append(passwordLine);
     passwordLine.append(password);

   var loginbutton = $("<button class='button'>Login</button>");
     page.append(loginbutton);
     loginbutton.on("click",function(){
         showForumTopics();
     }
   );

     $("#maincontent").html(page);
}

function showRegisterPage(){

      var page = $("<div></div>");
      var registerbutton = $("<button class='button'>Submit</button>");
      page.append("<h1 class = 'logintitle'>Registration page</h1>");
      var username = $("<input type='text'></input>");
      var usernameLine = $("<p class='bodyfont'><b>Enter Your username here: </b></p>");

      var password = $("<input type='text'></input>");
      var passwordLine = $("<p class='bodyfont'><b>Enter your password here: </b></p>");

      var confirmpassword = $("<input type='text'></input>");
      var confirmpasswordLine = $("<p class='bodyfont'><b>Confirm your password here: </b></p>");

      page.append(usernameLine);
      usernameLine.append(username);
      page.append(passwordLine);
      passwordLine.append(password);
      page.append(confirmpasswordLine);
      confirmpasswordLine.append(confirmpassword);

      page.append(registerbutton);

      registerbutton.on("click",function(){
         alert("New User has been Added");
         showLoginPage();
      });
     $("#maincontent").html(page);
}

function createTopicOnclick(node,topic){
  node.on("click",function(){
   showSingleTopic(topic);
  });
}

function showForumTopics(){
  var page = $("<div></div>");

  page.append("<h1 class='logintitle'>Forum Topics</h1>");
  var topicTable = $("<table class='topicsTable'><tr><th>Title</th><th>Posts</th></tr></table>");
  for (index in topics){
  var row = $("<tr></tr>");
  row.append("<td>" + topics[index].title + "</td>");
  row.append("<td>" + topics[index].posts + "</td>");
  createTopicOnclick(row,topics[index]);
  topicTable.append(row);
}
  page.append(topicTable);
 $("#maincontent").html(page);
}


function showSingleTopic(topicDetails){
  if (topicDetails.title == "Benz"){
  Alltopic();
}
    if (topicDetails.title == "BMW"){
      var page = $("<div></div>");
      page.append("<h1>Other Topics</h1>");

}
    $("#maincontent").html(page);

}

var textarea = $("<input id='topictitle'>");
var textsarea = $("<textarea id='forumcontent' rows='5' cols='40' style='resize:none'></textarea><br>");
var StudenttopicTable = $("<table class='topicsTable' id='myTableID'><tr><th>User</th><th>Content</th></tr></table>");
var Table = $("<table class='topicsTable'><tr><th>Title</th><th>content</th></tr></table>");
var ro = $("<tr></tr>");

 function Alltopic(){
    var page = $("<div></div>");
    var PresentButton = $("<button class='button'>Submit</button>");
    page.append("<h1 class='logintitle'>Benz Disscussion Part</h1>");
    page.append(Table);
    var inputone = $("<br><input id='topic'><br>");
   var inputtwo = $("<textarea id='content' rows='5' cols='40' style='resize:none'></textarea><br>");
    page.append("<p class='bodyfont'>Enter Your Title here: </p>");
    page.append(inputone);
    page.append("<p class='bodyfont'>Enter Your content here: </p>");
    page.append(inputtwo);
    page.append(PresentButton);
   $("#maincontent").html(page);

   Table.on("click",function(){
   tableshowup();
   });


  PresentButton.on("click",function(){

    var topicinput=document.getElementById("topic").value;
    var contentinput=document.getElementById("content").value;
    var ro = $("<tr></tr>");
    ro.append("<td>" + topicinput + "</td>");
    ro.append("<td>" + contentinput + "</td>");
    Table.append(ro);

    ro.on("click",function(){
    tableshowup();
    });

});


}

function tableshowup(){

  var page = $("<div></div>");
  page.append("<h1 class='logintitle'>Reply Part</h1>");
  var title = $("<p>Enter Your title here: </p>");
  var row = $("<tr></tr>");
  page.append(StudenttopicTable);
  var Submitbutton = $("<button class='button'>Reply</button>");

  page.append(StudenttopicTable);
  page.append(title);
  title.append(textarea);
  page.append("<p>Enter Your Reply here: </p>");
  page.append(textsarea);
  page.append(Submitbutton);
  Submitbutton.on("click",function(){
   add();
});

function add(){
  var b=document.getElementById("topictitle").value;
  var c=document.getElementById("forumcontent").value;
//judge if user get the empty value for input
if(b == "" || c ==""){
alert("Cannot Add Empty Value Into table, please try again!")
}

else{
var row = $("<tr></tr>");
row.append("<td>" + usericon + b + "</td>");
row.append("<td>" + c + "</td>");
StudenttopicTable.append(row);
createsTopicOnclick(row,Studenttopics);
var rowCount = document.getElementById('myTableID').rows.length;
var Studenttopics = {title: b,content: c,index: rowCount};
console.log(Studenttopics);
}}
$("#maincontent").html(page);
}

//on click function for StudenttopicTable
function createsTopicOnclick(node,Studenttopics){
  node.on("click",function(){
    var rowCount = document.getElementById('myTableID').rows.length;
    console.log(rowCount);
});
}

//web application load
$( document ).ready(function() {
$("#loginButton").on("click", showLoginPage);
$("#registerButton").on("click", showRegisterPage);
$("#MainPageButton").on("click", showLoginPage);
showLoginPage();
});
