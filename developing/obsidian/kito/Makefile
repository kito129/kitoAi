# Makefile

# Load environment variables from .env file if it exists
ifneq (,$(wildcard ./.env))
	include .env
	export $(shell sed 's/=.*//' .env)
endif

# Default settings
OUTPUT_DIR ?= $(OUTPUT_PATH)
CONTENT_DIR ?= $(CONTENT_PATH)
LEKTOR_DIR ?= $(LEKTOR_PROJECT_NAME)
LEKTOR_OUTPUT_DIR ?= $(LEKTOR_OUTPUT_PATH)
VENV_DIR ?= .venv

.PHONY: install-pelican install-lektor configure-pelican configure-lektor build-pelican serve-pelican build-lektor serve-lektor clean init install configure build serve create-venv docker-build docker-up docker-down docker-destroy docker-reload logs

# Create a virtual environment and install dependencies
create-venv:
	@echo "Creating virtual environment..."
	python3 -m venv $(VENV_DIR)
	. $(VENV_DIR)/bin/activate && pip install --upgrade pip && pip install pelican markdown lektor

# Install Pelican and dependencies
install-pelican: $(VENV_DIR)/bin/activate
	@echo "Installing Pelican and dependencies..."
	. $(VENV_DIR)/bin/activate && pip install pelican markdown

# Install Lektor
install-lektor: $(VENV_DIR)/bin/activate
	@echo "Installing Lektor..."
	. $(VENV_DIR)/bin/activate && pip install lektor

# Configure Pelican
configure-pelican: install-pelican
	@echo "Configuring Pelican..."
	. $(VENV_DIR)/bin/activate && pelican-quickstart

# Configure Lektor
configure-lektor: install-lektor
	@echo "Configuring Lektor..."
	. $(VENV_DIR)/bin/activate && lektor quickstart --name $(LEKTOR_PROJECT_NAME)

# Build Docker images
docker-build:
	docker-compose build

# Bring up Docker services
docker-up:
	docker-compose up -d

# Bring down Docker services
docker-down:
	docker-compose down

# Destroy Docker services and volumes
docker-destroy:
	docker-compose down -v --remove-orphans

# Rebuild and restart Docker services
docker-reload: docker-destroy docker-build docker-up

# View Docker Compose logs
logs:
	docker-compose logs -f

# Build Pelican site
build-pelican:
	docker-compose run --rm pelican pelican "content" -o "output" -s pelicanconf.py

# Serve Pelican site
serve-pelican:
	docker-compose up -d pelican

# Build Lektor site
build-lektor:
	docker-compose run --rm lektor lektor build -O $(LEKTOR_OUTPUT_DIR)

# Serve Lektor site
serve-lektor:
	docker-compose up -d lektor

# Clean generated files
clean-python:
	rm -rf $(OUTPUT_DIR)/* $(LEKTOR_OUTPUT_DIR)/* $(VENV_DIR)

# Initialize the environment
init:
	cp .env.sample .env

# Install dependencies
install: create-venv

# Configure both Pelican and Lektor
configure: configure-pelican configure-lektor

# Build both Pelican and Lektor sites
build: build-pelican build-lektor

# Serve both Pelican and Lektor sites
serve: docker-up

# Create a virtual environment
$(VENV_DIR)/bin/activate:
	python3 -m venv $(VENV_DIR)
	. $(VENV_DIR)/bin/activate && pip install --upgrade pip
	touch $(VENV_DIR)/bin/activate


# ###### Pelican & Lekton #############

PY?=
PELICAN?=pelican
PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py

FTP_HOST=84.247.132.168
FTP_USER=root
FTP_TARGET_DIR=y

SSH_HOST=localhost
SSH_PORT=22
SSH_USER=root
SSH_TARGET_DIR=/var/www


DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

RELATIVE ?= 0
ifeq ($(RELATIVE), 1)
	PELICANOPTS += --relative-urls
endif

SERVER ?= "0.0.0.0"

PORT ?= 0
ifneq ($(PORT), 0)
	PELICANOPTS += -p $(PORT)
endif


pelican-help:
	@echo 'Makefile for a pelican Web site                                           '
	@echo '                                                                          '
	@echo 'Usage:                                                                    '
	@echo '   make pelican-html                           (re)generate the web site          '
	@echo '   make pelican-clean                          remove the generated files         '
	@echo '   make pelican-regenerate                     regenerate files upon modification '
	@echo '   make pelican-publish                        generate using production settings '
	@echo '   make pelican-serve [PORT=8000]              serve site at http://localhost:8000'
	@echo '   make pelican-serve-global [SERVER=0.0.0.0]  serve (as root) to $(SERVER):80    '
	@echo '   make pelican-devserver [PORT=8000]          serve and regenerate together      '
	@echo '   make pelican-devserver-global               regenerate and serve on 0.0.0.0    '
	@echo '   make pelican-ssh_upload                     upload the web site via SSH        '
	@echo '   make pelican-sftp_upload                    upload the web site via SFTP       '
	@echo '   make pelican-rsync_upload                   upload the web site via rsync+ssh  '
	@echo '   make pelican-ftp_upload                     upload the web site via FTP        '
	@echo '                                                                          '
	@echo 'Set the DEBUG variable to 1 to enable debugging, e.g. make DEBUG=1 html   '
	@echo 'Set the RELATIVE variable to 1 to enable relative urls                    '
	@echo '                                                                          '

pelican-html:
	"$(PELICAN)" "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

pelican-clean:
	[ ! -d "$(OUTPUTDIR)" ] || rm -rf "$(OUTPUTDIR)"

pelican-regenerate:
	"$(PELICAN)" -r "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

pelican-serve:
	"$(PELICAN)" -l "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

pelican-serve-global:
	"$(PELICAN)" -l "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS) -b $(SERVER)

pelican-devserver:
	"$(PELICAN)" -lr "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

pelican-devserver-global:
	"$(PELICAN)" -lr "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS) -b 0.0.0.0

pelican-publish:
	"$(PELICAN)" "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(PUBLISHCONF)" $(PELICANOPTS)

pelican-ssh_upload: publish
	scp -P $(SSH_PORT) -r "$(OUTPUTDIR)"/* "$(SSH_USER)@$(SSH_HOST):$(SSH_TARGET_DIR)"

pelican-sftp_upload: publish
	printf 'put -r $(OUTPUTDIR)/*' | sftp $(SSH_USER)@$(SSH_HOST):$(SSH_TARGET_DIR)

pelican-rsync_upload: publish
	rsync -e "ssh -p $(SSH_PORT)" -P -rvzc --include tags --cvs-exclude --delete "$(OUTPUTDIR)"/ "$(SSH_USER)@$(SSH_HOST):$(SSH_TARGET_DIR)"

pelican-ftp_upload: publish
	lftp ftp://$(FTP_USER)@$(FTP_HOST) -e "mirror -R $(OUTPUTDIR) $(FTP_TARGET_DIR) ; quit"


.PHONY: pelican-html pelican-help pelican-clean pelican-regenerate pelican-serve pelican-serve-global pelican-devserver pelican-devserver-global pelican-publish pelican-ssh_upload pelican-sftp_upload pelican-rsync_upload pelican-ftp_upload