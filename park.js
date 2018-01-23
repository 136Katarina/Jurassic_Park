const Park = function(){
  this.enclosure = [];

}


Park.prototype.enclosureCount = function(){
  return this.enclosure.length;
}

Park.prototype.add = function(dinosaur){
  return this.enclosure.push(dinosaur);
}




// Park.prototype.remove = function(type){
//    var newArr = [];
//   for (dinosaur of this.enclosure) {
//     if(dinosaur.type === type){
//       newArr.push(dinosaur);
//     }
//   }
// }


Park.prototype.remove = function(type){
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type != type);
}


Park.prototype.offspringCount = function(i){
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.number > i);
}

module.exports = Park;
