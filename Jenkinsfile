
try{
    pipeline()
} catch(e){
    currentBuild.result = "UNSTABLE"
    println e
}


def pipeline(){
    parallel android : {
        node("linux"){
            build("android")
        }
    }
}

def build(platform){
    stage("build $platform"){
        cleanWs()
        git url: "https://github.com/js-soft/wdi5.git", branch: "develop"

        sh "npm install"
        sh "npm run _build:${platform}_app"
    }
}

def test(platform){
    stage("test $platform"){
<<<<<<< HEAD
        sh "npm run test:${platform}:bs"
=======
        sh "npm run test:android:bs"
>>>>>>> feat: build in parallel
    }
}
