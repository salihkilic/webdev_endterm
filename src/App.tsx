import * as React from "react"
import { PersonCard, PersonForm, PersonList } from "./ExamPart1"

type AppProps = {}
type AppState = {}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }
    render(): React.ReactNode {

        return <div>
            <h1>Web development Exam</h1>
            <p>
                You can use this component to test your code. Place your own components inside the render of the App component.
            </p>
        </div>
    }
}