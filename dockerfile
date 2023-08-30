# Use the desired Node.js version
FROM node:16.20.0

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Copy package.json and package-lock.json
COPY package*.json ./

COPY src/ ./src/

RUN npm run build && npm run tsc-alias

CMD ["npm", "start"]