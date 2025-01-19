import * as React from "react"
import { Person, PersonCard, PersonForm, PersonList } from "./ExamPart1"

type AppProps = {}
type AppState = {}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }
    render(): React.ReactNode {

        const student: Person = {
            id: "1234",
            name: "Peter Poep",
            role: "student",
            grade: 10
        }

        const teacher: Person = {
            id: "1234",
            name: "Leraar Poep",
            role: "teacher",
            subject: "Biology"
        }

        const staff: Person = {
            id: "1234",
            name: "Staff Poep",
            role: "staff",
            department: "Tech support"
        }

        return <div>
            <h1>Web development Exam</h1>
            <p>
                <PersonCard person={student}></PersonCard>
                <PersonCard person={teacher}></PersonCard>
                <PersonCard person={staff}></PersonCard>
            </p>
        </div>
    }
}
