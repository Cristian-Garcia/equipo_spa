import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Courses } from '/imports/api/courses.js';

Meteor.publish('all_courses', function(quarter){
  return Courses.find({
    quarter: quarter || 'fall'
  });
});
