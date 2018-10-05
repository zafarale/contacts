/**
 * *****************
 *   Classes in Jaavscript
 * *****************
 */

/**
 * Method 1 ES.Next
 */
class contact1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
/* Object Literal*/
var Person = function () {
    uid = 10;
    return {
        getNationalId: function () {
            return uid;
        }
    }
}

/**
 * Contact Class
 */
function Contact(firstName, lastName) {
    //Private Interface
    var uid = null;
    firstName = firstName;
    lastName = lastName;
    password = "test";

    getPassword = function () {
        return this.password;
    }
    return {
        //Public Interface

        getUid: function () {
            return uid;
        },
        setUid: function (uid) {
            uid = uid;
        },
        getFirstName: function () {
            return name;
        },
        getLastName: function () {
            return lastName;
        }
    }
}



var ContactManager = new function () {
    var dataStore = {};

    function createuid() {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    return {
        create: function (firstName, lastName) {
            var contact = new Contact(firstName, lastName);
            contact.setUid(createuid());
            dataStore[contact.uid] = contact;
            return contact;
        },
        get: function (uid) {
            return Object.values(dataStore).filter(c => c.getUid() === uid);
        },
        getAll: function () {
            return Object.values(dataStore);
        }

    }
};
/**
 * https://webplatform.github.io/
 * https://developer.mozilla.org/bm/docs/Web/JavaScript
 * Entry Point
 */
(
    function () {
        console.log("Starting Application");
        var range = (l, r) => new Array(r - l).fill().map((_, k) => k + l);

        range(1, 5).forEach(
            function (index) {
                ContactManager.create("First " + index, "Last " + index);
            }
        );

        var allContacts = ContactManager.getAll();
        /*
        Object.values(allContacts).forEach(
            function (index) {
                console.log(index);
            }
        );
        */

        console.log(Object.values(allContacts)[0].getUid());
    }

)();