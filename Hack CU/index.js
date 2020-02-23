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


function addEvent()
{
  console.log("Hello")
  //ADD A header
  var headTop = document.createElement("h1");
  headTop.innerHTML = "smallmouth Bass";
  document.getElementById("speciesCard").appendChild(headTop);

  // //Create card
  // let card = document.createElement("div");
  // card.className = 'card';
  //
  // //Add card body
  // let cardBody = document.createElement('div');
  // card.appendChild(cardBody);
  // cardBody.className = 'card-header';
  //
  // //Add title
  // let cardTitle = document.createElement('h5');
  // cardTitle.innerHTML = title;
  // cardBody.appendChild(cardTitle);
  //
  // //Add description
  // let desc = document.createElement('p');
  // card.appendChild(desc);
  // desc.innerText = description;
  // cardBody.appendChild(desc);
  //
  // //Add user contact info
  // // <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  // //   Button with data-target
  // // </button>
  //
  // let info = document.createElement('p');
  // card.appendChild(info);
  // info.innerText = contact;
  // cardBody2.appendChild(info);
  //
  // return card;
}

// function findFish(searchName)
// {
//
//   database.collection("InvasiveSpeciesEntries").get().then(function(querySnapshot)
//   {querySnapshot.forEach(function(doc){
//     if(doc.exists && doc.data().name == )
//     {
//       console.log("Document data:", doc.data());
//       var post = doc.data();
//       var name = post.name;
//       var description = post.description;
//       var problem = post.problem;
//       var waterSheds = post.waterSheds;
//       var card1 = addPosting(name, description, problem, waterSheds);
//       document.getElementById('speciesCard').appendChild(card1);
//     }
//
//     });
//   });
//
// }
