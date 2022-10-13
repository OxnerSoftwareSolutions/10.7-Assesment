/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/
const students = [
	{ name: "Leo Yeon-Joo", score: 8.9 },
	{ name: "Morgan Sutton", score: 7.4 },
	{ name: "Natalee Vargas", score: 9.2 },
];

function partitionStudentsByScore(students, score) {
	let result = [(underScore = []), (aboveScore = [])];
	if (!students || !score) {
		return result;
	}
	const sort = students.forEach((student) => {
		student.score <= score
			? underScore.push(student)
			: aboveScore.push(student);
	});
	return result;
}
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(partitionStudentsByScore(students, 8));
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

module.exports = partitionStudentsByScore;
