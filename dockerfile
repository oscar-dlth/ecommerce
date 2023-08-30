# Use the desired Node.js version
FROM node:16.20.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

CMD ["npm", " run build"]

# Start your application
CMD ["npm", "start"]