// task_4/js/subjects/React.ts

import Subject = require('./Subject');
import Teacher = require('./Teacher');

namespace Subjects {
  // React class extending from Subject
  class React extends Subject.Subject {
    // Method getRequirements
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method getAvailableTeacher
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  export { React };
}
