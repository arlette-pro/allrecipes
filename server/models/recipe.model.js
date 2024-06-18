const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "you must enter a recipe name"],
		ninLength: [3, "recipe namemust be atleast 3 characters"],
	},
	description: {
		type: String,
		required: [true, "you must enter a recipe name"],
		ninLength: [3, "recipe namemust be atleast 3 characters"],
	},
	instructions: {
		type: String,
		required: [true, "you must enter a recipe name"],
		ninLength: [3, "recipe namemust be atleast 3 characters"],
	},
    cookTime:{
        type: Number,
        required: [true, "you must enter cooktime, using minutes"]
    }
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;