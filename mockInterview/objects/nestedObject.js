function getObject(listOfStudents) {
	let newListOfStudents = []
    // console.log(listOfStudents)
    for (let id in listOfStudents) {
			let currentStudent = listOfStudents[id]
			newListOfStudents.push(currentStudent)
		}
	let finalList = []
	for (let i = 0; i < newListOfStudents.length; i++) {
		if (newListOfStudents[i].marks === newListOfStudents[i + 1].marks) {
			finalList.push(findWhichStudentHasHigherAge(newListOfStudents[i], newListOfStudents[i + 1]))
		}
		finalList.push(newListOfStudents[i])
	}
	return finalList
}

function findIfStudentWithSameMarks(passedStudent, newStudentList) {
    let higherAgeUniqueStudent = ''
    
    return higherAgeUniqueStudent
}
    
function findWhichStudentHasHigherAge(student1, student2) {
    if (student1.age >= student2.age) {
        return student1
    }
    return student2
}