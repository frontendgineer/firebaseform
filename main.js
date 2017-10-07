(function() {
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBA476qy_WeStsjaCizoRsBpnKlYF4409w",
    authDomain: "fb-contact.firebaseapp.com",
    databaseURL: "https://fb-contact.firebaseio.com",
    projectId: "fb-contact",
    storageBucket: "",
    messagingSenderId: "1016380723773"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages')

document.getElementById('contactForm')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputValue('name');
    var company = getInputValue('company');
    var email = getInputValue('email');
    var phone = getInputValue('phone');
    var message = getInputValue('message');

    console.log(email)

    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear form
    document.getElementById('contactForm').reset();

}

function getInputValue(id) {
    return document.getElementById(id).value;
}

// save messages to Firebase
function saveMessage(name, company, email, phone, message) {

    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}


})();
