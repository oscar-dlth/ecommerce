# Use the desired Node.js version
FROM node:16.20.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm start
# Copy the rest of the application code
COPY . .

# Start your application
CMD ["node", "dist/index.js"] 