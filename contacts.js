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
        var uid = createuid();

        return {
            getUid: function () {
                return uid;
            },
            getFirstName: function () {
                return firstname;
            },
            setFirstName: function (firstname) {},
            getLastName: function () {
                return lastname;
            },
            setLastName: function (lastname) {},

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
        update: function () {},
        delete: function () {},
        get: function () {},
        getAll: function () {
            return Object.values(dataStore);
        },
        search: function () {}
    };
})();

(
    function main() {

        var range = (l, r) => new Array(r - l).fill().map((_, k) => k + l);
        range(1, 50000).forEach(
            function (index) {
                ContactManager.create("First " + index, "Last " + index);
            }
        );


        /*
        const used = process.memoryUsage();
        for (let key in used) {
            console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }
        */
    }
)();