import {} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./login.jsx"
import SignUp from "./signup.jsx"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    )
}

export default App
