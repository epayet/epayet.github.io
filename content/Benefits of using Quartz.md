---
title: Benefits of using Quartz
description: On my first post on how I made this website, I wrote about how I set up my Obsidian -> website pipeline. I thought I'd make a separate one about how cool Quartz is and how I configured it.
tags: 
  - engineering
  - obsidian
---

On my first post on [[Obsidian to website pipeline|Obsidian to website pipeline]], I wrote about how I set up my Obsidian -> website pipeline. I thought I'd make a separate one about how cool Quartz is and how I configured it.
# Theme
Quartz has quite a few community themes available. I chose Kanagawa because I like its colours, then customised it to better match the look I wanted.

- Community themes: https://github.com/saberzero1/quartz-themes
- Kanagawa: https://quartz-themes.github.io/kanagawa/
- Personal tweaks: https://github.com/epayet/epayet.github.io/blob/8d94f5e177e0007aa4874580766bcc6242bf698c/quartz/styles/custom.scss
	- edit: I've made a few more tweaks since, at this point I might as well write my own theme perhaps...
# Plugins
Quartz comes with a bunch of useful plugins that you can configure on your `quartz.config.yaml`. Here are a notable few:
## og-image
`"@quartz-community/og-image"` turns the metadata of the page into a generated image that gets used by bots.

I found this website which shows you how the metadata of the website will get displayed in a few different scenarios (google, whatsapp, etc.): https://www.opengraph.to/u/emmanuel-payet.me

For example, with this frontmatter metadata in my markdown file:
```yaml
---
title: How I made this website
description: I explain how I turned a folder in my Obsidian vault into a website with a simple command, while preserving the links and graph structure.
tags: 
  - engineering
---
```

This is the og-image for the page [[Obsidian to website pipeline|Obsidian to website pipeline]]: ![og-image](https://emmanuel-payet.me/how-i-made-this-website-og-image.webp)
## frontmatter
Speaking of frontmatter, this is all the supported fields: https://quartz.jzhao.xyz/plugins/frontmatter
## content-index
This enables an auto generated sitemap and rss feed: https://quartz.jzhao.xyz/plugins/contentindex

For my website:
- https://emmanuel-payet.me/sitemap.xml
- https://emmanuel-payet.me/index.xml
## tags and tag page
https://emmanuel-payet.me/tags/