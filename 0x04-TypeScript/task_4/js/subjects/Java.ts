// task_4/js/subjects/Java.ts

import Subject = require('./Subject');
import Teacher = require('./Teacher');

namespace Subjects {
  // Java class extending from Subject
  class Java extends Subject.Subject {
    // Method getRequirements
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method getAvailableTeacher
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  export { Java };
}
