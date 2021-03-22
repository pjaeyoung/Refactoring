// 리팩토링 전

export class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(newCourses) {
    this._courses = newCourses;
  }
}

export class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

// 리팩터링 후

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get courses() {
    return this._courses.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) {
      fnIfAbsent();
    } else {
      this._courses.splice(index, 1);
    }
  }
}
