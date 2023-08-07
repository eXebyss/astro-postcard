import { portableTextToHtml } from 'astro-sanity'

const customComponents = {
	types: {
		// @ts-ignore
		code: ({ value }) => {
			return `<code-block code='${value.code}' language='${value.language}'></code-block>`
		},
	},
}

// @ts-ignore
export function sanityPortableText(portabletext) {
	return portableTextToHtml(portabletext, customComponents)
}
