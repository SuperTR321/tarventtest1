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
roomName = localStorage.getItem("roomName");

function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(roomName).push({
            name1: username,
            message: msg,
            likes: 0
      });
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         name1 = message_data['name1'];
         message = message_data['message'];
         likes = message_data['likes'];
         console.log(name1);
         console.log(message);
         console.log(likes);
         name_with_the_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
         message = "<h4 class='message_h4'>" + message + "</h4>";
         likebutton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + "onclick='updateLike(this.id)'>";
         spantag = "<span class='glyphicon glyphicon-thumbs-up'>Like" + likes + "</span></button><hr>";
         row = name_with_the_tag + message + likebutton + spantag;
         document.getElementById('output').innerHTML += row;
      } });  }); }
getData();

function logOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}

function updateLike(message_id) {
      buttonid = message_id;
      likes = document.getElementById(buttonid).value;
      updateLike = Number(likes) + 1;
      firebase.database().ref(roomName).child(message_id).update({
            likes: updateLike
      });
}
