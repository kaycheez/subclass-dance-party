var JakeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img class="jake-dancer" src="jake-wiggle.gif" />');
  this.setPosition(top, left);
};

JakeDancer.prototype = Object.create(Dancer.prototype);
JakeDancer.prototype.constructor = JakeDancer;

// HankHillDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };
