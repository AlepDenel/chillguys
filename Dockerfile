FROM python:3.10-slim

# Install EXACT MySQL dependencies
RUN apt-get update && \
    apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    mysql-common \
    libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install -r CG/requirements.txt

# Start command
CMD ["gunicorn", "CG.wsgi:application", "--bind", "0.0.0.0:$PORT", "--chdir", "/app/CG"]