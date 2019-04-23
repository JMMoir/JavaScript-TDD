const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
}

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDino = function(dinosaur) {
  this.dinosaurs.pop()
};

Park.prototype.mostPopularDino = function(){
  let mostpopular = this.dinosaurs[0];
  for (let dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > mostpopular.guestsAttractedPerDay){
      mostpopular = dino;
    }
  }
  return mostpopular
};

Park.prototype.findBySpecies = function(species){
  let bySpecies = [];
  for (let dino of this.dinosaurs){
    if (dino.species == species){
      bySpecies.push(dino);
    }
  }
  return bySpecies;
};


Park.prototype.vistorsPerDay = function(){
  let total = 0;
  for(let dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay
  }
  return total;
}

Park.prototype.vistorsPerYear = function(){
  let total = 0;
  for(let dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay
  }
  total *= 365;
  return total;
}

Park.prototype.annualRevenue = function(){
  let total = 0;
  for(let dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay
  }
  total *= 365;
  total *= this.ticketPrice;
  return total;
}

Park.prototype.removeBySpecies = function(species){
  let temp = [];
  for (let dino of this.dinosaurs){
    if (dino.species !== species){
      temp.push(dino);
    }
  }
  this.dinosaurs = temp;
};

// Park.prototype.diets = function(){
//
// };



module.exports = Park;
