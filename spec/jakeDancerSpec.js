describe('jakeDancer', function() {

  var jakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jakeDancer = new JakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jakeDancer.$node).to.be.an.instanceof(jQuery);
  });
});
