// Returns the html link to each page
function getContent(fragmentID, callback){
  var request = new XMLHttpRequest();
  request.onload = function(){
    callback(request.responseText);
  };

  request.open("GET", fragmentID + ".html");
  request.send(null);
}

// function setActiveLink(fragmentID){
//   navbarDiv = document.getElementById("navbar");
//   links = navbarDiv.children;
//   // var i, link, pageName;

//   for(i=0; i < links.length; i++){
//     link = links[i];
//     // pageName = link.getAttribute("href").substr(1);
//     if(pageName == fragmentID){
//       console.log("setting to active: " + pageName);
//       link.setAttribute("class", "active");
//     }
//     else{
//       link.removeAttribute("class");
//     }
//   }
// }

function navigate(){
  var contentDiv = document.getElementById("content");
  var fragmentID = location.hash.substr(1);
  console.log(fragmentID);
  getContent(fragmentID, function(content){
    contentDiv.innerHTML=content;
  });
  // setActiveLink(fragmentID);
};

if(!location.hash){
  location.hash = "home"
}

navigate();
window.addEventListener("hashchange", navigate);

