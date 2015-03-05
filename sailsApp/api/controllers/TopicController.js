/**
 * TopicController
 *
 * @description :: Server-side logic for managing Topics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show: function(req, res) {
		var question = req.param('topic');

		topic = Topic
			.findOne({id:question})
			.populate('answers')
			.exec(function onFind(err, topic) {
				if (err) {
					console.error(err);
					return;
				}
				var viewData = {
					title: topic.subject,
					description: topic.description,
					answers: topic.answers,
					topic: question,
					category: topic.category
				};
				res.view(viewData)

		})
	},

	create: function(req, res) {
		// var currentURl = document.URL;
		// var cUrlArray = currentURl.split('/')
		// var currentQuestionID = parseInt(cUrlArray[4]);

		var answerParams = {answerText: req.param('answer'), topic: req.param('topic')};
		console.log(answerParams);
		Answer.create(answerParams).exec(function onCreate(err, answer) {
			if (err) {
				console.error('Something went wrong topic couldnt be added', err);
				res.status(400);
				res.json({
					'status':'400',
					'response': 'you fucked up',
				})
			} else {
				console.log('ANSWER', answer);
				res.status(200);
				// res.json({
				// 	'status': '200',
				// 	'response': 'your answer was added successfully',
				// 	'answer':answer.answerText,
				// 	'id':answer.id,
				// 	'topic':answer.topic,
				// })
				var url = req.param('category') + "/" + answer.topic + "/show";
				console.log("home made url :",url);
				res.redirect(url)
			}
		})

	}
};

