import Link from 'next/link';

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}
