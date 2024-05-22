var firebaseConfig = {
      apiKey: "AIzaSyAj25sS77EGdM5DENSTOVbXpRFcHXSwJOc",
      authDomain: "tarvent-acb8e.firebaseapp.com",
      databaseURL: "https://tarvent-acb8e-default-rtdb.firebaseio.com",
      projectId: "tarvent-acb8e",
      storageBucket: "tarvent-acb8e.appspot.com",
      messagingSenderId: "686219296886",
      appId: "1:686219296886:web:35b6f0282f8f5c7e7edf57"
    };
    
firebase.initializeApp(firebaseConfig);
    
username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";
function addRoom() {
      roomName = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({purpose: "Adding Room"});
      localStorage.setItem("roomName", roomName);
      window.location = "tarvent_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
       row = "<div class='roomName' id="+room_names+" onclick='redirectToroomName(this.Id)'>#"+room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToroomName(name) {
      localStorage.setItem("roomName", name);
      window.location = "tarvent_page.html";
}
