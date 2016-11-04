import { Meteor } from 'meteor/meteor'
import { Courses } from '/imports/api/courses.js';


Template.search.events({
  'click #btnSearch': function(event){
    event.preventDefault();
    var quarter = $('#Quarter').val();

    //console.log(quarter);
  },
  'change #quarter': function(event){
    var quarter = $(event.target).val();
    console.log(quarter);
    Session.set('quarter', quarter);
  },
});

Template.search.helpers({
  courses: function(){
    return Courses.find({quarter: Session.get('quarter') || 'fall'})
  }
});

Template.search.onCreated(function(){
  Meteor.subscribe('all_courses', Session.get('quarter'));
});
