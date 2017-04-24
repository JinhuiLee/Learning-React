var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');

var AppAction = {
    saveContact: function(contact){
        console.log(contact);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        });
    },
    receiveContacts: function(contacts){
        console.log("receive")
        console.log(contacts);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_CONTACT,
            contacts: contacts
        });
    },
    removeContact: function(contactId){
        console.log(contactId)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACT,
            contactId: contactId
        });
    },
    editContact: function(contact) {
        console.log("editContact")
        console.log(contact)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_CONTACT,
            contact: contact
        });
    },
    updateContact: function(contact) {
        console.log("updateContact")
        console.log(contact)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_CONTACT,
            contact: contact
        });
    }


}

module.exports = AppAction;
