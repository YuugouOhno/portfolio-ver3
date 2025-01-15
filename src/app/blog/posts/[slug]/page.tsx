import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { marked } from 'marked';

// 投稿データを取得する関数
async function getPost(slug: string) {
    const filePath = path.join(process.cwd(), `src/app/blog/_posts/${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        content: content as string,
    };
}

// 動的なメタデータを生成
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    return {
        title: post.title,
        description: post.description,
    };
}

// 詳細画面のコンポーネント
export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <div className="p-4 max-w-4xl mx-auto h-screen py-36 px-20">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">{post.date}</p>

            {/* <Image 
                src={`/blog/posts/${params.slug}.png`} 
                width={800} 
                height={400} 
                alt={post.title || 'サムネ'}
                className="w-full h-auto rounded"
            /> */}

            <div className="prose mt-8">
                {/* Markdownの内容をHTMLに変換して表示 */}
                <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
            </div>

            <div className="mt-8">
                <a href="/blog" className="text-blue-500">&larr; 戻る</a>
            </div>
        </div>
    );
}