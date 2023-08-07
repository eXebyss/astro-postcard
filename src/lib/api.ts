import { useSanityClient, groq } from 'astro-sanity'

export async function getSanityData(qroq: string) {
	const query = groq`${qroq}`
	const firstPost = await useSanityClient().fetch(query)
	return firstPost
}
