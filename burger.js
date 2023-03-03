
let menu = { 
    burgertop: "./img/burgertop.png",
    cutlet: "./img/cutlet.png",
    salat: "./img/salat.png",
    chesse: "./img/chesse.png",
    tomato: "./img/tomato.png",
    bottom: "./img/burgerbottom.png",
 };
 
 const bottom  = document.getElementById('bottom');
 const cutlet = document.getElementById('cutlet');
 const salat = document.getElementById('salat');
 const chesse = document.getElementById('chesse');
 const tomato = document.getElementById('tomato');
 const burgertop = document.getElementById('burgertop');
 const box = document.querySelector('.box')
 const img = document.querySelector('.img');
 
 
 let order = (burger,bottom ) => {
     setTimeout(() => {
         burger()
         bottom()
     }, 2000)
 }
 
 function  start () {
     setTimeout(() => {
         bottom.src = "./img/burgerbottom.png"
     }, 1000);
 } 
 
 
 function body () {
     setTimeout(() => {
         bottom.src = "./img/burgerbottom.png"
     setTimeout(() => {
        tomato.src =  "./img/tomato.png"
     setTimeout(() => {
         salat.src = "./img/salat.png"
     setTimeout(() => {
         chesse.src = "./img/chesse.png"
     setTimeout(() => {
         cutlet.src = "./img/cutlet.png"
     setTimeout(() => {
         burgertop.src = "./img/burgertop.png"
     }, 2000);
     }, 2000);
     }, 2000);
     }, 2000);
     }, 2000);
     }, 2000);   
 }
 
 order(body)
 
  function myDisplayer(some) {
     document.getElementById('demo').innerHTML = some;
  }
 