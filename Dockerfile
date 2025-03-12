# Use the official Node.js image as the base image
FROM node:20-alpine3.16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js 2 application for production
RUN npm run generate

# Use the official Nginx image as the base image for the second build stage
FROM nginx:1.21

# Copy the custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d/

# Copy the built application to the Nginx container
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the Nginx server port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
