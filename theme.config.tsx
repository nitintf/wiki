import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Logo = () => {
	return (
		<div>
			<Image alt='Wiki Logo' src={'/favicon.ico'} width={40} height={40} />
		</div>
	)
}

const config: DocsThemeConfig = {
	logo: Logo,
	project: {
		link: 'https://github.com/nitintf',
	},
	chat: {
		link: 'https://twitter.com/nitinpanwarrr',
		icon: (
			<svg width='24' height='24' viewBox='0 0 248 204'>
				<path
					fill='currentColor'
					d='M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z'
				/>
			</svg>
		),
	},
	docsRepositoryBase: 'https://github.com/nitintf',
	footer: {
		component: <></>,
	},
	sidebar: {
		defaultMenuCollapseLevel: 2,
		toggleButton: true,
	},
	editLink: {
		component: () => <></>,
	},
	feedback: {
		useLink() {
			return 'https://twitter.com/nitinpanwarrr'
		},
	},
	useNextSeoProps() {
		const { asPath } = useRouter()

		if (asPath !== '/') {
			return {
				titleTemplate: '%s – Wiki',
			}
		}
	},
	themeSwitch: {
		component: () => <></>,
	},
	head: function useHead() {
		const { title } = useConfig()

		const ogImage = 'https://www.nitinp.dev/og?title=My%20Wiki'

		return (
			<>
				<meta name='msapplication-TileColor' content='#fff' />
				<meta name='theme-color' content='#fff' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Language' content='en' />
				<meta name='description' content='My Personal Wiki.' />
				<meta name='og:description' content='My Personal Wiki' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:image' content={ogImage} />
				<meta name='twitter:site:domain' content='wiki.nitinp.dev' />
				<meta name='twitter:url' content='https://wiki.nitinp.dev' />
				<meta
					name='og:title'
					content={title ? title + ' – Wiki' : "Nitin's Wiki"}
				/>
				<meta name='og:image' content={ogImage} />
				<meta name='apple-mobile-web-app-title' content='Wiki' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
			</>
		)
	},
	toc: {
		backToTop: true,
	},
}

export default config
