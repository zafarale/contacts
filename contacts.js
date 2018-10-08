var ContactManager = (function () {
    /**
     * Private Members
     */
    var createuid = function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    var Contact = function (firstname, lastname) {
        //console.log("%s, %s", firstname, lastname);
        var firstname = firstname;
        var lastname = lastname;
        var company;
        var city;
        var country;
        var email;

        var uid = createuid();

        return {
            getUid: function () {
                return uid;
            },
            getFirstName: function () {
                return firstname;
            },
            setFirstName: function (fname) {
                firstname = fname;
            },
            getLastName: function () {
                return lastname;
            },
            setLastName: function (last) {
                lastname = last
            },
            setEmail: function (emailAddress) {
                email = emailAddress;
            },
            getEmail: function () {
                return email;
            },
            setCity: function (cityname) {
                city = cityname;
            },
            getCity: function () {
                return city;
            },
        }
    }

    var dataStore = {}
    /**
     * Public Methods/ Factory
     */
    return {
        create: function (firstname, lastname) {
            var contact = new Contact(firstname, lastname);
            dataStore[contact.getUid()] = contact;
            return contact
        },
        update: function (contact) {
            dataStore[contact.getUid()] = contact;
            return contact;
        },
        delete: function (uid) {
            delete dataStore[uid];
        },
        get: function (uid) {
            return Object.values(dataStore).filter(c => c.getUid() === uid);
        },
        getAll: function () {
            return Object.values(dataStore);
        },
        search: function (text) {
            return Object.values(dataStore).filter(c => c.getFirstName().indexOf(text) != -1);
        }
    };
})();

/* 
function isAutobot(transformer) {
  return transformer.team === ‘Autobot’;
}
 
var autobots = transformers.filter(isAutobot);
autobots ==  [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    team: 'Autobot'
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    team: 'Autobot'
  }
]
/
*/
(
    function main() {

        var range = (l, r) => new Array(r - l).fill().map((_, k) => k + l);
        range(1, 5000).forEach(
            function (index) {
                ContactManager.create("First " + index, "Last " + index);
            }
        );


        /**/
        const used = process.memoryUsage();
        for (let key in used) {
            console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }

        var all = ContactManager.getAll();
        var contact = all[Math.floor(Math.random() * all.length)];

        contact.setFirstName("zafar");
        contact = ContactManager.update(contact);
        console.assert(contact.getFirstName() === "zafar", "Updated");
        //ContactManager.delete(cuid);
        var searched = ContactManager.search("Last 2")
        console.log(searched.length);

    }
)();