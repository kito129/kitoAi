
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



# For Nginc

You can use a web server like Nginx or Apache. Here we'll use Nginx as an example.

SSH into your VPS:


    ssh root@84.247.132.168

Install Nginx:

    sudo apt update
    sudo apt install nginx


Start Nginx:

    sudo systemctl start nginx
    sudo systemctl enable nginx


    sudo nano /etc/nginx/sites-available/kito.ai

Config

server {
    listen 80;
    server_name kito.ai www.kito.ai;

    # Redirect HTTP to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name kito.ai www.kito.ai;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/kito.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kito.ai/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Serve the site at /blog
    location /blog {
        proxy_pass http://localhost:8000;  # Adjust this to the port your application is running on
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Serve ACME challenge for Certbot
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        try_files $uri =404;
    }
}



Enable the stie

    sudo ln -s /etc/nginx/sites-available/kito.ai /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx

Edit site

    sudo nano /etc/nginx/sites-available/kito.ai
    sudo rm /etc/nginx/sites-enabled/kito.ai
    sudo ln -s /etc/nginx/sites-available/kito.ai /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx




# Cert 

Install Certbot:

    sudo apt update
    sudo apt install certbot python3-certbot-nginx

Obtain and Install SSL Certificate:
Run Certbot to obtain and install the SSL certificate:

    sudo certbot --nginx -d kito.ai -d www.kito.ai

Follow the prompts to complete the certificate installation.

Verify SSL Configuration:
Test the Nginx configuration again:

    sudo nginx -t
    sudo systemctl restart nginx

Auto-Renewal Setup:
Certbot automatically sets up a cron job for renewal. To manually test the renewal process, you can run:    
    
    sudo certbot renew --dry-run


