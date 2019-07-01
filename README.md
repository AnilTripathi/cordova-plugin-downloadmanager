# cordova-plugin-downloadmanager
A Cordova plugin to download file in system's default download manager

## Supported Platforms

 - Android (SDK >= 11)

 ## Installation

 ```
 cordova plugin add https://github.com/AnilTripathi/cordova-plugin-downloadmanager
 ```

 ## How to Use 

 ```
 //after device is ready
var fail = function (message) {    
    alert(message)
}
var success = function (data) {
        console.log("succes");
}
cordova.plugins.DownloadManager.download("Your URL to download","fileName", success, fail);
<<<<<<< HEAD
 ```
=======
 ```
>>>>>>> e0523e302d61da9ac4daece3b6a8f2304e700503
