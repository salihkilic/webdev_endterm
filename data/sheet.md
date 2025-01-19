# Index

- [Project Setup Guide](#projectsetupguide)

## Functional

- [Arrow Functions](#arrow-functions)
- [Records](#records)

## React

- [Back-End Calls](#back-end-calls)

---

## ProjectSetupGuide

[To the top](#index)

```Typescript
/* 

# Install Yarn
    npm install --global yarn

# Setting up the project
    yarn --init
    yarn add typescript -D
    yarn add immutable
    yarn tsc -init

# Load config snippet with tsCon
    tsCon

# Add the following to package.json

    "scripts": {
        "start": "node ./bin/main.js"
    }

# Run the watch command
    yarn tsc -w
*/

console.log("You configured the project successfully!");
```

---

## Arrow Functions

[To the top](#index)

Examples:
Single Parameter:

```TypeScript
const square = (n: number) => n * n;
```

Multiple Parameter:

```TypeScript
const add = (a: number, b: number) => a + b;
```

No Parameter:

```TypeScript
const greet = () => console.log("Hello, world!");
```

With function body:

```TypeScript
const multiply = (a: number, b: number) => {
    const result = a * b;
    return result;
};
```

Traditional Function (!! Not an arrow function !!)

```TypeScript
function add(a: number, b: number): number {
    return a + b;
}
```

---

## Recursion

[To the top](#index)

- A recursive function always has (at least) two parts:
- The base case
- The recursive case

---

## Back-End Calls

[To the top](#index)

```TypeScript
import { Person } from "./ExamPart1";

// Create (Register)
export const register = async (person: Person): Promise<void> => {
    await fetch("api/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
};

// Read (Get all persons)
export const getAllPersons = async (): Promise<Person[]> => {
    const response = await fetch("api/persons", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch persons");
    }
    return response.json();
};

// Update (Update a person)
export const updatePerson = async (id: string, person: Partial<Person>): Promise<void> => {
    await fetch(`api/persons/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
};

// Delete (Delete a person)
export const deletePerson = async (id: string): Promise<void> => {
    await fetch(`api/persons/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
};
```

---

## Records

[To the top](#index)

```TypeScript
export type Person = Student | Teacher | Staff;

type Student = {
    id: string,
    name: string;
    grade: number;
    role: "student";
};

type Teacher = {
    id: string,
    name: string;
    subject: string;
    role: "teacher";
};

type Staff = {
    id: string,
    name: string;
    department: string;
    role: "staff";
};

// Create a Student
const student: Person = {
 id: "1234",
 name: "Peter Poep",
 role: "student",
 grade: 10
}
```

---

## Using JSX Elements

[To the top](#index)

```TypeScript
// The component
export const PersonCard = (props: { person: Person }): JSX.Element => (

    <>
        <div>{`${emojis[props.person.role]} ${props.person.name} |`}
        {props.person.role === "student" && <span> Grade: {props.person.grade}</span>}
        {props.person.role === "teacher" && <span> Subject: {props.person.subject}</span>}
        {props.person.role === "staff" && <span> Department: {props.person.department}</span>}
        </div>
    </>
)

// Usage
export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }
    render(): React.ReactNode {
        return <div>
            <h1>Web development Exam</h1>
            <p>
                <PersonCard person={student}></PersonCard>
                <PersonCard person={teacher}></PersonCard>
                <PersonCard person={staff}></PersonCard>
            </p>
        </div>
```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---
## Template
[To the top](#index)

```TypeScript

```

---


## Webdev leren

- [ ] Switch cases in JS
- [ ] React Components icm JSX
- [ ] Types, interfaces en intersections shit
- [ ] Forms
- [ ] Calls to Backend using Fetch() in Async
- [ ] Options
- [ ] State -> setState, etc
- [ ] Data processing, sorting, filtering, etc (gaat er sowieso komen)
- [ ] Class en Function components?

- [ ] Type intersections (dat een type van twee dingen is jeweet)
- [ ] LinkedList (Immutable List volgens manual)
  - [ ] Expliciet een linkedList immutable maken
- [ ] Tail recursion (heeft voorkeur van Ibba)
- [ ] `Option<T>` met Some of None als return type als je potentieel lege data hebt in je linked List.
- [ ] Call naar de Back-end

# Voor later

## `Some` is handig (Any)

```Javascript
const isUserAttending = () => { 
return event.attendanceIds.some(attendeeId => attendeeId === authEntry?.id)
};
```
