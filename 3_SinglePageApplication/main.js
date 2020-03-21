// Returns the html link to each page
function getContent(fragmentID, callback){
  var request = new XMLHttpRequest();
  request.onload = function(){
    callback(request.responseText);
  };

  request.open("GET", fragmentID + ".html");
  request.send(null);
}

// Return hash of each page
function get_frag_id(){
  return location.hash.substr(1);
}

// Function to move to a specific page on click
function navigate(){
  var contentDiv = document.getElementById("content");
  var fragmentID = get_frag_id();
  console.log(fragmentID);
  getContent(fragmentID, function(content){
    contentDiv.innerHTML=content;

  if(fragmentID == "reports"){
    displayTable();
  }
  });
};

// Save Data to WebSQL whel button is clicked on Demographics and Health Vitals Page
function save_data(){
  db = openDatabase('Health Camp','0.1','Health Camp',65536);

  console.log("trying to save data");
  var id = get_frag_id();

  if(id == "demographics"){
    var name = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var notes = document.getElementById("notes").value;
    var gender = document.getElementById("gender").value.toLowerCase();
    var medications = "N/A";

    if((age < 0) || (age > 150) || (age == "")){
      alert("Enter age between 0 and 150");
      console.log("False");
      return false;
    }

    if(!notes){
      notes="N/A";
    }

    if(name && gender && age )
    {
    db.transaction(function(transaction)
    {
      transaction.executeSql(
        'INSERT INTO patients (name,age,gender,medications,notes) VALUES (?,?,?,?,?);', [name,age,gender,medications,notes], null, errorHandler);
  });
      return true;
    }
  }
  else if(id == "health_vitals"){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var temp = document.getElementById("temp").value;
    var pulse = document.getElementById("pulse").value;
    var blood = document.getElementById("blood_pressure").value;
    medications = document.getElementById("meds").value;
    var notes = document.getElementByIdByID("notes").value;
  }
};

function errorHandler(transaction, error) {
  console.log('Oops. Error was '+ error.message+' (Code '+error.code+')');
  return true;
}

//Get Data from WebSQL db and display when choosing 'reports' page
function displayTable(){
 db = openDatabase('Health Camp','0.1','Health Camp',65536);

  db.transaction(function(tx){
    tx.executeSql('SELECT * FROM patients', [], function (tx, results){
      var len = results.rows.length, i;
      var str = '';
      for (i = 0; i < len; i++) {
        str += "<tr>";
        str += "<td>" + results.rows.item(i).id + "</td>";
        str += "<td>" + results.rows.item(i).name + "</td>";
        str += "<td>" + results.rows.item(i).age + "</td>";
        str += "<td>" + results.rows.item(i).gender + "</td>";
        str += "<td>" + results.rows.item(i).medications + "</td>";
        str += "<td>" + results.rows.item(i).notes + "</td>";
        str += "</tr>";
        document.getElementById("health_report").innerHTML += str;
        str = '';
        }}, null);
    });

  };

if(!location.hash){
  location.hash = "home"
};

navigate();
window.addEventListener("hashchange", navigate);

