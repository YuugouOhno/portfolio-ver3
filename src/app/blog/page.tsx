import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

async function getPosts(): Promise<Post[]> {
    // postsディレクトリのパス
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/_posts');
    // ファイル一覧を取得
    const filenames = fs.readdirSync(postsDirectory);

    // 各Markdownファイルのメタデータを取得
    const posts: Post[] = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''), // 拡張子を除外
            title: data.title as string,
            date: data.date as string,
            description: data.description as string,
        };
    });

    // 日付でソート
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}


export default async function blog() {
    const posts = await getPosts();
    console.log(posts);

    return (
        <div className="p-4 h-screen py-36 px-20">
            <ul className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                    <li key={post.slug} className="border border-gray-300 rounded-lg p-2 m-2">
                        <Link href={`/blog/posts/${post.slug}`} className="block">
                            <Image 
                                src={`/blog/posts/${post.slug}.png`}
                                width={200}
                                height={200}
                                alt={post.title || "サムネ"}
                                className="w-full h-auto rounded"
                            />
                            <p className="text-center text-xl mt-2 text-blue-500 font-bold">{post.title}</p>
                            <p className="text-right text-md">{post.date}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}