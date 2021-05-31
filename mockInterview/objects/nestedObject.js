function getObject(listOfStudents) {
	//console.log(listOfStudents)
	let uniqueStudentMarksList = {};
	for (const id in listOfStudents) {
		let arrayOfStudentList = Object.entries(listOfStudents)
		for (let i = 0; i < arrayOfStudentList.length; i++) {
			let currentStudent = arrayOfStudentList[1]
			console.log(currentStudent)
			findIfStudentWithSameMarks(currentStudent, uniqueStudentMarksList)
		}
	}
	// return findIfStudentWithSameMarks(currentStudent, uniqueStudentMarksList)
}

function findIfStudentWithSameMarks(passedStudent, newStudentList) {
	let higherAgeUniqueStudent = ''
	//console.log(passedStudent.marks, newStudentList)
	//if (parseInt(checkedStudent.marks) !== parseInt(passedStudent.marks)) {
		//higherAgeUniqueStudent = findOlderStudent(passedStudent, checkedStudent)
	//}
	//return higherAgeUniqueStudent
}
    
function findOlderStudent(student1, student2) {
	if (student1.age >= student2.age) {
			return student1
	}
	return student2
}