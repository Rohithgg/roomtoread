"use client"

import { useState } from "react"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import Label from "@mui/material/InputLabel"
import Layout from "./layouts.jsx"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle the sign-up logic
        console.log("Sign-up attempt", { name, email, password })
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1"
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                    />
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1"
                    />
                </div>

                <div>
                    <Button type="submit" className="w-full">
                        Sign up
                    </Button>
                </div>
            </form>

            <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                </p>
            </div>
        </Layout>
    )
}

export default SignUp

