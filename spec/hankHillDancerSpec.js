describe('hankHillDancer', function() {

  var hankHillDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hankHillDancer = new HankHillDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hankHillDancer.$node).to.be.an.instanceof(jQuery);
  });
});
