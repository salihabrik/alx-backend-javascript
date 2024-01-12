interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface interface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome() {
      return 'Working from home';
    }
  
    getCoffeeBreak() {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks() {
      return 'Getting to director tasks';
    }
  }
  
  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome() {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
  
    workTeacherTasks() {
      return 'Getting to work';
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Testing createEmployee function
  console.log(createEmployee(200)); // Output: Teacher
  console.log(createEmployee(1000)); // Output: Director
  console.log(createEmployee('$500')); // Output: Director

// Function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function executeWork
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // Testing executeWork function
  console.log(executeWork(createEmployee(200))); // Output: Getting to work
  console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks