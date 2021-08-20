// You are a poor underpaid programmer working on the backend of Fullstack's infrastructure. Today's a great day, though, because one of the classes is graduating! You've been tasked with writing a function that takes in an object (called studentData, which contains all of the students as keys and an object assigned as its value), a string (called studentName), and an object of key value pairs (called studentGrades, which contains a key referring to the name of the project, and a value referring to the grade the student received). Your function should check to see whether the studentData object contains the student. If no such student exists, return a string 'This student is not enrolled.

// ' If they do exist, however, your function should reassign each of their project's value in  the studentData object to their actual grade from the studentGrades object. 

// Finally, you should check to see that each grade has an average of 70% or higher. If they have a grade that is below 70%, then you should assign their graduationStatus as false, and then return an object that contains all the projects that did not pass 70%. If they have no grades below 70%, return a string called 'graduationStatus: approved'. 

//npm run Elle:grades

const allStudents = {
    'Bob': {
      'grades': {
        'Linkerator': null,
        'Arcade': null,
        'FitnessTrackr Backend': null,
        'FitnessTrackr React': null,
      },
      'graduationStatus': ''
    }, 
    'Bill': {
      'grades': {
        'Linkerator': null,
        'Arcade': null,
        'FitnessTrackr Backend': null,
        'FitnessTrackr React': null,
      },
      'graduationStatus': ''
    },
    'Ralph': {
      'grades': {
        'Linkerator': null,
        'Arcade': null,
        'FitnessTrackr Backend': null,
        'FitnessTrackr React': null,
      },
      'graduationStatus': ''
    }
  }
  
  function didTheyGraduate(studentData, studentName, studentGrades) {
    if (!studentData[studentName]) return 'This student is not enrolled.'
  
    studentData[studentName] = studentGrades;
  
    const failedProjectNames = Object.entries(studentData[studentName]).filter((grade) => {
      return grade[1] < 70;
    }).map((grade) => {
      return grade[0];
    });
    
    return !failedProjectNames.length ? 'graduationStatus: approved' : failedProjectNames
  }
  
  // examples:
  console.log(didTheyGraduate(allStudents, 'Bob', {
    'Linkerator': 80,
    'Arcade': 80,
    'FitnessTrackr Backend': 90,
    'FitnessTrackr React': 100,
  })) // should return 'graduationStatus: approved'
  
  console.log(didTheyGraduate(allStudents, 'Ralph', {
    'Linkerator': 60,
    'Arcade': 70,
    'FitnessTrackr Backend': 65,
    'FitnessTrackr React': 55,
  })) // should return ['Linkerator', 'FitnessTrackr Backend', 'FitnessTrackr React']
  
  console.log(didTheyGraduate(allStudents, 'Jane', {})) // should return 'This student is not enrolled.'