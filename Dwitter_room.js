var firebaseConfig = {
      apiKey: "AIzaSyAX59vQosGHb13CyifOu3ZrkAfRXkRt1QQ",
      authDomain: "dwitter-3d78f.firebaseapp.com",
      databaseURL: "https://dwitter-3d78f-default-rtdb.firebaseio.com",
      projectId: "dwitter-3d78f",
      storageBucket: "dwitter-3d78f.appspot.com",
      messagingSenderId: "353658125060",
      appId: "1:353658125060:web:37e217fe8f3bf48594ae51",
      measurementId: "G-MRTMD9XSC2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function Add_Room() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose : "Addind Room Name"
      });
      localStorage.setItem("Room Name", Room_name);
      window.location = "message_Page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log(Room_names);
     row = "<div class ='room_name' id=" + Room_names + " onclick='RTMR(this.id)'> Room Name '#" + Room_names + "' is Open</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}

     function RTMR(name){
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "message_Page.html";
}
getData();

    
user_name = localStorage.getItem("User_Name");
welcome = "Welcome : " + user_name;
document.getElementById("user_name").innerHTML = welcome;

function Logout() {
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}
