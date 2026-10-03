import http from 'node:http';
import {readFileSync} from 'node:fs';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
http.createServer((req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const file=resolve(root,'.'+decodeURIComponent(path==='/'?'/index.html':path));if(!file.startsWith(root+'/'))throw Error();const body=readFileSync(file);const types={'.html':'text/html','.mjs':'text/javascript','.css':'text/css','.png':'image/png'};res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Game running on port '+(process.env.PORT||3000)));
