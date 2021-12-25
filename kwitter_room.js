
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
      authDomain: "kwitter-app-697e2.firebaseapp.com",
      projectId: "kwitter-app-697e2",
      storageBucket: "kwitter-app-697e2.appspot.com",
      messagingSenderId: "745887955150",
      appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

first_name= localStorage.getItem("FirstName");
user_name= localStorage.getItem("UserName");
document.getElementById("welcomeTag").innerHTML="Welcome "+ first_name +"!";
document.getElementById("ID").innerHTML= "User Name: " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location= "index.html";
      localStorage.setItem("FirstName", " ");
      localStorage.setItem("LastName", " ");
      localStorage.setItem("UserName", " ");
}
