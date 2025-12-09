COMPOSE_FILE ?= docker-compose.dev.yaml
COMPOSE_COMMAND = docker compose -f $(COMPOSE_FILE)
PROJECT_NAME ?= auth

.PHONY: up
up: ## builds and start containers
	$(COMPOSE_COMMAND) up

.PHONY: build
build: ## build all images without starting container
	$(COMPOSE_COMMAND) build --no-cache

.PHONY: down-v
down: ## removes containers, network and volumes
	$(COMPOSE_COMMAND) down -v --remove-orphans

.PHONY: clean
clean: ## clean all 
	docker system prune;
	docker builder prune;
	docker volume prune;
# 	docker image rmi $(docker images -aq);