# Using Node.js 20 image and exposing port 3000
FROM node:20-alpine3.20
EXPOSE 3000
# Setting environment variables
ENV HOME=/home/app
ENV TZ=America/Sao_Paulo
# Creating the application directory and granting permissions
ADD package.json $HOME/adashmin-backend/
#RUN chown -R app:app $HOME/*
# Setting the user and working directory and installing the dependencies
#USER app
WORKDIR $HOME/adashmin-backend
RUN npm install
# Setting the user back to root and copying the application files to the container
#USER root
ADD . $HOME/adashmin-backend
#RUN chown -R app:app $HOME/*
#USER app
# Running the application
CMD ["npm", "run", "prod"]