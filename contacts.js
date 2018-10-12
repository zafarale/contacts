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
    var Contact = function (firstname, lastname, companyname, cityname, countryname, emailid) {
        
        var firstname = firstname;
        var lastname = lastname;
        var company = companyname;
        var city = cityname;
        var country = countryname;
        var email = emailid;
        var id;

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
            setCompany: function (companyname) {
                company = companyname;
            },
            getCompany: function () {
                return company;
            },
            setCountry: function (countryname) {
                country = countryname;
            },
            getCountry: function () {
                return country;
            }
        }
    }

    var dataStore = {}
    /**
     * Public Methods/ Factory
     */
    return {
        create: function (firstname, lastname, companyname, cityname, countryname, emailid) {
            
            var contact = new Contact(firstname, lastname, companyname, cityname, countryname, emailid);
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
            text = text.toLowerCase();
            return Object.values(dataStore).filter(c => (c.getFirstName().toLowerCase().indexOf(text) != -1) || (c.getLastName().toLowerCase().indexOf(text)!= -1));
        }
    };
})();

(
    function main() {

        var range = (l, r) => new Array(r).fill().map((_, k) => k + l);
        range(1, 5).forEach(
            function (index) {

                ContactManager.create("First " + index, "Last " + index,
                    "company " + index, "city " + index, "country " + index, "email" + index + "@domain.com");
            }
        );


        /**/
        // const used = process.memoryUsage();
        //for (let key in used) {
        //   console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        //}


        //contact.setFirstName("zafar");
        //contact = ContactManager.update(contact);
        //console.assert(contact.getFirstName() === "zafar", "Updated");
        //ContactManager.delete(cuid);
        //var searched = ContactManager.search("Last 2")
        //console.log(searched.length);

    }
)();