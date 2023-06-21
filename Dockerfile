# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project directory to the working directory
COPY . .

# Expose the port that the Docusaurus app listens on
EXPOSE 3002

# Start the Docusaurus development server
CMD ["yarn", "start"]
