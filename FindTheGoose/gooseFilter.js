function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let noGeese = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
        noGeese.push(birds[i]);
    }
  } 
  return noGeese;
  };

module.exports = {gooseFilter}