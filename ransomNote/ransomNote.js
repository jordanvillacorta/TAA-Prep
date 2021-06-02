var canConstruct = function(ransomNote, magazine) {
  let lettersFromMagazine = magazine.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    if (!lettersFromMagazine.includes(ransomNote[i])) {
      return false 
    }
    lettersFromMagazine.splice(lettersFromMagazine.indexOf(ransomNote[i]), 1, '')
  }
  return true
}