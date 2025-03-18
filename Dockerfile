# # Step 1: Use an official Node.js image as the base image
# FROM node:16 AS build

# # Step 2: Set the working directory inside the container
# WORKDIR /app

# # Step 3: Copy the package.json and package-lock.json (if present) to the container
# COPY package*.json ./

# # Step 4: Install the app dependencies
# RUN npm install

# #install the expo app globally
# RUN npm install -g expo-cli

# # Step 5: Copy the rest of your app's code into the container
# COPY . .

# # Step 6: expose teh expo development server port 
# EXPOSE 19000 19001 19002


# # Step 10: start teh expo app
# CMD ["expo","start"]
