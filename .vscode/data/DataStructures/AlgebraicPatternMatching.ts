// interface DegreeCourse
//   {
//     code              : string
//     name              : string
//     enrollmentDate    : [number, number, number]
//   }

//  interface Contract
//   {
//     serial              : string
//     salary              : number
//     beginDate           : [number, number, number]            
//   }

// interface Student
//   {
//     id          : string
//     name        : string
//     lastName    : string
//     enrollment  : DegreeCourse 
//   }

// interface Employee
//   {
//     id          : string
//     name        : string
//     lastName    : string
//     enrollment  : Contract
//   }

// type SchoolPerson = {
//   kind: "student"
// } & Student | {
//   kind: "employee"
// } & Employee

// const createStudent = (id: string, name: string, lastName: string, enrollment: DegreeCourse): Student => ({
//   id: id,
//   name: name,
//   lastName: lastName,
//   enrollment: enrollment
// });

// const createEmployee = (id: string, name: string, lastName: string, enrollment: Contract): Employee => ({
//     id: id,
//     name: name,
//     lastName: lastName,
//     enrollment: enrollment
// });

// const schoolPerson1: SchoolPerson = {
//     kind: "student",
//     id: "1",
//     name: "John",
//     lastName: "Doe",
//     enrollment: {
//         code: "CS101",
//         name: "Computer Science",
//         enrollmentDate: [2021, 9, 1]
//     }
// };

// const schoolPerson2: SchoolPerson = {
//     kind: "employee",
//     id: "2",
//     name: "Alice",
//     lastName: "Smith",
//     enrollment: {
//         serial: "E101",
//         salary: 50000,
//         beginDate: [2021, 9, 1]
//     }
// };

// if (schoolPerson1.kind == "student") {
//     console.log(`${schoolPerson1.name} is a student enrolled in ${schoolPerson1.enrollment.name}.`);
// }
// else if  (schoolPerson2.kind == "employee") {
//     console.log(`${schoolPerson2.name} is an employee with a salary of ${schoolPerson2.enrollment.salary}.`);
// }

// console.log(schoolPerson1);
// console.log(schoolPerson2);
