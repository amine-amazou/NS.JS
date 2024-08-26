/*!
    NS.JS - 1.0.0
    Author: Amine Amazou
    Description: NS.JS simplifies network state management with powerful tools for handling online and offline scenarios right in the browser. Keep your web apps responsive and reliable, no matter the connectivity.
    Error Scripts: Amine Amazou & ChatGPT (AI Assistant)
    Documentation: 
    Github Link: 
    Copyright © 2024 amazou
    Licensed under the MIT license.
    https://github.com/amine-amazou/NS.JS/blob/main/LICENSE
*/

;(function() {
    "use strict"
    class NetworkStateError extends Error {
        constructor(code) {
            super();
            this.message = this.#from_code(code)
            this.name = 'NS.JS Error';
            Error.captureStackTrace(this, this.constructor);
        }
        #errors = {
            102: "Some features of this library are unavailable because your browser does not support online and offline events.",
        }
        #from_code = code => this.#errors[code];
    }

    window.isOnline = () => navigator.onLine;
    window.isOffline = () => !navigator.onLine;

    if(!'onLine' in navigator) throw new NetworkStateError(102);

    const handleState = (state, callback = null) => {
        let online = navigator.onLine
        if(!callback) return (() => state == 'online' ? online : !online)();
        else return window.addEventListener(state, callback);
    }

    let Online = (callback = null, onload = false, onloadcallback = null) => {
        if(onload && navigator.onLine) onloadcallback ? onloadcallback() : callback();
        handleState('online', callback)
    } 
    
    const Offline = (callback = null, onload = false, onloadcallback = null) => {
        if(onload && !navigator.onLine) onloadcallback ? onloadcallback() : callback();
        handleState('offline', callback)
    }

    window.isOnline = Online;
    window.isOffline = Offline;

})();
