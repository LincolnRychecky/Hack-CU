//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDZkphKGDOGFqEShcoySi39tFB7BtAR0CY",
//     authDomain: "invasive-species-reporter.firebaseapp.com",
//     databaseURL: "https://invasive-species-reporter.firebaseio.com",
//     projectId: "invasive-species-reporter",
//     storageBucket: "invasive-species-reporter.appspot.com",
//     messagingSenderId: "198911272608",
//     appId: "1:198911272608:web:595d186746e2b1f94ccbc5",
//     measurementId: "G-4571BBW3QX"
//   };
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig); //creating instance of firebase
//   // Get a reference to the database
// var database = firebase.firestore();
// var docRef = database.collection("Aquatics Reports");


function display_Name() {
  document.getElementById("Species Name").innerHTML = "Raegan";
}
function display_Description() {
  document.getElementById("Species Description").innerHTML = "Raegan";
}
function display_Problem() {
  document.getElementById("Problem").innerHTML = "Raegan";
}
function display_waterSheds() {
  document.getElementById("Water Sheds").innerHTML = "Raegan";
}

function GFG_Fun() {
  var img = document.createElement("img");
  img.src = "SMB.png";
  var src = document.getElementById("header");
  src.appendChild(img);
}
//
// function findFish(searchName)
// {
//
//   database.collection("InvasiveSpeciesEntries").get().then(function(querySnapshot)
//   {querySnapshot.forEach(function(doc){
//     if(doc.exists && doc.data().name == searchName)
//     {
//       console.log("Document data:", doc.data());
//       var post = doc.data();
//       var name = post.name;
//       var description = post.description;
//       var problem = post.problem;
//       var waterSheds = post.waterSheds;
//
//       display_Name("Raegan")
//       // var card1 = addPosting(name, description, problem, waterSheds);
//       // document.getElementById('speciesCard').appendChild(card1);
//     }
//
//     });
//   });
//
// }
