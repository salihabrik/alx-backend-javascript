interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows adding any attribute without specifying the name
}

  // Example of creating a teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Adding an additional attribute
};
// Interface for Directors extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example of creating a director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function to print teachers
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example of using the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass methods
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Class named StudentClass
const StudentClass: StudentConstructor = class {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
};

// Example of using the StudentClass
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John

console.log(teacher3);
