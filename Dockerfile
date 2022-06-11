FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
VOLUME [ "/app/node_modules" ]
CMD ["npm", "run", "dev"]

# docker build -t hellojs:latest .
# docker run -p 3000:3000 hellojs
# docker stop hellojs
################################################################################
# docker build -t node-app .
# docker run -p 3000:3000 -v /Users/azerc/Desktop/DOCKER/node:/app node-app