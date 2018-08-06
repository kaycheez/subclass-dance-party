var HankHillDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img class="hank-dancer" src="hank-hill.gif" />');
  this.setPosition(top, left);
};

HankHillDancer.prototype = Object.create(Dancer.prototype);
HankHillDancer.prototype.constructor = HankHillDancer;

// HankHillDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };
