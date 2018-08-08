describe('Dance Moves', function() {

  var hankHillDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hankHillDancer = new HankHillDancer(10, 20, timeBetweenSteps);
  });

  describe('randomDance', function() {
    it('should randomly move Dancer images', function() {
      sinon.spy(hankHillDancer, 'randomDance');
      expect(hankHillDancer.randomDance.callCount).to.be.equal(0);
      hankHillDancer.isRandomDance = true;
      hankHillDancer.randomDance();
      expect(hankHillDancer.randomDance.callCount).to.be.equal(1);
      expect(hankHillDancer.isRandomDance).to.be.equal(true);
      clock.tick(10000);
      expect(hankHillDancer.randomDance.callCount).to.be.equal(2);
    });

    it('should stop dancing of Dancer images when prompt to stop', function() {
      sinon.spy(hankHillDancer, 'randomDance');
      expect(hankHillDancer.randomDance.callCount).to.be.equal(0);
      hankHillDancer.isRandomDance = true;
      hankHillDancer.randomDance();
      expect(hankHillDancer.randomDance.callCount).to.be.equal(1);
      expect(hankHillDancer.isRandomDance).to.be.equal(true);
      hankHillDancer.isRandomDance = false;
      expect(hankHillDancer.isRandomDance).to.be.equal(false);
      clock.tick(10000);
      expect(hankHillDancer.randomDance.callCount).to.be.equal(1);
    });
  });

  describe('move', function() {
    it('should line up Dancer images', function() {
      sinon.spy(hankHillDancer, 'move');

      var top = $('body').height() / 2;
      var left = $('body').width() / 2;
      if (hankHillDancer.$node.hasClass('jake-dancer')) {
        hankHillDancer.move([top + 59, left]);
      } else {
        hankHillDancer.move([top, left]);
      }

      expect(hankHillDancer.move.callCount).to.be.equal(1);
    });
  });

});
