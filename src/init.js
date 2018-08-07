$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    var dancer = new dancerMakerFunction(
      top < 32 ? 32 : top,
      left,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('#line-dance').on('click', function(event) {
    var top = $('body').height() / 2;
    var left = $('body').width() / window.dancers.length;
    window.dancers.forEach(function(dancer, index) {
      if (dancer.$node.hasClass('jake-dancer')) {
        dancer.move([top + 59, left * index]);
      } else {
        dancer.move([top, left * index]);
      }
    });
  });

});
