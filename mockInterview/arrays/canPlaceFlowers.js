var canPlaceFlowers = function(flowerbed, n) {
  let emptyCounter = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
      flowerbed[i] = 1
      emptyCounter++
    }
  }
  return emptyCounter >= n
};