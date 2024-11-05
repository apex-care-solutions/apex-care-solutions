FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY web/app/package*.json ./
RUN npm install

# Copy the rest of the client code
COPY web/app ./

# Expose client port
EXPOSE 3000

# Start the client with vite for hot-reloading
CMD ["npm", "run", "dev"]
