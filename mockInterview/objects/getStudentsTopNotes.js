function getStudentTopNotes(students) {
  let topNotes = []
	for (let i = 0; i < students.length; i++) {
		if (students[i].notes.length === 0) {
			topNotes.push(0)
		} else {
			let studentNotes = students[i].notes
			let biggestNote = studentNotes[0]
			for (let j = 1; j < studentNotes.length; j++) {
				if (studentNotes[j] > biggestNote) {
					biggestNote = studentNotes[j]
				}
			}
			topNotes.push(biggestNote)
		}
	}
	return topNotes
}