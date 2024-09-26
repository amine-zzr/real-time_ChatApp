# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Expose the port the app runs on
EXPOSE 5000

# Define environment variables
ENV FLASK_ENV=development

# Make Flask listens on all IP addresses, not just localhost
ENV FLASK_RUN_HOST=0.0.0.0

# Run the app with the python command
CMD ["python3", "run.py"]
