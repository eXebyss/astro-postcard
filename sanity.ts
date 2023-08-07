import sanity from 'astro-sanity'

const initSanity = sanity({
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2021-08-31',
	useCdn: import.meta.env.PROD,
})

export default initSanity
