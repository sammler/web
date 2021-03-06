NODE_VER := $(shell cat .nvmrc)

help:								                ## Show this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

gen-readme:					                ## Generate README.md (using docker-verb)
	docker run --rm -v ${PWD}:/opt/verb stefanwalther/verb
.PHONY: gen-readme

up-dev-i:	build-dev 								## Start the development environment (interactive)
	docker-compose --f=docker-compose.dev.yml up
.PHONY: up-dev-i

up-dev:															## Start the development environment (daemon mode)
	docker-compose --f=docker-compose.dev.yml up
.PHONY: up-dev

down-dev:														## Tear down the development environment
	docker-compose --f=docker-compose.dev.yml down -t 0
.PHONY: down-dev

build:															## Build the docker image (prod)
	NODE_VER=$(NODE_VER)
	docker build --build-arg NODE_VER=$(NODE_VER) -t sammlerio/web -f Dockerfile.prod .
.PHONY: build

build-dev:													## Build the docker image (dev)
	NODE_VER=$(NODE_VER)
	docker build --force-rm --build-arg NODE_VER=$(NODE_VER) -t sammlerio/web-dev -f Dockerfile.dev .
.PHONY: build-dev

run: build
	 docker run -d -p 4040:80 sammlerio/web
.PHONY: run

run-dev: build-dev
	docker run -d -p 4040:4200 sammlerio/web-dev
.PHONY: run-dev

up:
	docker-compose up -d
.PHONY: up

down:
	docker-compose down -t 0
.PHONY: down

docker-clean:
	docker stop $(docker ps -aq)
	docker rm $(docker ps -aq)
.PHONY: docker-clean

