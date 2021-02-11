import { useRouter } from 'next/router';

export default function Post({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/posts/');
    const posts = await res.json();
    const paths = [];
    posts.forEach((post) => paths.push(`/posts/${post.id}`));

    return {
        paths,
        fallback: true,
    };
}
