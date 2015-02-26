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

			Topic.find({category: category},function(err, topics){
				
				res.view({title: category.toUpperCase(), urlCategory: category, topics: topics});

			})
		}
		// console.log(category);
		// res.send("Congratulations you get to kick off our " + category + "section." );


	},


	apiResponse: function(req, res) {
		res.json({"response": "no"})
	},

	questionAdded: function(req, res) {
		var topicParams = {subject:req.param('subject'), url:req.param('url'), description:req.param('description'), category: req.param('category'),};
		Topic.create(topicParams).exec(function onCreate(err, topic) {
			if (err) {
				console.error('this was the topic error', err);
				res.status(400);
				res.json({
				 "status": "400",
				 "response": "you fucked up",})
			} else {
				res.status(200);
				res.json({
					"status": "200",
					"response":"your question about " + topic.subject +"was successfully added",
					"subject": topic.subject,
				})
			}
		})
	}
};

