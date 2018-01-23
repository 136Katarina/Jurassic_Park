const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');


describe('park', function(){
  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Velociraptor", 6);
    dinosaur4 = new Dinosaur("Triceratops", 1);
  });

it('enclosure should start empty',function(){
  assert.strictEqual(park.enclosureCount(), 0);
})

it('should add a dinosaur', function(){
  assert.strictEqual(park.add(),1);
})

it('should remove a dinosaur', function(){
  park.add(dinosaur2);
  park.add(dinosaur3);
  park.add(dinosaur4);
  park.remove("Velociraptor");
  assert.strictEqual(park.enclosure.length, 1 )
})


it('should get dinosaurs with offspring count >2', function(){
  park.add(dinosaur2);
  park.add(dinosaur3);
  park.add(dinosaur4);
  park.add(dinosaur1);
  park.offspringCount(2)
  assert.strictEqual(park.enclosure.length, 3)
})

})
