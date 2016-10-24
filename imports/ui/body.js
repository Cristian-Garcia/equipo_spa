import { Template } from 'meteor/templating';

import { Questions } from '../api/questions.js';

import './body.html';

Template.body.helpers({
  questions() {
    return Questions.find({});
  },
});
