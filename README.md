# Mani's blog

I made a pipeline that transforms Obsidian (markdown) files from a specific folder to a website, keeping the links and relations from the original files in 1 command.

# How to run

You need to set `CONTENT_SRC` in the Makefile to define where your markdown files are.

- `make serve`: run the server locally
- `make publish`: commit to git and push to publish the website
