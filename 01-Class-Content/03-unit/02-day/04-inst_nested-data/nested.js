const studentObjList = [
  {
    name: 'Jim',
    major: 'History'
  },
  {
    name: 'Marcia',
    major: 'Computer Science'
  },
  {
    name: 'Ifeoma',
    major: 'Journalism'
  },
  {
    name: 'Elliott',
    major: 'Pre-med'
  },
  {
    name: 'Misha',
    major: 'Environmental Science'
  }
];

// console log the major of the student at index 2
// logs "Journalism"
console.log(studentObjList[2].major);

const instructor = {
  name: 'Diane',
  subjects: ['Literature', 'Creative Writing', 'English Language'],
  yearsExperience: 31,
  school: {
    name: 'Westover High',
    mascot: 'Patriots',
    founded: '1973-08-25'
  }
};

// console log the 0 index of the instructor's subjects
console.log(instructor.subjects[0]);

// console log the name of the instructor's school
console.log(instructor.school.name);
