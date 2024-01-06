console.log("Using the Rest Operator with Objects:");

const student = {
    name: "Nandhu",
    course: "Web_Developer",
    rollno: 12345,
    institute: "Newton_School",
    fees: 2000000,
    duration: "10months",
    feature1: "live_class",
    feature2: "mentor_session",
    feature3: "Assignment",
    feature4: "Quiz",
    feature5: "poll",
    feature6: "contest",
    feature7: "mock_interview",
    feature8: "Project",
    feature9: "placement"
};

const { name, course, rollno, institute, ...rest } = student;
console.log(name);
console.log(course);
console.log(rollno);
console.log(institute);
console.log(rest);
/*output
Nandhu
Web_Developer
12345
Newton_School
{
  fees: 2000000,
  duration: '10months',
  feature1: 'live_class',
  feature2: 'mentor_session',
  feature3: 'Assignment',
  feature4: 'Quiz',
  feature5: 'poll',
  feature6: 'contest',
  feature7: 'mock_interview',
  feature8: 'Project',
  feature9: 'placement'
}
*/