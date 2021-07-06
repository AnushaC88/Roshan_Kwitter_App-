  //ADD YOUR FIREBASE LINKS
  var firebaseConfig = {
    apiKey: "AIzaSyBBOd22itkmYHJOGnek2YC6ro7dPyKyGT8",
    authDomain: "kwitter-9a3db.firebaseapp.com",
    databaseURL: "https://kwitter-9a3db-default-rtdb.firebaseio.com",
    projectId: "kwitter-9a3db",
    storageBucket: "kwitter-9a3db.appspot.com",
    messagingSenderId: "969532395545",
    appId: "1:969532395545:web:c4649645f26707bf7e1a88"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}