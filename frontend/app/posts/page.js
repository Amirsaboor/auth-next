import PostCard from "@/components/PostCard"
import Link from "next/link";

const getposts = async () => {
    const res = await fetch('http://localhost:8000/api/posts', {
        method: 'GET',
        cache: 'no-store'
    });

    if (res.ok) {
        const data = await res.json();
        return data.posts;
    } else {
        throw new Error(res.status);
    }
};

export default async function Posts() {
    const posts = await getposts();
    return (
        <div className="container">
            <div className="row my-5">
                {posts.map(post => (
                    <Link 
                    href={`/posts/${post.id}`} 
                    key={post.id} 
                    className="col-span-6 col-md-4 text-decoration-none h-100">
                        <PostCard post={post} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
