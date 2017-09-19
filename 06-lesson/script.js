// First, a note on some otherwised unexplained advanced features in this
// lesson, you may notice that blocks of code are wrapped inside something that
// looks like this:
//
//     (function () {
//         ...
//     )();
//
// This is an example of a closure. It is also an example of an anonymous, self
// executing function.
//
// It's not important to really know what's going on here except to note that
// by doing this we can declare the same variables over and over again and not
// have any conflicts because each closure defines a completely independant
// "scope" from any of the others.
//
// But for now, don't worry about it; consider it magic and we'll cover it
// more in future lessons.


// Feel free to run this code by loading the index.html file. Or, if you are
// feeling plucky, go ahead and try loading it in `nodeJS` -- if you have it
// installed simply type `$ node script.js`.


// In JavaScript, an Object is one of the most basic parts of the language.
// An Object is an association of properties using a key/value pairing. If
// you are familiar with the concept of a `dictionary` or `hash` in other
// languages, a JavaScript object is very similar.

// This is a fairly basic Object.
(function () {
    var kitty = new Object();

    // You access Object properties by using the dot `.` operator like this:
    //
    //    objectName.propertyName
    //
    // You can use this syntax to either get or set the property.

    kitty.name = 'Mr Snuggles';
    kitty.age = 2;
    kitty.likes = [
        'Being pet',
        'Eating food',
    ];

    console.log('My kitten\'s name is ' + kitty.name);

    // You can also use a dictionary-like syntax to access these properties:
    //
    //     objectName['propertyName']

    kitty['my-owner'] = 'Evan';
    console.log('my kitten\'s owner is ' + kitty['my-owner']);

    // Note that this is the only way to get a property with a space or a dash
    // in the property name since the following syntax is invalid:
    //
    //     objectName.proprty-name
    //     objectName.property name

    // By convention, unless you need to use the dictionary syntax to access
    // the property (because the property name has a space or a dash in it as
    // above, for example) it is better to use the dot `.` operator.
})();

// You can also add functions to Objects which you can then access and call
// with the same objectName.propertyName syntax as before.
(function () {
    var kitty = Object();
    kitty.talk = function () {
        console.log('meow');
    };

    kitty.talk();
    // >> console: meow
})();

// Objects can also be created by passing arguments directly to the Object
// constructor itself.
//
// When you use this syntax you wrap the attributes inside curly braces and use
// the colon `:` as the assignment operator:
//
//     var objectName = Object({
//         propertyName: value,
//     })
//
(function () {
    var kitty = new Object({
        name: 'Mr Snuggles',
        age: 2,
        likes: [
            'Being pet',
            'Eating food',
        ],
        talk: function () {
            console.log('meow');
        },
    });

    console.log('My kitten\'s name is ' + kitty.name);
    kitty.talk();
})();

// It is not common to see someone use the `Object` constructor directly.
// Instead, it is much more common to use what is called an 'object
// initializer'.
//
// The object initializer is identical to the Object notation above except you
// drop the `Object` call and just use the curly braces.
//
//     var objectName = {
//         propertyName: value,
//     }
//
(function () {
    var kitty = {
        name: 'Mr Snuggles',
        age: 2,
        likes: [
            'Being pet',
            'Eating food',
        ],
        talk: function () {
            console.log('meow');
        },
    };

    console.log('My kitten\'s name is ' + kitty.name);
    kitty.talk();
})();

// While the above may look a LOT like a python (or ruby, java, etc)
// dictionary-like declaration it's important to note that it isn't *just* a
// dictionary like object. It's a JavaScript Object.
//
// JavaScript Objects come with more substance than your average dictionary
// mapping.
(function () {
    var kitty = {
        name: 'Mr Snuggles',
        age: 2,
        likes: [
            'Being pet',
            'Eating food',
        ],
        talk: function () {
            console.log('meow');
        },
    };

    // JavaScript objects have some built in properties that are very useful.

    // `hasOwnProperty` is a very useful way to tell if the Object has a
    // specific property
    console.log('Does my kitty have a name?');
    if (kitty.hasOwnProperty('name')) {
        console.log('Yes it does!');
    } else {
        console.log('No it does not');
    }
    // >> console: 'Yes it does!'

    // Objects also all have a `toString` method that takes the object and
    // returns a string (text) representation of it. By default it's pretty
    // basic though.
    console.log('My kitty object is: ' + kitty.toString());
    // >> console: 'My kitty object is: [object Object]
})();

// You can also create Objects by using a Constructor Function.
//
// This is much more like how a classic Object Oriented Programming Language
// would do things.
//
// First, a quick explanation of the difference between an Object and an Object
// Constructor.
//
// An Object is the thing itself. A house is an object, it has substance and it
// exists. In JavaScript, the following would be a 'house' Object becuase it is
// called 'house' and you can manipulate the properties of it directly (i.e. it
// exists).
//
//     var house = {
//         age: 20,
//         address: '123 Fake Street',
//     }
//
// However, the thing that builds the house is not the house itself. Who builds
// houses? Construction workers.
//
// In JavaScript, you can create your own construction workers to creat
// objects. They are certainly *related* to the object seeing as they built it,
// but they are not the object itself.
//
// This can be a little confusing since it is common practice to name the
// constructor the same thing as what you'd generally name the object but with
// a capital first letter:

