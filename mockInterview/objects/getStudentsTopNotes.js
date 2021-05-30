function getStudentTopNotes(students) {
  let result = []
	if (students.length === 0) {
		return result
	}
	for (let i = 0; i < students.length; i++) {
    if (students[i].notes.length === 0) {
      result.push(0)
    } else {
		let notes = students[i].notes
    let max = notes[0]
    for (let j = 1; j < notes.length; j++) {
      if (notes[j] > max) {
        max = notes[j]
      } 
    }
    result.push(max)
		}
  }
  return result
}