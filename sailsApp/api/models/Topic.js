/**
* Topic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  adapter: 'sails-disk',
  connection: 'localDiskDb',
  tableName: 'topic',
  attributes: {

  	id: {
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  		columnName: 'id'

  	},

  	subject: {
  		type: 'string',
  		columnName: 'subject',
  		required: true,
  		notEmpty: true
  	},

  	userWhoAaked: {
  		type: 'string',
  		columnName: 'userWhoAaked',

  	},

  	url: {
  		type: 'string',
  		columnName: 'url',
  		required: true,
  		url: true,
  		notEmpty: true
  	},

  	description: {
  		type: 'string',
  		columnName: 'description'
  	},

  	category: {
  		type: "string",
  		required: true
  	}


  }
};

