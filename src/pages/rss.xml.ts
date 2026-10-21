import rss from '@astrojs/rss';
import { getPosts } from '../lib';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Aditya Nihlani',
    description: 'Aditya Nihlani',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
