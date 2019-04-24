const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  let dinosaur2;
  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Dipoldocus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('Dipoldocus', 'herbivore', 20)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur)
    park.removeDino()
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.mostPopularDino();
    assert.deepStrictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.findBySpecies('Dipoldocus');
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  });

  it('should be able to calculate number of vistors per day', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.vistorsPerDay();
    assert.strictEqual(actual, 100)
  });

  it('should be able to calculate number of vistors per year', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.vistorsPerYear();
    assert.strictEqual(actual, 36500)
  });

  it('should be able to calculate total revenue from ticket sales annualy', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.annualRevenue()
    assert.strictEqual(actual, 730000)
  });





// Extensions
  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dinosaur)
    park.addDino(dinosaur2)
    park.addDino(dinosaur2)
    park.removeBySpecies('t-rex')
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to return an object with diet and number of dinosaurs with each diet', function(){
    park.addDino(dinosaur)
    park.addDino(dinosaur2)
    park.addDino(dinosaur2)
    const actual = park.diets()
    assert.deepStrictEqual(actual, { 'carnivore': 1, 'herbivore': 2 })
  })

});
