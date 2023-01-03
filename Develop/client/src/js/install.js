const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("beforeinstallprompt fired");
    event.preventDefault();

    deferredPrompt = event;

    butInstall.hidden = false;

    beforeinstallprompt.addEventListener("click", butInstall);



});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

function eventHandler(butInstall) {
    if (butInstall.type === 'click') {
        console.log("butInstall CLICKED PWA accepted");

        butInstall.hidden = true;
    }
    else {
        console.log("PWA install rejected");
    }
};

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});

function eventHandler(appinstalled) {
    if (appinstalled.type === 'click') {
        console.log('appinstalled');
    }
};