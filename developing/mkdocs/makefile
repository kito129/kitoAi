# Makefile for My Blog

# Check if .env file exists
ifneq ("$(wildcard .env)","")
	include .env
	export $(shell sed 's/=.*//' .env)
endif

SHELL := /bin/bash

# Create and activate virtual environment, install dependencies
init:
	python3 -m venv .venv
	. .venv/bin/activate && pip install -r requirements.txt

# Run MkDocs local server
serve:
	. .venv/bin/activate && mkdocs serve

# Build Docker container and run it
docker-build:
	docker-compose up --build -d

# Stop Docker containers
docker-stop:
	docker-compose down

# Restart Docker containers
docker-restart: docker-stop docker-build

# Reload Docker containers with new code
docker-reload:
	docker-compose down
	docker-compose up --build -d

# Clean up Docker images and containers
docker-clean:
	docker-compose down --rmi all -v

# Show Docker container logs
docker-logs:
	docker-compose logs -f

# Display help
help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  init            Create and activate virtual environment, install dependencies"
	@echo "  serve           Run MkDocs local server"
	@echo "  docker-build    Build Docker container and run it"
	@echo "  docker-stop     Stop Docker containers"
	@echo "  docker-restart  Restart Docker containers"
	@echo "  docker-reload   Reload Docker containers with new code"
	@echo "  docker-clean    Clean up Docker images and containers"
	@echo "  docker-logs     Show Docker container logs"
	@echo "  help            Display this help message"

.PHONY: init serve docker-build docker-stop docker-restart docker-reload docker-clean docker-logs help
