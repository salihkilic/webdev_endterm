import * as React from "react"

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


// Question 1

export const PersonCard = (props: {}) : JSX.Element  => (<></>)
  


// Question 2

  export class PersonForm extends React.Component <{},{}>{
    constructor(props:{}){
      super(props)
    }
    
    render():JSX.Element{
      return(<></>)
    }
  }

/*
Hint for the Dropdown list 
<select 
    onChange={}
>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
    <option value="staff">Staff</option>
</select>
*/


// Question 3

export const fetchPersons = async () : Promise<{}> =>{
    return {}
}


// Question 4

export class PersonList extends React.Component <{},{}>{
    constructor(props:{}){
      super(props)

    }

    render():JSX.Element{
      return(
        <div></div>
         )
    }
}


//DO  NOT IMPLEMENT QUESTION 5 HERE!!!
//Use the *.ts file to provide the answers. 


