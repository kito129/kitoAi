FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose port
EXPOSE 8000

# Run mkdocs server
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
