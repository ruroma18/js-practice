'use strict';

class Student {
  constructor(firstName, lastName, sex, university, dateOfApplication, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.university = university;
    this.dateOfApplication = new Date(dateOfApplication);
    this.contacts = { phoneNumber, email };
    this.currentGrade = this.currentGrade;
  }

  get firstName() {
    return this._firstName.trim();
  };

  set firstName(newFirstName) {
    if (typeof (newFirstName) != 'string') {
      throw new Error('Name must be a string!');
    }

    if (newFirstName.trim() === '') {
      throw new Error('First name cannot be empty');
    }
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName.trim();
  };

  set lastName(newLastName) {
    if (typeof (newLastName) != 'string') {
      throw new Error('Name must be a string!');
    }

    if (newLastName.trim() === '') {
      throw new Error('First name cannot be empty');
    };

    this._lastName = newLastName;
  };

  get sex() {
    return this._sex.trim();
  }

  set sex(newSex) {
    if (newSex != 'male' && newSex != 'female') {
      throw new Error('Sex must be male or female');
    }
    this._sex = newSex;
  }

  get university() {
    return this._university.trim();
  }

  set university(newUniversity) {
    if (typeof (newUniversity) != 'string') {
      throw new Error('University must be a string!');
    }

    if (newUniversity.trim() === '') {
      throw new Error('University name cannot be empty');
    }

    this._university = newUniversity;
  }

  get dateOfApplication() {
    return this._dateOfApplication
  }

  set dateOfApplication(newDateOfApplication) {
    const currentYear = new Date().getFullYear();
    if ((newDateOfApplication instanceof Date) != true) {
      throw new Error('Date of application must be a Date!')
    }
    if (newDateOfApplication.getFullYear() < (currentYear - 4)) {
      throw new Error('Cannot be a student');
    }
    if (newDateOfApplication.getFullYear() > (currentYear + 1)) {
      throw new Error('Incorrect date');
    }
    return this._dateOfApplication = newDateOfApplication;
  }

  get contacts() {
    return this._contacts;
  }

  set contacts(newContacts) {
    if (typeof newContacts.phoneNumber != 'number') {
      throw new Error('Phone must be a number');
    }

    if (newContacts.phoneNumber === '') {
      throw new Error('Phone cannot be empty');
    }

    if (typeof newContacts.email != 'string') {
      throw new Error('Email must be a string');
    }

    if (newContacts.email === '') {
      throw new Error('Email cannot be empty');
    }

    this._contacts = newContacts;
  }

  get currentGrade() {
    const currentYear = new Date().getFullYear();
    this.currentGrade = (currentYear + 1) - (this.dateOfApplication).getFullYear();
    return this._currentGrade;
  }

  set currentGrade(newCurrentGrade) {
    this._currentGrade = newCurrentGrade;
  }


  showInf() {
    const fullName = `${this.firstName} ${this.lastName}`;
    const mothAndYear = `${(this.dateOfApplication).toLocaleString('default', { month: 'long', year: 'numeric' })}`
    console.log(`Full Name: ${fullName} 
    Sex: ${this.sex} 
    University: ${this.university} 
    Date of application: ${mothAndYear};
    Phone: ${this.contacts.phoneNumber} 
    Email: ${this.contacts.email}
    Current Grade: ${this.currentGrade}`)
  }

}

class University {
  constructor(universityName, department, faculty, students) {
    this.universityName = universityName;
    this.faculty = faculty;
    this.department = department;
    this.students = students;

  }

  getUniversityName() {
    return this.universityName;
  }

}

const student1 = new Student('User', 'Userenko', 'female', 'ZNU', 'September, 2020', 3809988777, 'user@gmail.com');
const student2 = new Student('User', 'Userenko', 'female', 'ZNU', 'September, 2020', 3809988777, 'user@gmail.com');
const student3 = new Student('User', 'Userenko', 'female', 'ZNU', 'September, 2020', 3809988777, 'user@gmail.com');
const ZNU = new University('ZNU', 'Math', 'Computer Science', [student1, student2, student3]);

const studentCardList = document.getElementById('studentCardList');

const getStudents = ZNU.students.map((student) => genereteStudentCard(student));

studentCardList.append(...getStudents)

function genereteStudentCard(studentObj) {
  const fullName = `${studentObj.firstName} ${studentObj.lastName}`;
  const shortDate = `${(studentObj.dateOfApplication).toLocaleString('default', { month: 'short', year: 'numeric' })}`

  const card = createElement('li', { classNames: ['studentCardWrapper'] });

  const cardArticle = createElement('article', { classNames: ['studentCard'] });

  const cardName = createElement('h2', { classNames: ['studentCardName'] }, fullName)

  const studentInfoList = createElement('ul', {classNames : ['studentInfoList']});

  const studentSex = createElement('li', {}, `Sex: ${studentObj.sex}`);
  
  const studentUniversity = createElement('li', {}, `University: ${studentObj.university}`);

  const studentDateOfApplication = createElement('li', {}, `Date of Application: ${shortDate}`);

  const studentGrade = createElement('li', {}, `Grade: ${studentObj.currentGrade}`);
  
  const studentPhone = createElement('li', {}, `Phone: ${studentObj.contacts.phoneNumber}`);

  const studentEmail = createElement('li', {}, `Email: ${studentObj.contacts.email}`);

  studentInfoList.append(studentSex, studentUniversity, studentDateOfApplication, studentGrade, studentPhone, studentEmail)
  cardArticle.append(cardName, studentInfoList);
  card.append(cardArticle);

  return card;
}
