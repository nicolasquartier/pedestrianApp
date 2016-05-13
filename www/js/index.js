/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var connectionType = navigator.connection.type;
        if(connectionType == "wifi") {
            navigator.notification.alert("We are not doing repairs at home.", this.doNothing(), connectionType, "euh OK...");
        }
        else if(connectionType == "none") {
            navigator.notification.alert("Sorry you almost tumbled. Please report this later when connected to network.", this.doNothing(), connectionType, "euh OK...");
        }
        else {
            // navigator.notification.alert("Unknown network connection type", this.doNothing(), connectionType, "euh OK...");
        }

        document.addEventListener("resume", this.resumeApp, false);
        document.addEventListener("volumedownbutton", this.volumedown, false);
        document.addEventListener("volumeupbutton", this.volumeup, false);
    },


    resumeApp: function() {
        alert("resume");
        // navigator.notification.alert("Welcome back! Glad you survived your tumble!", this.doNothing(), "Resume", "euh OK...");
    },

    volumedown: function() {
        alert("not implemented yet");
    },

    volumeup: function() {
        alert("not implemented yet");
    },


    doNothing: function() {
        document.getElementById("deviceplatform").textContent = device.platform;
        document.getElementById("deviceuuid").textContent = device.uuid;
        document.getElementById("deviceversion").textContent = device.version;
        document.getElementById("devicemodel").textContent = device.model;
        document.getElementById("devicename").textContent = device.name;
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
        // document.getElementById("txtlocation").textContent = "lat: " + navigator.geolocation.getCurrentPosition().coords.latitude + " lon: " + navigator.geolocation.getCurrentPosition().coords.longitude;

    },

    onSuccess: function(position) {
        // alert("succes gps: lat: " +  );
        document.getElementById("txtlocation").textContent = "lat: " + position.coords.latitude + " lon: " + position.coords.longitude;
    },

    onError: function() {
        alert("error gps");
    }
};


function getPicture() {
    navigator.camera.getPicture(onCameraSuccess, onCamerFailure);
}

function onCameraSuccess() {
    alert("camera success");
}

function onCamerFailure() {
    alert("camera alert");
}

function checkContacts() {
    var contactFields = ["displayName", "name"];
    var options = {
        filter: "Wile E Coyote"
    };
    var contact = navigator.contacts.find(contactFields, onSuccessContact, onFailureContact, options);
}

function onSuccessContact(contacts) {
    alert(contacts.length + " contacts found")
    if(contacts.length > 0) {
        for (var i = 0; i < contacts.length; i++) {
            console.log("Contact[" + i + "]: " + JSON.stringify(contacts[i]));
        }
    }
    else {
        alert("create wil e coyote!")
        var newContact = navigator.contacts.create();
        var fullName = "Wile E Coyote";
        newContact.displayName = fullName;
        newContact.save(onSuccessContactSave, onFailureContactSave);
    }
}

function onFailureContact() {
    alert("contact fail!");
}

function onSuccessContactSave() {
    alert("wil e coyote saved");
}

function onFailureContactSave() {
    alert("wil e coyote NOOOT saved");
}

function callReinout() {
    alert("not implemented yet");
}

function save() {
    alert("nothing to save");
}