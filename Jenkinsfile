
try{
    pipeline()
} catch(e){
    currentBuild.result = "UNSTABLE"
    println e
}


def pipeline(){
    node("linux"){
        withEnv(["ANDROID_HOME=/home/jenkins/Android/Sdk/", "ANDROID_SDK_ROOT=/home/jenkins/Android/Sdk/"]){
            build("android")
            test("android")
        }
    }
}

def build(platform){
    stage("build $platform"){
        cleanWs()
        git url: "https://github.com/js-soft/wdi5.git", branch: "develop"

        sh "yarn install"
        sh "yarn run _build:${platform}_app"
    }
}

def test(platform){
    stage("test $platform"){
        withCredentials([usernamePassword(credentialsId: 'wdi5-browserstack', passwordVariable: 'KEY', usernameVariable: 'USER')]) {
            def apkFile = "test/ui5-app/app/android.apk"

            sh "file $apkFile"

            def response = sh(returnStdout: true, script:
                              "curl"
                              + " -u '$USER:$KEY'"
                              + " -X POST 'https://api-cloud.browserstack.com/app-automate/upload'"
                              + " -F file=@$apkFile"
            )

            def appHash = readJSON(text: response).app_url.replace("bs://", "")
            println "appHash: $appHash"

            def envContent = readFile(".env.example")
                                .replace("Browserstack usermname", USER)
                                .replace("Browserstack accesskey", KEY)
                                .replace("Browserstack app hash $platform", appHash)

            writeFile file: ".env", text: envContent

            sh "yarn run test:${platform}:bs"
        }
    }
}
