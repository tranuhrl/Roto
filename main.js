firebaseConfig = {
  apiKey: "AIzaSyAmNJ2d--xcMZUos89yE1__dpPg3IriaIk",
  authDomain: "roto-c035a.firebaseapp.com",
  databaseURL: "https://roto-c035a-default-rtdb.firebaseio.com",
  projectId: "roto-c035a",
  storageBucket: "roto-c035a.appspot.com",
  messagingSenderId: "1059307528995",
  appId: "1:1059307528995:web:71ea4cfd0b9f481728e296"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + room_name).on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
            console.log(firebase_message_id);
            console.log(message_data);
            message = message_data["message"];
            message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
  
            row = message_with_tag
            document.getElementById("output").innerHTML += row;w
          }
        });
      });
  }
  getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      message: msg,
    });
  
    document.getElementById("msg").value = "";
  }