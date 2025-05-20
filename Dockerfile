# Use official Node image
FROM node:18
 
# Set working directory
WORKDIR /app
 
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
 
# Copy source code
COPY . .
 
# Start the app directly with ts-node
CMD ["npm", "start"]