
try{
    pipeline()
} catch(e){
    currentBuild.result = "UNSTABLE"
    println e
}

def pipeline(){
    node("linux"){

    stage("checkout repository"){
        git url: "https://github.com/js-soft/wdi5.git", branch: "develop"
    }

	stage("install dependencies"){
	    sh "npm install"
	}

	stage("test android"){
	    sh "npm run test:android:bs"
	}

	stage("test ios"){
	    sh "npm run test:ios:bs"
	}
    }
}
