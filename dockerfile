RUN /bin/bash
# Use the desired Node.js version
FROM node:16.20.0

# Set the working directory
WORKDIR .

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .