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

room_name = localStorage.getItem("Room Name");
User_name = localStorage.getItem("User_Name");
function post() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name : User_name,
            Message : msg,
            Likes : 0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
   console.log(firebase_message_id);
   console.log(message_data);
   name_1 = message_data['Name'];
   Message = message_data['Message'];
   like = message_data['Likes'];
   console.log(like);

   Name_Tag = "<h4>"+name_1+"<img src='tick.png' class='user_tick'></h4>";
   Message_Tag = "<h4 class='message_h4'>"+Message+"</h4>";
   Like_Tag = "<button class='btn btn-info btn-xs' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
   Span_Tag = "<span class='glyphicon glyphicon-thumbs-up'>   Like : "+like+"</span></button><hr>";

   row = Name_Tag+Message_Tag+Like_Tag+Span_Tag;

   document.getElementById("output").innerHTML += row;
//End code
   } });  }); }
getData();


function update_like(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      Up_like = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            Likes : Up_like
      });
}


function Logout() {
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}