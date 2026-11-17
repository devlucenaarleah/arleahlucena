import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.ico':'image/x-icon'};
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);return res.end('Forbidden');}try{if((await stat(file)).isDirectory())file=path.join(file,'index.html');}catch{}const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Page not found');}}).listen(Number(process.env.PORT)||3000,()=>console.log('Pangasinan running at http://localhost:'+(process.env.PORT||3000)));
