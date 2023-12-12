document.getElementById("title").innerHTML = "To-do List";


//style of div
let div = document.querySelector("div").style;
div.backgroundColor = "rgba(150,250,150,0.5)";
div.margin = "5px";
div.padding = "5px";
div.border = "3px solid rgba(55,55,55,0.8)";

function add_buffer(digit){
    if(digit < 10) digit = "0" + digit;
    return digit;
}

function start_time(){
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    h = add_buffer(h);
    m = add_buffer(m);
    s = add_buffer(s);
    let clock = document.getElementById("clock");
    clock.innerHTML = h + ":" + m + ":" + s;
    setTimeout(start_time, 1000);
}
