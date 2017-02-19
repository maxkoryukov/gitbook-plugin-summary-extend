"use strict"

module.exports = {
	// Map of hooks
	hooks: {
		"init": require("./patch")
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
}