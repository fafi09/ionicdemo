1.追加一个component tab
ng generate page tab4 -m

2.部署app
ionic cordova platform add android
ionic cordova prepare android
ionic cordova run android
修改
D:\ionicbuild\demo\platforms\android\build.gradle
project.ext {
      defaultBuildToolsVersion="26.0.2" //String
      defaultMinSdkVersion=19 //Integer - Minimum requirement is Android 4.4
      defaultTargetSdkVersion=26 //Integer - We ALWAYS target the latest by default
      defaultCompileSdkVersion=26 //Integer - We ALWAYS compile with the latest by default
    }
    
D:\ionicbuild\demo\platforms\android\project.properties
target=android-26


D:\ionicbuild\demo\platforms\android\CordovaLib\project.properties
target=android-26