FROM python:3.10-slim

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
    gcc \
    libmariadb-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

# Install Python packages
RUN pip install --upgrade pip && \
    pip install -r CG/requirements.txt

# Set Django project directory and run
WORKDIR /app/CG
CMD ["gunicorn", "CG.wsgi:application", "--bind", "0.0.0.0:$PORT"]