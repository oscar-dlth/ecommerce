ARG custom_arg=default_value
RUN echo "Build argument: $custom_arg"

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

RUN npm run build && npm run tsc-alias

# Start your application
CMD ["npm", "start"]