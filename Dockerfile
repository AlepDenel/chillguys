FROM python:3.10-slim

# Install ONLY Python dependencies
WORKDIR /app
COPY . .

# Install mysqlclient first using binary wheel
RUN pip install --upgrade pip && \
    pip install mysqlclient==2.1.1 --only-binary=:all: && \
    pip install -r CG/requirements.txt

# Start command
WORKDIR /app/CG
CMD ["gunicorn", "CG.wsgi:application", "--bind", "0.0.0.0:$PORT"]