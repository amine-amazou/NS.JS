<h1> NS.JS </h1>

NS.JS is a lightweight JavaScript library designed to simplify the management of network state changes in web applications. It offers straightforward methods to handle online and offline states, making it easier to create resilient applications that react gracefully to network changes.

**Description**

NS.JS provides an intuitive API to monitor and manage network connectivity. With NS.JS, you can detect the network status when your webpage loads and respond to changes in network connectivity dynamically. This library ensures that your web application can adapt to changes in network conditions without unnecessary complexity.

## Table of Contents
  
  - [Features](#features)
  - [Browser Support](#browser_support)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demonstration](#demonstration)
  - [Credits](#credits)

## Features

- **Handling Offline/Online State on Page Load**: Detect the initial network state when the webpage is loaded.
- **Handling Network State Changes**: Automatically respond to changes in network connectivity with easy-to-use event listeners.
- **Easy to Use**: Simple API that integrates seamlessly into your existing code.
- **Fast and Small**: Minimal footprint for quick load times and efficient performance.

## Browser Support

NS.JS utilizes the online and offline events provided by modern browsers. Here’s a list of browsers that support these events:

- **Google Chrome** (version 4+)
- **Mozilla Firefox** (version 6+)
- **Safari** (version 5.1+)
- **Microsoft Edge** (version 12+)
- **Opera** (version 12.1+)
- **Internet Explorer** (version 9+)
- **Mobile Browsers**: Most modern mobile browsers also support these events.

**Note**: If a browser does not support the online and offline events, the library functions will still return the network state (true for online, false for offline).
This ensures that your application can still check the network status even in environments with limited support.

## Installation
You can include NS.JS in your project using a CDN.

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/amine-amazou/ns-js@latest/dist/NS.min.js"></script>
```

## Usage

_isOnline(callback, onload = false, onloadcallback = null)_

**Purpose**: Registers a callback to be executed when the network state changes to online.

**Parameters**: <br>
_callback_: Function to execute when the network becomes online. <br>
_onload_: If true, executes onloadcallback immediately if the page is online on load. <br>
_onloadcallback_: Function to execute if the page is online when it loads. <br>

```javascript
isOnline(() => console.log('Online!'), true, () => console.log('Loaded and online!'));
```

_isOffline(callback, onload = false, onloadcallback = null)_

**Purpose**: Registers a callback to be executed when the network state changes to offline.

**Parameters**: <br>
_callback_: Function to execute when the network becomes offline. <br>
_onload_: If true, executes onloadcallback immediately if the page is offline on load. <br>
_onloadcallback_: Function to execute if the page is offline when it loads (Only applicable to pages that support offline functionality). <br>


```javascript
isOffline(() => console.log('Offline!'), true, () => console.log('Loaded and offline!'));
```

## Demonstration
You can see a live example of NS.JS in action on our demonstration project: [Am I Online?](https://am-i-online.vercel.app/)

## Credits

- Developed by [Amine Amazou](https://github.com/amine-amazou).
- Scripts by [ChatGPT](chatgpt.com).
- Minified using [Toptal JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier).
