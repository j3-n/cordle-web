NPM ?= npm

dev:
	$(NPM) run dev -- --open

build:
	$(NPM) run build

.phony: dev build