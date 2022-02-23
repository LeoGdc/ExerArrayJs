'use strict'

const numeros = [20, 131, 70, 279, 320]

// PROBLEMA - Acrescentar 100 a cada elemento

// Solução Imperativa
// const limite = numeros.length  - 1
// let numeros100 = []
// for (let i=0; i<=limite;i++){
//     numeros100[i] = numeros[i] + 100
// }

//-----Solução Declarativa-----
//Map - Percorre o Array podendo modificar
// ou não e retornando um novo array de mesmo 
//tamanho

//1º Elemento (Valor)
//2º Índice 
//3º array

const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)

console.log("numero:", numeros)
console.log("numeros mais 100:", numeros100)


//PROBLEMA - Criar um novo array com o numero menores que 100

//Filter - percorre todo o array filtrando dependendo de uma 
//condição e retorna um array do mesmo tamanho ou menor.
// 1º Elemento 
// 2º Ìndice
// 3º Array


const ehMenor100 = (numero) => numero <= 100
const numerosMenores100 = numeros.filter(ehMenor100)

console.log ("Numeros Menores que 100", numerosMenores100)

//PROBLEMA - Somar Todos os Valores(elementos)

const somar = (a, b) => a + b
const numerosSomados = numeros.reduce(somar, 0)

console.log ("numeros somados", numerosSomados)

//REDUCE- Percorre todo a array aplicando um função (callback)
//e retornando um único valor.
//1º Acumulador
//2º Elemento (valor)
//3º Índice 
//4º Array

//Criar novo Array com os Valores ao Quadrado.
const quadrado = (numero) => numero *numero
const numeroQuadrado = numeros.map(quadrado)

console.log("Ao Quadrado", numeroQuadrado)

//Criar um novo Array com os valores Pares
const pares = (numero) => numero % 2 == 0
const numeroPar =numeros.filter(pares)

console.log("numeros pares",numeroPar)

//calcular media de valores

const media = (a,b)=> a+b /4
const numerosMedia = numeros.reduce(media, 0)

console.log ("Media de todos", numerosMedia)

//calcular a soma dos valores impares

const impares = (numero) => numero % 2 == 1
const numerosImpares = numeros.filter(impares)

const total = (a, b) => a + b
const numeroTotal =numerosImpares.reduce(total, 0)

console.log ("numero Impar Total", numeroTotal )

//calcular valor total , sabendo que de valor total teve 20% de desconto

const desconto = (valor) => valor * 0.8
const numeroDesconto =numeros.map(desconto)

const resultado = (a,b) => a+b
const resultadoDesconto = numeroDesconto.reduce(resultado,0)

console.log ("valor total com desconto",resultadoDesconto)

