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

function addUser() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "tarvent_room.html";
}

function rules() {
    window.location ="rules.html";
}