const studentList = [];

for (let i = 0; i < 5; i++){
  const student = prompt('Enter a student');
  studentList.push(student);
}

for (let i = 0; i < studentList.length; i++){
  const student = studentList[i];
  alert(student);
}

// Challenge

const challengeList = [];
const challengeQuestion = parseInt(prompt('How many students are in the class?'));

for (let i = 0; i < challengeQuestion; i++) {
    const newName = prompt(`Enter student number ${i+1}'s name:`);
    challengeList.push(newName);
}

for (let i = 0; i < challengeList.length; i++) {
    console.log(challengeList[i]);
}

// ULTRA CHALLENGE

for (let i = 0; i < challengeList.length; i++) {
    if (challengeList[i].includes('a')) {
        console.log(challengeList[i]);
    }
}

