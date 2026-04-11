// "use client";
// import { useState } from "react";

// export default function Dashboard() {
//     const [name,setName] = useState("");
//     console.log(name);
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <input type="text" placeholder="input here" value={name} onChange={(e) => setName(e.target.value)} />
//             <p>{name}</p>
//         </div>
//     )}

import { Suspense } from "react";

function DashboardContent(){
    return <h2>Dashboard Content</h2>
}

export default function Dashboard() {
    return (
        <div>
            <p>dashboard rendered at: {new Date().toLocaleTimeString()}</p>

            <Suspense fallback={<p>Loading...</p>}>
                <DashboardContent />
            </Suspense>

        </div>
    )
}