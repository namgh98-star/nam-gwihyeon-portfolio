import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('site');let checked=0;
async function walk(dir){for(const ent of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,ent.name);if(ent.isDirectory()){await walk(file);continue;}if(!file.endsWith('.html'))continue;const html=await readFile(file,'utf8');if(!html.includes('lang="ko"'))throw Error(file+' 한국어 누락');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);if(new Set(ids).size!==ids.length)throw Error('중복 ID '+file);for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:)/.test(href))continue;const [url,hash]=href.split('#');const target=url?path.resolve(path.dirname(file),url):file;const content=await readFile(target,'utf8');if(hash&&!content.includes(`id="${hash}"`))throw Error('잘못된 앵커 '+href);}checked++;}}
await walk(root);console.log(`${checked}개 HTML: 한국어, 내부 링크, 자산, 앵커, 중복 ID 검사 통과`);
