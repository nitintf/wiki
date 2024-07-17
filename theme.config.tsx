import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <span>Wiki</span>,
	project: {
		link: 'https://github.com/nitintf',
	},
	chat: {
		link: 'https://discord.com',
	},
	docsRepositoryBase: 'https://github.com/nitintf',
	footer: {
		component: <></>,
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
		toggleButton: true,
	},
}

export default config
