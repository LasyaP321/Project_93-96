var firebaseConfig =
{
    apiKey: "AIzaSyC49_qt2yKyAzHNFVQYMzhSERsJuePu6uY",
    authDomain: "kwitter-test-45c7c.firebaseapp.com",
    databaseURL: "https://kwitter-test-45c7c-default-rtdb.firebaseio.com",
    projectId: "kwitter-test-45c7c",
    storageBucket: "kwitter-test-45c7c.appspot.com",
    messagingSenderId: "759765528834",
    appId: "1:759765528834:web:11cf4fc638d689c20c121b",
    measurementId: "G-ZYMX04KGLN"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    (
        {
            purpose : "adding room name"
        }
    );
    localStorage.setItem("room_name", room_name);
    window.location = "letschat_room.html";
}
function getData()
{
    firebase.database().ref("/").on
    (
        'value', function(snapshot)
        {
            document.getElementById("output").innerHTML = ""; snapshot.forEach
            (
                function(childSnapshot)
                {
                    childKey  = childSnapshot.key;
                    Room_names = childKey;
                    console.log("Room Name - " + Room_names);
                    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                    document.getElementById("output").innerHTML += row;
                }
            );
        }
    );
}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "letschat.html";
}