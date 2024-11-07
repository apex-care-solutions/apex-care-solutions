# Use Node.js 18 as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY web/app/package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY web/app ./