pipeline { 

    environment { 

        registry = "sarvo7061/seleniumeasy" 

        registryCredential = 'dockerhub_id' 

        dockerImage = '' 

    }

    agent any 

    stages { 

        stage('Cloning our Git') { 

            steps { 

                git 'https://github.com/sarvottam7061/SeleniumEasy.git' 

            }

        } 

        stage('Build Image') {
            steps {
                
                bat "docker build -t='sarvo7061/seleniumeasy' ."
            }
        }

 
    stage('build and test') {


      steps {
        bat "docker run -it='sarvo7061/seleniumeasy'"


        
      }
    }
  

    }

}


