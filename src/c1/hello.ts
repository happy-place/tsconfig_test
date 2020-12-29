// import { b } from './me.js'
let a:number = 10
// a='haha'
console.log(a)

function add(a,b){
    return a+ b
}

console.log(add(1,2))
console.log(add('a','b'))

function print(){
    console.log(this)
}

let div = document.getElementById("div1")
// div.addEventListener('click',function (){
//     console.log("click")
// })

if (div != null){
    div.addEventListener('click',function (){
        console.log("click")
    })
}

div?.addEventListener('click',function (){
    console.log("click")
})