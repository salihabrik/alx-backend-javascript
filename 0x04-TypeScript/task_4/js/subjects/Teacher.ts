// task_4/js/subjects/Teacher.ts

namespace Subjects {
    // Original Teacher interface
    interface Teacher {
      firstName: string;
      lastName: string;
    }
  
    // Declaration merging to add a new optional attribute
    interface Teacher {
      experienceTeachingC?: number;
    }
  }
  
  export = Subjects;
  