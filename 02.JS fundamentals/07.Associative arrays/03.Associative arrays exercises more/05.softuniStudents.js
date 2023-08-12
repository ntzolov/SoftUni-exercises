function softuniStudents(input) {
  const courses = {};

  for (const line of input) {
    if (line.includes(': ')) {
      let [course, seats] = line.split(': ');
      seats = +seats;
      if (!courses.hasOwnProperty(course)) {
        courses[course] = {
          capacity: 0,
          students: [],
        };
      }
      courses[course].capacity += seats;
    } else {
      let [user, credits, email, course] = line
        .split(/\[|\] with email | joins /g)
        .filter((el) => el.length > 0);

      const student = {
        user,
        credits,
        email,
      };

      if (courses.hasOwnProperty(course)) {
        if (courses[course].students.length < courses[course].capacity) {
          courses[course].students.push(student);
        }
      }
    }
  }

  let sorted = Object.fromEntries(
    Object.entries(courses).sort((a, b) => {
      return b[1].students.length - a[1].students.length;
    })
  );

  for (const key in sorted) {
    console.log(
      `${key}: ${
        sorted[key].capacity - sorted[key].students.length
      } places left`
    );
    const sortedStudents = sorted[key].students.sort((a, b) => {
      return b.credits - a.credits;
    });
    for (const student of sortedStudents) {
      console.log(`--- ${student.credits}: ${student.user}, ${student.email}`);
    }
  }
}

softuniStudents([
  'JavaBasics: 2',
  'user1[25] with email user1@user.com joins C#Basics',
  'C#Advanced: 3',
  'JSCore: 4',
  'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore',
  'user1[25] with email user1@user.com joins JSCore',
  'user8[18] with email user8@user.com joins C#Advanced',
  'user6[85] with email user6@user.com joins JSCore',
  'JSCore: 2',
  'user11[3] with email user11@user.com joins JavaBasics',
  'user45[105] with email user45@user.com joins JSCore',
  'user007[20] with email user007@user.com joins JSCore',
  'user700[29] with email user700@user.com joins JSCore',
  'user900[88] with email user900@user.com joins JSCore',
]);
