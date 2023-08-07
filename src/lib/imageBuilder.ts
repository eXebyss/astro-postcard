import { useSanityClient } from 'astro-sanity'
import { createImageBuilder } from 'astro-sanity'

// @ts-ignore
const imageBuilder = createImageBuilder(useSanityClient())

export function urlForImage(source: any) {
	return imageBuilder.image(source)
}
