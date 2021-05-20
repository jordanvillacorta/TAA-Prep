var canConstruct = function(ransomNote, magazine) {
  let cutOutMagazine = magazine.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    let currentLetter = ransomNote[i]
    let currentLetterIndex = cutOutMagazine.indexOf(currentLetter)
    if (!cutOutMagazine.includes(currentLetter)) {
      return false
    }
    cutOutMagazine.splice(currentLetterIndex, 1, '')
  }
  return true
}