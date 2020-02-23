  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZkphKGDOGFqEShcoySi39tFB7BtAR0CY",
    authDomain: "invasive-species-reporter.firebaseapp.com",
    databaseURL: "https://invasive-species-reporter.firebaseio.com",
    projectId: "invasive-species-reporter",
    storageBucket: "invasive-species-reporter.appspot.com",
    messagingSenderId: "198911272608",
    appId: "1:198911272608:web:595d186746e2b1f94ccbc5",
    measurementId: "G-4571BBW3QX"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); //creating instance of firebase
  // Get a reference to the database
var database = firebase.firestore();
var docRef = database.collection("Aquatics Reports");

<<<<<<< HEAD
var selectedFish = "Zebra Mussel";


=======
>>>>>>> master
function getNameFromClick(fishName){
  console.log("Hello");
  localStorage.setItem('selectedFish',fishName);
  window.location.href = "specificFish.html";
}
function display_Name(name) {
  document.getElementById("Species Name").innerHTML = name;
}
function display_Description(description) {
  document.getElementById("Species Description").innerHTML = description;
}
function display_Problem(problem) {
  document.getElementById("Problem").innerHTML = problem;
}
function display_waterSheds(waterSheds) {
  document.getElementById("Water Sheds").innerHTML = waterSheds;
}

function GFG_Fun(image) {
  var img = document.createElement("img");
  img.src = image;
  var src = document.getElementById("header");
  src.appendChild(img);
}

function findFish()
{
console.log("We entered find fish:");
  database.collection("InvasiveSpeciesEntries").get().then(function(querySnapshot)
  {querySnapshot.forEach(function(doc){
    if(doc.exists && doc.data().name == localStorage.getItem('selectedFish'))
    {
      console.log("Document data:", doc.data());
      var post = doc.data();
      var name = post.name;
      var description = post.description;
      var problem = post.problem;
      var waterSheds = post.waterSheds;
      var image = post.image;

      display_Name(name);
      display_Description(description);
      display_Problem(problem);
      display_waterSheds(waterSheds);
      GFG_Fun(image);

    }

    });
  });

}
