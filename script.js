let input = document.querySelector('#input');
let li = document.querySelectorAll('li');
let submit = document.querySelector('#submit');

let requerments = [
    {regex : /.{8,}/,index : 0},
    {regex : /[A-Z]/,index : 1},
    {regex : /[^A-Za-z0-9]/,index : 2},
    {regex : /[0-9]/,index : 3},
    {regex : /[a-z]/,index : 4}
];
input.addEventListener('keyup',(e)=>{
requerments.forEach(item=>{
    const isvalid = item.regex.test(e.target.value);
    let requermentitem = li[item.index]
    if(isvalid){
        requermentitem.style.opacity='1'
        requermentitem.setAttribute('class','verified')
    }else{
        requermentitem.style.opacity='.5'
        requermentitem.removeAttribute('class','verified')
    }
})
let liAttibuteset = []
li.forEach(item=>{
    let hasAttibute = item.getAttribute('class','verified')
    if (hasAttibute) {
        liAttibuteset.push(hasAttibute)
    }
})
// console.log(liAttibuteset)
if (liAttibuteset.length === li.length) {
    submit.removeAttribute('disabled')
}else{
    submit.setAttribute('disabled',true)
}
})