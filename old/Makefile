THEMES = elegant paper kendall flat modern classy class short kwan onepage

all: resume-html resume-cv

# TODO a bit repetitive
resume-html:
	cp resume-html.json resume.json
	resume export --theme=elegant resume.html
	rm resume.json

resume-cv:
	cp resume-cv.json resume.json
	resume export --theme=short resume.pdf
	rm resume.json

resume-examples:
	cp resume-example.json resume.json
	@$(foreach theme,$(THEMES),resume export --theme=$(theme) resume-example-$(theme).pdf;)
	mkdir -p examples
	mv resume-example-*.pdf examples
	rm resume.json

clean:
	rm resume.html resume.pdf resume.json
