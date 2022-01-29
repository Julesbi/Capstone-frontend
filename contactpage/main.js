const firebaseConfig = {
    apiKey: "AIzaSyBFF2IjytBMboJBe093Hs0vrqeL6dL9Vqw",
    authDomain: "capstone-project-e53b1.firebaseapp.com",
    projectId: "capstone-project-e53b1",
    storageBucket: "capstone-project-e53b1.appspot.com",
    messagingSenderId: "703853206421",
    appId: "1:703853206421:web:096ac08256e649a506f49c"
  };
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');
  //listen for form submit

document.getElementById('contactform').addEventListener('submit', submitForm);
// submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name= getInputval('name');
    var email= getInputval('email');
    var message= getInputval('message');
    // save message
    saveMessage(name, email,message);

}
//function  to get form value
function getInputval(id){
    return document.getElementById(id).value;

}
// save messages to firebase

function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });
}