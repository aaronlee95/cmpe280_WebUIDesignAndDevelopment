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
//       llink.removeAttribute("class");
//     }
//   }
// }

function get_frag_id(){
  return location.hash.substr(1);
}


function navigate(){
  var contentDiv = document.getElementById("content");
  var fragmentID = get_frag_id();
  console.log(fragmentID);
  getContent(fragmentID, function(content){
    contentDiv.innerHTML=content;
  });
  // setActiveLink(fragmentID);
};

function save_data(){
  // var db = openDatabase("Health Camp","0.1","Health Camp",655356);

 var db;
 var shortName='MyMobileApp';
 var version='0.1';
 var displayName='MyMobileApp';
 var maxSize = 65536;
 db = openDatabase(shortName,version,displayName,maxSize);

 var medication = "";



  console.log("trying to save data");
  var id = get_frag_id();

  if(id == "demographics"){
    var name = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var notes = document.getElementById("notes").value;
    var gender = document.getElementById("gender").value.toLowerCase();

    if((age < 0) || (age > 150) || (age == "")){
      alert("Enter age between 0 and 150");
      console.log("False");
      return false;
    }

    // if(name != null && gender != null && age != null)
    if(name && gender && age )
    {
      // db.transaction(
      //   function(transaction){
      //     transaction.executeSql('INSERT INTO health_report (name,age,gender,notes) VALUES (?,?,?,?);',[name,age,gender,notes], null, errorHandler);
      //   });

    db.transaction(function(transaction)
    {
      transaction.executeSql(
        'INSERT INTO customer (name,age,gender,notes) VALUES (?,?,?,?);', [name,age,gender,notes], null, errorHandler);
  }
 ); // END transaction()




      console.log("name: " + name )
      console.log("age: " + age )
      console.log("gender: " + gender )
      console.log("notes: " + notes )
      return true;
    }
  }
  else if(id == "health_vitals"){
    console.log("Inside: " + id);

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var temp = document.getElementById("temp").value;
    var pulse = document.getElementById("pulse").value;
    var blood = document.getElementById("blood_pressure").value;
    var medications = document.getElementById("meds").value;
    var notes = document.getElementByIdByID("notes").value;
  }
};

// This function here is used to write out any errors I get to the console.
function errorHandler(transaction, error) {
  console.log('Oops. Error was '+error.message+' (Code '+error.code+')');
  return true;
}

if(!location.hash){
  location.hash = "home"
};

navigate();
window.addEventListener("hashchange", navigate);

