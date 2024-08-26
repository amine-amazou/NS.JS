NS.JS

NS.JS is a lightweight JavaScript library designed to simplify the management of network state changes in web applications. It offers straightforward methods to handle online and offline states, making it easier to create resilient applications that react gracefully to network changes.

Description
NS.JS provides an intuitive API to monitor and manage network connectivity. With NS.JS, you can detect the network status when your webpage loads and respond to changes in network connectivity dynamically. This library ensures that your web application can adapt to changes in network conditions without unnecessary complexity.

## Table of Contents

  - [Features](#features)
  - [Usage](#usage)
  - [Demonstration](#demonstration)
  - [Credits](#credits)


## Features

- Handling Offline/Online State on Page Load: Detect the initial network state when the webpage is loaded.
- Handling Network State Changes: Automatically respond to changes in network connectivity with easy-to-use event listeners.
- Easy to Use: Simple API that integrates seamlessly into your existing code.
- Fast and Small: Minimal footprint for quick load times and efficient performance.
- 
Installation
You can include NS.JS in your project using a CDN or by installing it via npm.

Using CDN
Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/ns-js@latest/dist/ns-js.min.js"></script>
```

Using npm
Install the library via npm:

```bash
npm install ns-js
```
Then include it in your project:

```javascript
import 'ns-js';
```
## Usage

window.isOnline(callback, onload = false, onloadcallback = null)

Purpose: Registers a callback to be executed when the network state changes to online.
Parameters:
callback: Function to execute when the network becomes online.
onload: If true, executes onloadcallback immediately if the page is online on load.
onloadcallback: Function to execute if the page is online when it loads.

```javascript
window.isOnline(() => console.log('Online!'), true, () => console.log('Loaded and online!'));
```

window.isOffline(callback, onload = false, onloadcallback = null)

Purpose: Registers a callback to be executed when the network state changes to offline.

Parameters:
callback: Function to execute when the network becomes offline.
onload: If true, executes onloadcallback immediately if the page is offline on load.
onloadcallback: Function to execute if the page is offline when it loads.


```javascript
window.isOffline(() => console.log('Offline!'), true, () => console.log('Loaded and offline!'));
```

## Demonstration
You can see a live example of NS.JS in action on our demonstration project: <a href="https://am-i-online.vercel.app/" target="_blank"> Am I Online? </a>

## Credits
Developed by [Amine Amazou](https://github.com/amine-amazou).
Scripts by [ChatGPT](chatgpt.com).
Minified using [Toptal JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier).
