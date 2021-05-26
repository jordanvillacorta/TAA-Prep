var canConstruct = function(ransomNote, magazine) {
  let cutOutMagazineLetters = magazine.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    if (!cutOutMagazineLetters.includes(ransomNote[i])) {
      return false
    }
  cutOutMagazineLetters.splice(cutOutMagazineLetters.indexOf(ransomNote[i]), 1, '')
  }
  return true
}