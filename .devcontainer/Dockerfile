# Use the official Node.js image
FROM node:14

# Install Docker CLI
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common \
    lsb-release

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
    $(lsb_release -cs) \
    stable"

RUN apt-get update && apt-get install -y docker-ce-cli

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Install ESLint globally to ensure it's available in the PATH
RUN npm install -g eslint prettier

# Expose the port the app runs on
EXPOSE 9000

# Command to run when the container starts
CMD ["npm", "start"]
