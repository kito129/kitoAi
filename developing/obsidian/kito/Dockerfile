# Dockerfile

FROM python:3.9-slim

RUN pip install pelican markdown

WORKDIR /site

CMD ["sh", "-c", "pelican content -o output -s pelicanconf.py && python -m http.server --directory output 8000"]
