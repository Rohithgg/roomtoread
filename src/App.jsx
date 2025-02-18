import {} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./login.jsx"
import SignUp from "./signup.jsx"
import {Switch} from "@mui/material";

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
