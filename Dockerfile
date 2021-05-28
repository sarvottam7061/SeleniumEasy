FROM cypress/browsers:node14.16.0-chrome90-ff88

# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
ENTRYPOINT ["npm", "run", "mocha", "--browser chrome" ]

#docker build -t seleniumeasy .
#docker run -it seleniumeasy
#docker run -it -v %cd%:/e2e -w /e2e seleniumeasy
#docker run -it --entrypoint /bin/bash selenium