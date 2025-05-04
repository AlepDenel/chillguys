FROM python:3.10-slim

# Install ONLY essential build deps
RUN apt-get update && \
    apt-get install -y \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

# Install Python packages
RUN pip install --upgrade pip && \
    pip install mysqlclient==2.1.1 && \  # Explicitly install first
    pip install -r CG/requirements.txt

# Start command (no cd needed)
WORKDIR /app/CG
CMD ["gunicorn", "CG.wsgi:application", "--bind", "0.0.0.0:$PORT"]