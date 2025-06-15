'use client'
// const getpost = async () => {
//     const res = await fetch(`http://localhost:8000/api/posts/1`, {
//         method: 'GET',
//         cache: 'no-store'
//     });

import { useParams } from "next/navigation";

//     if (res.ok) {
//         const data = await res.json();
//         console.log(data);

//         return data;
//     } else {
//         throw new Error(res.status);
//     }
// };

export default async function Posts() {
    const { id } = useParams()
    return (
        <div className="container">
            <div className="row my-5">
                <h2>post {id}</h2>
            </div>
        </div>
    );
}
