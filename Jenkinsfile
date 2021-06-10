pipeline {
   agent any
   stages {
      stage('clone our git repository') {
          steps {
            
              bat("""
             
              git clone https://github.com/sarvottam7061/SeleniumEasy.git

              echo "pulled the code"
              """)

          }
      }
        stage('Build our Image') {
            steps {
                
                bat ("""
                cd SeleniumEasy
                docker build -t sarvo7061/seleniumeasy .
                
                """)
            }
        }

        stage('Deploy our image with some test ') {
            steps {
                
                  bat ("""
                cd SeleniumEasy
               docker run -v /mochawesome-report/:/app/mochawesome-report/ sarvo7061/seleniumeasy
                
                """)
            }
        }
                stage('publishing report' ) {
            steps {
                
                
                publishHTML (target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'SeleniumEasy/mochawesome-report',
                reportFiles: '',
                 reportName: 'My Reports',
                 reportTitles: 'The Report'])
                
            
            }
        }
       

         }

    
      }

