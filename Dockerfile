FROM cypress/browsers:node14.16.0-chrome90-ff88

RUN apt-get install -y default-jre
# Install allure depenendencies
RUN apt-get update
RUN curl -o allure-2.13.7.tgz -Ls https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.13.7/allure-commandline-2.13.7.tgz
RUN tar -zxvf allure-2.13.7.tgz -C /opt/
RUN ln -s /opt/allure-2.13.7/bin/allure /usr/bin/allure

# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
ENTRYPOINT ["npm", "run", "cy:run" ]


#docker build -t sarvo7061/seleniumeasy . 

#docker run -it sarvo7061/seleniumeasy

#docker run -it -v %cd%/allure-results/:/app/allure-results/  sarvo7061/seleniumeasy
# -it          = interactive terminal
# -v %cd%:/e2e = map current folder to /e2e inside the container
#-w /e2e      = set working directy to /e2e

#docker run -it --entrypoint /bin/bash sarvo7061/seleniumeasy