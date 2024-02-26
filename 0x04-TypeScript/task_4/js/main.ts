
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import Teacher = require('./subjects/Teacher');

// Create and export constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a constant cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// For Cpp subject
cpp.setTeacher(cTeacher);
console.log('Cpp:');
console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John

// For Java subject
java.setTeacher(cTeacher);
console.log('\nJava:');
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Output: No available teacher

// For React subject
react.setTeacher(cTeacher);
console.log('\nReact:');
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Output: No available teacher
