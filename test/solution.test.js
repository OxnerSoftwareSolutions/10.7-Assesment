// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution.js");

describe("partitionStudentsByScore", () => {
	const students = [
		{ name: "Leo Yeon-Joo", score: 8.9 },
		{ name: "Morgan Sutton", score: 7.4 },
		{ name: "Natalee Vargas", score: 9.2 },
	];
	it("Should return two arrays of students", () => {
		const expected = [
			[{ name: "Morgan Sutton", score: 7.4 }],
			[
				{ name: "Leo Yeon-Joo", score: 8.9 },
				{ name: "Natalee Vargas", score: 9.2 },
			],
		];
		expect(partitionStudentsByScore(students, 8)).to.eql(expected);
	});
	it("Should return two arrays if students list or score invalid", () => {
		expect(partitionStudentsByScore([], 0)).to.eql([[], []]);
	});
	it("Should return an array full of students if the student is under the score they will be in a group and the students above the score will be in another array", () => {
		expect(partitionStudentsByScore(students, 10)).to.eql([students, []]);
	});
});
