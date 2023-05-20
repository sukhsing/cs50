if(!localStorage.getItem('counter')){
    localStorage.getItem('counter', 0);
}

// let counter = 0;
function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    // alert(counter);
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
    // function for alert popup with total count
    // if (counter%10 === 0){
    //     alert(`Count is now : ${counter}`);
    // }
}

// function hello(){
//     const heading = document.querySelector('h1');
//     if (heading.innerHTML == 'Hello!') {
//         heading.innerHTML='Goodbye!';
//     } else {
//         heading.innerHTML='Hello!';
//     }
// }

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    // setInterval(count, 1000);
});