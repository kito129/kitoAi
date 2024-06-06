
# My Pelican and Lektor Site

This project uses Pelican and Lektor to generate and serve static sites. Docker and Docker Compose are used to manage the services.

## Prerequisites

- Docker
- Docker Compose
- Python 3

## Setup Instructions

1. **Initialize the environment**:
   ```bash
   make init
   ```
   This command copies `.env.sample` to `.env`. Customize `.env` with your actual settings.

2. **Create the virtual environment and install dependencies**:
   ```bash
   make create-venv
   ```

3. **Install dependencies** (Alternative to `create-venv`):
   ```bash
   make install
   ```

4. **Configure Pelican and Lektor**:
   ```bash
   make configure
   ```

## Commands

### Docker Commands

#### `make docker-build`
Builds the Docker images for Pelican and Lektor.

#### `make docker-up`
Starts the Docker Compose services in detached mode.

#### `make docker-down`
Stops the Docker Compose services.

#### `make docker-destroy`
Stops and removes all Docker Compose services and associated volumes.

#### `make docker-reload`
Destroys, rebuilds, and restarts the Docker Compose services.

#### `make logs`
Displays logs from the Docker Compose services.

### Pelican Commands

#### `make build-pelican`
Generates the Pelican site from the content.

#### `make serve-pelican`
Serves the Pelican site using Docker.

### Lektor Commands

#### `make build-lektor`
Generates the Lektor site.

#### `make serve-lektor`
Serves the Lektor site using Docker.

### General Commands

#### `make clean`
Removes generated files and the virtual environment.

#### `make install`
Creates a virtual environment and installs Pelican and Lektor.

#### `make configure`
Runs the quickstart commands for both Pelican and Lektor.

#### `make build`
Generates both Pelican and Lektor sites.

#### `make serve`
Serves both Pelican and Lektor sites using Docker. on `http://localhost:8000`.

## Directory Structure

```
my-pelican-site/
├── content/
│   └── my-first-post.md
├── Dockerfile
├── Dockerfile.lektor
├── docker-compose.yml
├── .env.sample
├── Makefile
├── pelicanconf.py
└── publishconf.py
```
