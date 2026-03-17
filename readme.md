# unack

this is unack. it's a simple extension that stops discord from knowing when you read a message. it blocks the `/ack` network requests that discord sends out when you click on a channel or message. this lets you view channels without triggering read receipts.

## features

* blocks tracking: blocks all `discord.com*/ack` requests.
* persistent background: uses manifest v2 to stay persistent in the background so it is always active.
* user interface: includes a simple dark mode popup to toggle the blocking on and off.
* persistent state: saves your toggle choice in local storage so it remembers your preference.

## how it works

it uses the `webrequest` and `webrequestblocking` apis from manifest v2. when you turn on the toggle in the popup, the background script listens for any network request discord makes to an `/ack` endpoint. if it sees one, it blocks it before it leaves your browser. the popup communicates with the background script using chrome's local storage api to keep everything in sync. 

## installation

1. download or clone this folder
2. open chrome and go to `chrome://extensions/` or your preferred browser (Must be chromium based)
3. turn on developer mode in the top right corner
4. click load unpacked on the top left
5. select the `unack` folder that contains these files
6. pin the extension for easy access to the toggle

## structure

* `manifest.json`: sets the permissions needed for the extension to run
* `bg.js`: the background script that handles the request blocking
* `popup.html` & `popup.css`: the code for the popup menu and toggle switch
* `popup.js`: the logic for the toggle switch that updates your storage

## note on manifest v2

this extension uses manifest v2 because manifest v3 makes background service workers go to sleep after inactivity. we need this extension running consistently in the background to ensure read receipts are blocked without fail.
