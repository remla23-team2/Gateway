# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm ci --only=production

# Copy the application code to the container
COPY . .

# Expose the port on which the gateway will listen
EXPOSE 3000

# Specify the command to run the gateway when the container starts
CMD ["node", "index.js"]
