"use client";
import { useState } from "react";

export default function Dashboard() {
    const [name,setName] = useState("");
    console.log(name);
    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" placeholder="input here" value={name} onChange={(e) => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    )}