(function () {
    // this is a 'house' constructor
    var House = function () {
        this.age = 20;
        this.address = '123 Fake Street';
    };

    console.log('My house constructor is:');
    console.log(House);
    // >> console: function () {
    //                 this.age = 20;
    //                 this.address = '123 Fake Street';
    //             }

    // If you want to create an Object "instance" of the house, you use the
    // `new` keyword:
    var house = new House();

    console.log('My house is:');
    console.log(house);
    // >> House {age: 20, address: "123 Fake Street"}

    // Notice that the output labels this as 'House { ... }' not,
    // 'Object { ...  }', this is because the constructor is named House.
    //
    // You may now have guessed that `Object()` is also a constructor, it's the
    // most basic Object constructor.
})();

// Just like the Object constructor, you can pass arguments (attributes) to the
// House constructor and do things with them.
(function () {
    var House = function (attrs) {
        this.age = attrs.age;
        this.address = attrs.address;

        if (this.age > 100) {
            this.isOld = true;
        }
    };

    // When you pass arguments to the constructor you can do something you
    // couldn't do with the object initializer syntax, you can manipulate the
    // attributes or take action on them before assigning them to the
    // constructed object. That is being done above when we check if `age` is
    // greater than 100 before assigning a value to a property called `isOld`.

    var house = new House({
        age: 150,
        address: '123 Fake Street',
    });

    if (house.isOld) {
        console.log('My house is old!');
    }
    // >> console: 'My house is old!'
})();

// You can use Object constructors to construct entire slews of the same type
// of Object. This is the power of an Object Constructor as it allows you to
// have one central place where all of the same type of objects are created.
(function () {
    var House = function (attrs) {
        this.age = attrs.age;
        this.address = attrs.address;

        if (this.age > 100) {
            this.isOld = true;
        }
    };

    var newlyBuiltHouse = new House({
        age: 10,
        address: '123 Fake Street',
    });

    var oldHouse = new House({
        age: 101,
        address: '726 Evergreen Terrace',
    });

    console.log(newlyBuiltHouse.isOld);
    // >> console: undefined

    console.log(oldHouse.isOld);
    // >> console: true
})();

// You can add functions to an object created with a constructor just like
// properties.
(function () {
    var House = function (attrs) {
        this.age = attrs.age;
        this.address = attrs.address;

        // Instead of having a property with a value for `isOld`, let's make it
        // a function.
        this.isOld = function () {
            return this.age > 100;
        }
    };

    var house = new House({ age: 10, address: '123 Fake Street' });
    console.log(house.isOld());
    // >> console: false
})();

// You can do some fun stuff with Objects and Object Constructors
(function () {
    var Cat = function (attrs) {
        this.name = attrs.name;
        this.age = attrs.age;

        this.friends = [];

        // make a new friend!
        this.addFriend = function (friend) {
            this.friends.push(friend);
        }

        // say your name and talk
        this.talk = function (words) {
            // if there are no words specified, just say what comes natural
            words = (words || 'Meow');
            console.log(this.name + ' says: ' + words);
        }

        // talk to another cat
        this.talkToCat = function (cat) {
            if (this.friends.indexOf(cat) !== -1) {
                // if we are friends with this cat
                this.talk('Meow to ' + cat.name);
            } else if (cat === this) {
                // we like ourselves a lot
                this.talk('Purrrr to ' + cat.name);
            } else {
                // we do not like this cat
                this.talk('Hsssss to ' + cat.name);
            }
        }
    };

    var mrSnuggles = new Cat({
        name: 'Mr Snuggles',
        age: 2,
    });

    var msFluffy = new Cat({
        name: 'Ms Fluffy',
        age: 4,
    });

    var strayCat = new Cat({
        name: 'Stray',
        age: 3,
    });

    // They like to talk
    mrSnuggles.talk();
    msFluffy.talk();
    strayCat.talk();

    // Let's make our cats friends
    mrSnuggles.addFriend(msFluffy);
    msFluffy.addFriend(mrSnuggles);

    // now that they're friends, let's have them talk to eachother!
    mrSnuggles.talkToCat(msFluffy);
    msFluffy.talkToCat(mrSnuggles);

    // Let's have the cats spend some 'me' time.
    mrSnuggles.talkToCat(mrSnuggles);
    msFluffy.talkToCat(msFluffy);
    strayCat.talkToCat(strayCat);

    // Oh no! They do not like the stray!
    mrSnuggles.talkToCat(strayCat);
    msFluffy.talkToCat(strayCat);

    // and he isn't a fan of theirs either!
    strayCat.talkToCat(mrSnuggles);
    strayCat.talkToCat(msFluffy);
})();


