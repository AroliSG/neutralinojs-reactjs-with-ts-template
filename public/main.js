// Feel free to use any frontend framework you like :)
// See more details: https://neutralino.js.org/docs/how-to/use-a-frontend-library
/*jshint esversion: 6 */
function showInfo() {
    document.getElementById('info').innerHTML = `
        ${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS}
        <br/><br/>
        <span>server: v${NL_VERSION} . client: v${NL_CVERSION}</span>
        `;
}

function openDocs() {
    Neutralino.os.open("https://neutralino.js.org/docs");
}

function openTutorial() {
    Neutralino.os.open("https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj");
}

function setTray() {
    if(NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "VERSION", text: "Get version"},
            {id: "SEP", text: "-"},
            {id: "QUIT", text: "Quit"}
        ]
    };
    // eslint-disable Neutralino
    Neutralino.os.setTray(tray);
}


function onTrayMenuItemClicked(event) {
    switch(event.detail.id) {
        case "VERSION":
            // eslint-disable-next-line
            Neutralino.os.showMessageBox("Version information",
            // eslint-disable-next-line
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            /* tslint:disable-next-line */
            // @ts-ignore: Neutralino
            // eslint-disable-next-line
            Neutralino.app.exit();
            break;
            default: return 0;
    }
}

function onWindowClose() {
    // eslint-disable-next-line
    Neutralino.app.exit();
}
// eslint-disable-next-line
Neutralino.init();
// eslint-disable-next-line
Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
// eslint-disable-next-line
Neutralino.events.on("windowClose", onWindowClose);
// eslint-disable-next-line
if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}

showInfo();
