pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials') // Replace with your Docker Hub credential ID in Jenkins
        DOCKER_IMAGE_BACKEND = 'your-dockerhub-username/mern-backend'
        DOCKER_IMAGE_FRONTEND = 'your-dockerhub-username/mern-frontend'
    }
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning Repository...'
                git branch: 'main', url: 'https://github.com/punit-appi/Mern-Devo-project.git'
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('SERVER') {
                        echo 'Building Backend Docker Image...'
                        sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                    }
                }
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('ONLINE_PG_RESERVATION_SYSTEM') {
                        echo 'Building Frontend Docker Image...'
                        sh 'docker build -t $DOCKER_IMAGE_FRONTEND .'
                    }
                }
            }
        }
        stage('Push Backend Image to Docker Hub') {
            steps {
                script {
                    echo 'Pushing Backend Docker Image...'
                    sh """
                        echo $DOCKER_HUB_CREDENTIALS_USR | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin
                        docker push $DOCKER_IMAGE_BACKEND
                    """
                }
            }
        }
        stage('Push Frontend Image to Docker Hub') {
            steps {
                script {
                    echo 'Pushing Frontend Docker Image...'
                    sh """
                        echo $DOCKER_HUB_CREDENTIALS_USR | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin
                        docker push $DOCKER_IMAGE_FRONTEND
                    """
                }
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Deploying Application with Docker Compose...'
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            echo 'Cleaning up Docker Images...'
            sh 'docker system prune -f'
        }
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
