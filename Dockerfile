FROM python:3.14-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV GSOS_ROOT=/app

COPY . /app

EXPOSE 10000

CMD ["python", "gsos/webapi/server.py"]
