
/* Write a “person” class to hold all the details.*/

function Person(firstName, lastName, age) {
    var _firstName = firstName;
    var _lastName = lastName;
    var _age = age;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return _firstName },
            set: function (value) { _firstName = value }
        },
        "LastName": {
            get: function () { return _lastName },
            set: function (value) { _lastName = value }
        },
        "Age": {
            get: function () { return _age },
            set: function (value) { _age = value }
        }
    });

    this.getFullName = function () {
        return this.FirstName + " " + this.LastName;
    }

    this.getAge = function () {
        return this.age;
    }
};

var person1 = new Person();
person1.FirstName = "Aniket";
person1.LastName = "Bagul";
person1.age = "23";
alert("Name: " + person1.getFullName());
alert("Age: " + person1.getAge());