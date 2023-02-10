
let sample = document.querySelector('.sample')
let secondHand = document.querySelector('.secondHand')
let minuteHand = document.querySelector('.minuteHand')
let spans = document.querySelectorAll('.b')

setInterval(()=>{
    let time = new Date()
    let seconds = time.getSeconds()
    secondHand.style.cssText = 'transform: rotate(calc(6deg * ' + seconds + ' + 182deg))'

    spans[59].style.cssText = 'font-size: initial; color: white'
   spans[seconds].style.cssText= 'color: red;    text-shadow: 0px -10px 5px red;'
   spans[seconds-1].style.cssText = 'color: white'
}, 1000)

setInterval(()=>{
    let time = new Date()
    let minutes = time.getMinutes()
    minuteHand.style.cssText = 'transform: rotate(calc(6deg * ' + minutes + ' + 180deg))'
    spans[59].style.cssText = 'font-size: initial; color: white'
    spans[minutes].style.cssText= 'color:  rgb(0, 225, 255);    text-shadow: 0px -10px 5px  rgb(0, 225, 255);'
    spans[minutes-1].style.cssText = 'color: white'
}, 1000)

let shortHand = document.querySelector('.shortHand')
setInterval(()=>{
    let time = new Date()
    let hours = time.getHours()
    sample.innerHTML = hours
    if(hours <13){
    shortHand.style.cssText = 'transform: rotate(calc(30deg *' + hours + ' + 180deg)); z-index: -1'
    }
    else{
    shortHand.style.cssText = 'transform: rotate(calc(30deg *' + (hours-12) + ' + 180deg)); z-index: -1'
    }

}, 1000)
console.log(spans)