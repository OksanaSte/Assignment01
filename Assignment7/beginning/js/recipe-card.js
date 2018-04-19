function Recipe(title, servings, ingredients) {
    "use strict";
    if (typeof title !== "string") {
        return console.log("Title should be a string.");
    };
    if (typeof servings !== "number") {
        return console.log("Servings should be a number.");
    };
    if (Array.isArray(ingredients) == 0) {
        return console.log("Ingredients should be an array.");
    };
    this.show = function() {
        console.log(title + "\r\n" + "Servings: " + servings + "\r\n" + "Ingredients:\r\n");
        for (var i = 0; i < ingredients.length; i++) {
            console.log("- " + ingredients[i]);
        }
    }  
};
var myRecipe = new Recipe("Guacamole", 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);
myRecipe.show();



