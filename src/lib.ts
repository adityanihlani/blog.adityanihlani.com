import { getCollection } from 'astro:content';

// Posts live in src/content/posts/<slug>.md
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft || import.meta.env.DEV);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
