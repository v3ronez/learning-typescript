/* eslint-disable */

const nome: string = 'Veronez';
const idade: number = 20;
const adultp: boolean = true;
const symbol: symbol = Symbol('qualquer-symbol');
// const bit: bigint = 10n;

let arrayOfNumbers: Array<number> = [1, 2, 3, 4]
let arrayOfstrings: string[] = ['maria', 'joao']

let newObj: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'veronez2',
  idade: 20,
  adulto: false
}
// console.log(newObj.nome);

function soma(x: number, y: number): number {
  return x + y
}
console.log(soma(11, 10));





//return void
function falaVoid(...args: string[]): void {
  console.log(args.join(' '));
}
falaVoid('ola', 'henrique')


//OBJ
const objtA: { chaveA: string, chaveB: number, [key: string]: unknown } = {
  chaveA: 'A',
  chaveB: 20
}
objtA.chaveA = 'ola'
objtA.chaveC = 'teste'


//ARRAY

export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc + valor, 0)
}
// console.log(multiplicaArgs(3,4,6));


//TUPLE - array tipado
const dados: readonly [string, number] = ['teste', 10]; //readonly vira imutavel
// dados[0] = 'teste2';  ERRO
// dados[1] = 20;        ERRO


//Never
function criaErro(): never {
  throw new Error('error qualquer')
}

//tipo Enum
enum Cores {
  vermelho,
  azul,
  amarelo
}

console.log(Cores[2]) // amarelo
console.log(Cores.amarelo) // 2

//TIPO Unknown
// checar tipo antes de utilizar o dado




//Union types - mais de um tipo de retorno

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  // if (typeof a === 'string' && typeof b === 'string') return a + b
  return `${a} ${b}`
}
console.log(addOrConcat(10, 20))
console.log(addOrConcat('oi', 'alou'))

//Tipos literais
let a = 100 as const

//Type alias
type Idade = number;
type Pessoa = {
  nome: string,
  sobrenome: string
  idade: Idade,
  endereco: string,
  corPreferida?: string
}
type CoresRGB = 'vermelho' | 'verde' | 'azul'
type CoresCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferidaDaVida = CoresRGB | CoresCMYK

const aluno: Pessoa = {
  nome: 'henrique',
  sobrenome: 'veronez',
  idade: 20,
  endereco: 'Rua dos bobos',
}
// console.log(aluno);


export function setCor(pessoa: Pessoa, cor?: corPreferidaDaVida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}
console.log(setCor(aluno, 'azul'))
console.log(setCor(aluno))


// Intersection Types
