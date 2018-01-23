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
})
