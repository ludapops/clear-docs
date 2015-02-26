/**
 * TopicController
 *
 * @description :: Server-side logic for managing Topics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show: function(req, res) {
		question = req.param('topic').toLowerCase();
		return res.view({title: question.toUpperCase()})
	}
};

