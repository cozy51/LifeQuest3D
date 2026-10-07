export type TileType = 'start'|'normal'|'money'|'happy'|'job'|'event'|'choice'|'bad'|'goal';
export type Stats = {money:number; happiness:number; experience:number; health:number; age:number; job:string; turn:number};
export type Effect = Partial<Omit<Stats,'age'|'turn'>>;
export type LifeEvent = {title:string; description:string; effect?:Effect; choices?:{label:string; effect:Effect}[]};
export type Phase = 'ready'|'rolling'|'moving'|'event'|'goal';
