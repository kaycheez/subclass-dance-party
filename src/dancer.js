// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.isRandomDance = false;
  this.isCircleDance = false;
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function(toLoc) {
  var toX = toLoc[0];
  var toY = toLoc[1];
  this.$node.animate({ top: toX, left: toY });
};

Dancer.prototype.circleDance = function(center, time = 0) {
  if (!this.isCircleDance) {
    return;
  }
  time += 0.05;
  var radius = 200;
  console.log(center[0]);
  var xcenter = center[0];
  var ycenter = center[1];
  var newLeft = Math.floor(xcenter + (radius * Math.cos(time)));
  var newTop = Math.floor(ycenter + (radius * Math.sin(time)));
  this.$node.animate({ top: newTop, left: newLeft, }, 2, this.circleDance.bind(this, center, time));
}

Dancer.prototype.randomDance = function () {
  if (!this.isRandomDance) {
    return;
  }

  var newq = this.makeNewPosition();
  var oldq = this.$node.offset();
  var speed = this.calcSpeed([oldq.top, oldq.left], newq);

  this.$node.animate({ top: newq[0], left: newq[1] }, speed, this.randomDance.bind(this));
};

Dancer.prototype.makeNewPosition = function () {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];    
}

Dancer.prototype.calcSpeed = function (prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest/speedModifier);

  return speed;
}