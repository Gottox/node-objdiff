
REPORTER = dot

all: build build-dev

build:
	@mkdir -p dist
	@./node_modules/.bin/browserbuild \
		-g ObjDiff \
		-m objdiff -b lib/ \
		lib > dist/objdiff.js

build-dev:
	@mkdir -p dist
	@./node_modules/.bin/browserbuild \
		-g ObjDiff \
		-d -m objdiff -b lib/ \
		lib > dist/objdiff-dev.js

clean:
	@rm -r dist

.PHONY: clean
