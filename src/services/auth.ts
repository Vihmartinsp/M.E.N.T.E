export type User={name:string;email:string};export type LoginInput={email:string;password:string};export type RegisterInput=User&{phone:string;password:string};export interface AuthService{login(input:LoginInput):Promise<User>;register(input:RegisterInput):Promise<User>;logout():void;getUser():User|null}
const KEY='mente_session';
// Troque esta classe por uma implementação HTTP de AuthService quando a API estiver disponível.
// A senha recebida existe apenas durante a chamada e nunca é persistida ou registrada.
class MockAuthService implements AuthService{async login({email}:LoginInput){const user={name:'Estudante',email};sessionStorage.setItem(KEY,JSON.stringify(user));return user}async register({name,email}:RegisterInput){const user={name,email};sessionStorage.setItem(KEY,JSON.stringify(user));return user}logout(){sessionStorage.removeItem(KEY)}getUser(){const value=sessionStorage.getItem(KEY);return value?JSON.parse(value)as User:null}}
export const authService:AuthService=new MockAuthService();
