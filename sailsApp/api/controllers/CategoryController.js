/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	topicList: function(req, res) {
		// var category = param('category');
		var categoryArray = ["angular", "nodejs", "promises", "user tutorials" ];
		var category = req.param("category").toLowerCase();
		if (categoryArray.indexOf(category) > -1) {
			return res.view({title: category.toUpperCase()});
		}
		// console.log(category);
		// res.send("Congratulations you get to kick off our " + category + "section." );


	}
};

