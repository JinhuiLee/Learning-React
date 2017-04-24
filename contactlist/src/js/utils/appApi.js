var firebase = require('firebase')
var AppActions = require('../actions/AppAction')
var config = {
            apiKey: "AIzaSyB6vxf7w8t_HWTnBRdWPywOpx7FVAzudMk",
            authDomain: "contact-e08d7.firebaseapp.com",
            databaseURL: "https://contact-e08d7.firebaseio.com",
            projectId: "contact-e08d7",
            storageBucket: "contact-e08d7.appspot.com",
            messagingSenderId: "977382337592"
        };
console.log('here')
firebase.initializeApp(config);

module.exports = {

    saveContact : function(contact){
        console.log("fire")
        this.firebaseRef = firebase.database().ref().child('contacts');
        console.log(this.firebaseRef)
        this.firebaseRef.push({
            contact: contact
        });
    },

    getContacts: function(){
        this.firebaseRef = firebase.database().ref().child('contacts');
        this.firebaseRef.once("value", function(snapshot){
            var contacts = [];
            snapshot.forEach(function(element) {
                var contact = {
                    id: element.key,
                    name: element.val().contact.name,
                    phone: element.val().contact.phone,
                    email: element.val().contact.email,
                }
                contacts.push(contact);
                
            });
            console.log(contacts);
            AppActions.receiveContacts(contacts);
            
        });
    },
    removeContact: function(contactId){
        console.log(contactId)
        this.firebaseRef = firebase.database().ref('contacts/'+contactId);
        this.firebaseRef.remove();
    },
    updateContact: function(contact){
        var id = contact.id;
        var updatedContact = {
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        }
        console.log("update")
        console.log(id)
        this.firebaseRef = firebase.database().ref("contacts/");
        var update = {}
        update[id + "/contact"] = updatedContact
        this.firebaseRef.update(update);
    }

    
}