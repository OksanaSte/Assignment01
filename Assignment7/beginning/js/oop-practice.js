// 1
// Named Class
function Cat() {};
// Anonymous Class
var Dog = function() {};

// 2
var siberian = new Cat();
var shiTzu = new Dog();

// 3
function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}
var theAnimal = new Animal();
window.console.log(theAnimal.constructor());

// 4
function Animal(text) {
    "use strict";
    window.console.log(text);
}
var theAnimal = new Animal("The Animal has been created");

// 5
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var myAnimal = new Animal("dog", "shiTzu", "Oreo", "not very high", "average");

// 6
function Animal(type, breed, color, height, length) {
    "use strict";
    this.properties = {
        'type': type,
        'breed': breed,
        'color': color,
        'height': height,
        'length': length
    }
    for (property in this.properties) {
        "use strict";
        window.console.log(property, ":", this.properties[property]);
    }
}
var myAnimal = new Animal("dog", "shiTzu", "Oreo", "not very high", "average");

// 7
function Animal(type, breed, color, height, length) {
    "use strict";
    this.properties = {
        'type': type,
        'breed': breed,
        'color': color,
        'height': height,
        'length': length
    };
    this.speak = function () {
        if (this.properties['type'] == 'dog') {
            window.console.log("The " + this.properties['color'] + " dog is barking!");
        } else if (this.properties['type'] == 'cat') {
            window.console.log("The " + this.properties['color'] + " cat is meowing!");
        }
    };
}
var myDog = new Animal("dog", "shiTzu", "Oreo", "not very high", "average");
var myCat = new Animal("cat", "siberian", "black & white", "not very high", "average");

// 8
function Animal(type, breed, color, height, length) {
    "use strict";
    var properties = {
        'type': type,
        'breed': breed,
        'color': color,
        'height': height,
        'length': length
    }
    var checkType = function () {
        if (properties['type'] == 'dog') {
            return 'dog';
        }
        return 'cat';
    };
    this.speak = function () {
        var type = checkType();
        window.console.log("The " + type + " has made a noise!");
    };
}
var myDog = new Animal("dog", "shiTzu", "Oreo", "not very high", "average");
var myCat = new Animal("cat", "siberian", "black & white", "not very high", "average");

// 9
String.prototype.findWords = function(word) {
    "use strict";
    var words = this.split(' ');
    var counter = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] == word) {
            counter += 1;
        }
    }
    alert('The word ' + word + ' has been found ' + counter + ' times');
}
var message = "lorem ipsum dolor sit amet, amet sit dolor ipsum lorem";
window.console.log(message.findWords('sit'));