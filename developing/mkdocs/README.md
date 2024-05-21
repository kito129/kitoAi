# Kito.ai - MkDocs

This is a personal blog website generated using MkDocs and hosted using Docker.

## Setup

### Prerequisites

- Python 3.9+
- Docker
- Docker Compose

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/my-blog.git
    cd my-blog
    ```

2. **Create and activate the virtual environment**:
    - On macOS/Linux:

        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

    - On Windows:

        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```

3. **Copy the `.env.sample` to `.env` and edit the values**:

    ```bash
    cp .env.sample .env
    ```

4. **Install dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

5. **Run the local server**:

    ```bash
    mkdocs serve
    ```

### Docker Setup

1. **Build and run the Docker container**:

    ```bash
    docker-compose up --build
    ```

### Usage

- Add your Markdown files in the `docs` directory.
- Configure your site by editing the `mkdocs.yml` file.

## Make Command

Command to run the project:

    make init         # To set up the virtual environment and install dependencies
    make serve        # To run the MkDocs local server
    make docker-build # To build and run the Docker containers
    make docker-stop  # To stop the Docker containers
