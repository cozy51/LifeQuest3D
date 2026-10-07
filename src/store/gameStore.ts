import {create} from 'zustand';
import {board} from '../data/board';
import {pickEvent} from '../data/events';
import type {Effect,LifeEvent,Phase,Stats} from '../types/game';
export const initialStats:Stats={money:100000,happiness:50,experience:0,health:100,age:18,job:'学生',turn:0};
export function applyEffect(stats:Stats,effect:Effect):Stats{return {...stats,...effect,money:Math.max(0,stats.money+(effect.money??0)),happiness:Math.max(0,Math.min(100,stats.happiness+(effect.happiness??0))),health:Math.max(0,Math.min(100,stats.health+(effect.health??0))),experience:Math.max(0,stats.experience+(effect.experience??0))};}
export const score=(s:Stats)=>Math.round(s.money/10000+s.happiness*10+s.experience*8+s.health*5);
export const lifeType=(s:Stats)=>s.experience>=80?'経験豊富な冒険家':s.happiness>=80?'幸福重視':s.job==='お店のオーナー'?'挑戦者':s.money>=400000?'仕事の達人':'穏やかな暮らしの達人';
type GameState={stats:Stats;position:number;target:number;dice:number;phase:Phase;event:LifeEvent|null;lastEffect:Effect|null;history:string[];beginRoll:()=>void;finishRoll:(value:number)=>void;step:()=>void;resolve:(choice?:number)=>void;restart:()=>void};
export const useGameStore=create<GameState>((set,get)=>({stats:{...initialStats},position:0,target:0,dice:1,phase:'ready',event:null,lastEffect:null,history:[],
beginRoll:()=>{if(get().phase==='ready')set({phase:'rolling',lastEffect:null});},
finishRoll:(value)=>{if(get().phase!=='rolling')return;const dice=Math.max(1,Math.min(6,Math.floor(value)));set({dice,target:Math.min(board.length-1,get().position+dice),phase:'moving',stats:{...get().stats,turn:get().stats.turn+1}});},
step:()=>{const s=get();if(s.phase!=='moving')return;const position=Math.min(s.position+1,s.target);const stats={...s.stats,age:board[position].age};if(position<s.target){set({position,stats});return;}if(position===board.length-1){set({position,stats,phase:'goal'});return;}set({position,stats,phase:'event',event:pickEvent(board[position].type)});},
resolve:(choice)=>{const s=get();if(s.phase!=='event'||!s.event)return;const effect=s.event.choices?s.event.choices[choice??-1]?.effect:s.event.effect;if(!effect)return;set({stats:applyEffect(s.stats,effect),lastEffect:effect,history:[s.event.title,...s.history].slice(0,4),phase:'ready',event:null});},
restart:()=>set({stats:{...initialStats},position:0,target:0,dice:1,phase:'ready',event:null,lastEffect:null,history:[]})}));
