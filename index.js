"use strict"

module.exports = {
	// Map of hooks
	hooks: {
		"init": function(a, b, c) {
			console.log("PLUGIN ========================================")
			console.log(a, b, c)

			console.log(
				a,
				typeof a,
				a.toString(),
				a.constructor
			)
			return a
		}
	},

	// Map of new blocks
	blocks: {

		tag1: {
            process: function(block, b, c, d) {
            	console.log("***************************************", block,b,c,d)
                return "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Hello "+block.body+", How are you?";
            }
        }
	},

	// Map of new filters
	filters: {}
}
