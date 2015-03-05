/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  adapter: 'sail-disk',
  connection: 'localDiskDb',
  tableName: 'answers',
  attributes: {

  	id: {
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  		columnName: 'id',
      autoIncrement: true

  	},
  	topic: {
  		model: 'topic'
  	},

  	answerText: {
  		type: 'string',
  		columnName: 'answerText',
  		required: true
  	},

  	// linkCol: {
  	// 	type: 'string',
  	// 	columnName: 'linkCol'
  	// }


  }
  
};

