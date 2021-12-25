window.onload=function(){
    const manifest = chrome.runtime.getManifest();
    const version = manifest.version;
    versionBox.innerText = version;
}