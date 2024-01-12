// task_4/js/subjects/Subject.ts

import Teacher = require('./Teacher');

namespace Subjects {
  // Subject class
  class Subject {
    teacher: Teacher.Teacher;

    // Setter method setTeacher
    setTeacher(teacher: Teacher.Teacher): void {
      this.teacher = teacher;
    }
  }

  export { Subject };
}
