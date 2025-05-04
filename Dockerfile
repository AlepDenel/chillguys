FROM python:3.10-slim

WORKDIR /app
COPY . .

RUN pip install --upgrade pip && \
    pip install -r CG/requirements.txt

WORKDIR /app/CG
CMD ["gunicorn", "CG.wsgi:application", "--bind", "0.0.0.0:$PORT"]