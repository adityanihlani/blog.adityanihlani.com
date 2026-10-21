import { getCollection } from 'astro:content';

export const sections = {
  tech: { label: 'Tech' },
  life: { label: 'Life' },
} as const;
export type Section = keyof typeof sections;

// Posts live in src/content/posts/<section>/<slug>.md
export async function getPosts(section?: Section) {
  const posts = await getCollection('posts', ({ data }) => !data.draft || import.meta.env.DEV);
  return posts
    .map((post) => ({ post, section: post.id.split('/')[0] as Section, slug: post.id.split('/').slice(1).join('/') }))
    .filter((p) => p.section in sections && (!section || p.section === section))
    .sort((a, b) => b.post.data.date.valueOf() - a.post.data.date.valueOf());
}
