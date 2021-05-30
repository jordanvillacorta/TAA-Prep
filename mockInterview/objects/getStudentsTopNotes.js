function getStudentTopNotes(students) {
  let topNotes = []
	for (let i = 0; i < students.length; i++) {
		if (students[i].notes.length === 0) {
			topNotes.push(0)
		} else {
			let studentsNotes = students[i].notes
			let biggestNumber = studentsNotes[0]
			for (let j = 1; j < studentsNotes.length; j++) {
				if (studentsNotes[j] > biggestNumber) {
					biggestNumber = studentsNotes[j]
				}
			}
			topNotes.push(biggestNumber)
		}
	}
	return topNotes
}