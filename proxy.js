/* Yakbak Simple Server
 *
 * REMOTE_SERVER - the endpoint you want to proxy
 * PROXY_PORT    - the proxy port (defaults to 7000)
 *
 * See more about yakbak at https://github.com/flickr/yakbak
 */

var http = require('http');
var yakbak = require('yakbak');

var remoteServer = process.env.REMOTE_SERVER || process.argv[2];
var proxyPort = process.env.PROXY_PORT || 7000;

if(remoteServer == undefined) {
  console.error('! You must provide an remote server as an arg');
    process.exit(-1);
}

console.info('Flickr yakbak');
console.info('---------------------------------------------------------------');
console.info('Remote server: ' + remoteServer);
console.info('Local proxy: http://localhost:' + proxyPort);
console.info('')
console.info('Hit ^C to exit')

process.on('SIGINT', function() {
    process.exit();
});

http.createServer(yakbak(remoteServer, {
    dirname: '/tapes'
})).listen(proxyPort);
