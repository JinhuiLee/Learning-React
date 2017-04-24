var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign')
var AppApi = require('../utils/appApi.js')

var CHANGE_EVENT = 'change';

var _contacts = []
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
    saveContact: function (contact) {
        _contacts.push(contact)
    },
    removeContact: function (contactId) {
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index, 1)
    },
    getContacts: function () {
        return _contacts;
    },
    setContacts: function (contacts) {
        _contacts = contacts;
    },
    setContactToEdit: function(contact){
        _contact_to_edit = contact;
    },
    updateContact: function(contact){
        for(i = 0; i < _contacts.length; i++) {
            if (_contacts[i].id == contact.id){
                _contacts.splice(i,1);
                _contacts.push(contact);
                break;
            }
        }
    },
    getContactToEdit: function(contact){
        return _contact_to_edit;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback)
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback)
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact $$ ' + action.contact);
            AppStore.saveContact(action.contact);
            AppApi.saveContact(action.contact);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_CONTACT:
            console.log('receiving Contact $$ ' + action.contact);
            AppStore.setContacts(action.contacts);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.REMOVE_CONTACT:
            console.log('remove Contact $$ ' + action.contactId);
            AppStore.removeContact(action.contactId);
            AppApi.removeContact(action.contactId);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.EDIT_CONTACT:
            console.log('edit Contact $$ ')
            console.log(action.contact);
            AppStore.setContactToEdit(action.contact);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.UPDATE_CONTACT:
            console.log('UPDATE Contact $$ ')
            console.log(action.contact);
            AppStore.updateContact(action.contact);
            AppApi.updateContact(action.contact)
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;