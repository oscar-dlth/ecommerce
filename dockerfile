# Use the desired Node.js version
FROM node:16.20.0

# Set the working directory
WORKDIR .

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Copy TypeScript source files

# Build the TypeScript application
RUN npm run build

# Specify the command to run your application
CMD ["node", "dist/index.js"]