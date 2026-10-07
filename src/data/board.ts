import type {TileType} from '../types/game';
export const GAME_TITLE = 'LIFE QUEST 3D';
export const tileStyles:Record<TileType,{color:string;label:string;icon:string}>={start:{color:'#7ec9ba',label:'旅のはじまり',icon:'▶'},normal:{color:'#fff5db',label:'日常',icon:'•'},money:{color:'#f6ca55',label:'お金',icon:'¥'},happy:{color:'#ef9eae',label:'しあわせ',icon:'♥'},job:{color:'#7bb8dc',label:'仕事',icon:'◆'},event:{color:'#b4a0df',label:'できごと',icon:'★'},choice:{color:'#90be79',label:'選択',icon:'?'},bad:{color:'#e58e76',label:'ハプニング',icon:'!'},goal:{color:'#edbb42',label:'ゴール',icon:'⚑'}};
const types:TileType[]=['start','money','happy','job','normal','choice','event','happy','bad','money','choice','event','job','happy','normal','choice','bad','event','money','goal'];
const points:number[][]=[[-9,0,5],[-7,0,5],[-5,0,5],[-3,0,5],[-1,.15,5],[1,.4,5],[3,.7,4],[4,.9,2],[4,.9,0],[3,.7,-2],[1,.5,-3],[-1,.25,-3],[-3,0,-3],[-5,0,-3],[-7,.2,-3],[-8,.5,-5],[-7,.8,-7],[-5,1,-7],[-3,1,-7],[-1,1,-7]];
export const board = types.map((type,index)=>({index,type,position:points[index] as [number,number,number],age:Math.round(18+index*3)}));
