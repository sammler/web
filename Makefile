help:								                ## Show this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

gen-readme:					                ## Generate README.md (using docker-verb)
	docker run --rm -v ${PWD}:/opt/verb stefanwalther/verb
.PHONY: gen-readme


build:
	docker build -t sammlerio/web .
.PHONY: build

run: build
	 docker run -d -p 4040:80 sammlerio/web
.PHONY: run

up:
	docker-compose up -d
.PHONY: up

down:
	docker-compose down -t 0
.PHONY: down
