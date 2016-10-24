Template.search.events({
  'click #btnSearch': function(event){
    event.preventDefault();

    var quarter = $('#Quarter').val();

    console.log(quarter);
  },
});
