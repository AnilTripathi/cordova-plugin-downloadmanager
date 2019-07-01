var exec = require('cordova/exec');

exports.download = function(url,fileName, success, error) {
    exec(success, error, "DownloadManager", "download", [url,fileName]);
};
