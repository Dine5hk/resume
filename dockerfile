# Use an official Nginx image as the base
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the code from your local machine (host) to the container
COPY . .

# Expose port 80 to access the app
EXPOSE 80

# Nginx will serve the application automatically
CMD ["nginx", "-g", "daemon off;"]
