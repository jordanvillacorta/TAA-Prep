var canPlaceFlowers = function(flowerbed, n) {
  let counter = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      counter++
    }
  }
  if (counter % n === 0) {
    return true
  }
  return false
};