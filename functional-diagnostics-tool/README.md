## Functional Diagnostics Tool

### How to run FDT front-end on local?

  1. Download/Git clone this respository.
  2. Run `npm install` to download libraries and dependencies.
  3. Run `npm run-script getstart` to copy Metronic web template to the build folder.
  4. Run `npm start` to start web server and then FDT front-end can be accessed at http://localhost:8080
  4. [Optional] Run `npm test` to FDT to run unit-test cases

---
### How to compile this project and deploy to a web server?
  1. Run `npm install webpack -g`
  2. Run `webpack -p`.
  3. Copy the build folder to the webserver.
---
### When I enter the FDT URL (eg: http://myapp.com/fdt), it gives me 404 error. Why?

It is because FDT is using React-Router for client-side routing.  To access child URL directly from browser, please update the setting of the hosting server.  If you are using Apache Web server, please add the following lines in to the config file.  It can be added under <directory> or <VirtualHost>.

```
RewriteEngine On  
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

RewriteRule ^ /index.html [L]
```
For more information, please go to http://stackoverflow.com/questions/32150653/apache-web-server-doesnt-allow-me-to-refresh-on-about-but-on-localhost-its-wor

---
### If you are seeing errors like below when running `npm start`, it means that there is a process using port 8080 on your machine.  You can either kill the process or go to /node_modules/webpack-dev-server/bin/webpack-dev-server.js to change the port.


events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 127.0.0.1:8080
    at Object.exports._errnoException (util.js:1008:11)
    at exports._exceptionWithHostPort (util.js:1031:20)
    at Server._listen2 (net.js:1253:14)
    at listen (net.js:1289:10)
    at net.js:1399:9
    at GetAddrInfoReqWrap.asyncCallback [as callback] (dns.js:65:16)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:84:10)

npm ERR! Darwin 15.4.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.3.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! fdt@1.0.0 start: `mkdir -p build && cp src/index.html build/index.html && cp -R src/dist/home build/assets && cp -R src/dist/fdt build/assets && node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the fdt@1.0.0 start script 'mkdir -p build && cp src/index.html build/index.html && cp -R src/dist/home build/assets && cp -R src/dist/fdt build/assets && node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the fdt package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     mkdir -p build && cp src/index.html build/index.html && cp -R src/dist/home build/assets && cp -R src/dist/fdt build/assets && node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs fdt
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls fdt
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/tungc/Desktop/temp/functional-diagnostics-tool/npm-debug.log

---
Developed by Delivery team - Rover
