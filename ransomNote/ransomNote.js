var canConstruct = function(ransomNote, magazine) {
  let magazineLetters = magazine.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineLetters.includes(ransomNote[i])) {
      return false
    }
    magazineLetters.splice(magazineLetters.indexOf(ransomNote[i]), 1, '')
  }
  return true
}