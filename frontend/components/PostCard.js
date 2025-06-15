export default function PostCard({ post, size }) {
    return (
        <div className='border h-100 my-3 p-2'>
            <h3 className="text-black">{post.title}</h3>
            <p className="text-muted">{post.body}</p>
        </div>
    );
}
