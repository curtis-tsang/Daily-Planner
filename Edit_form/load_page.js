document.getElementById("title").innerHTML = "To-do List";

let panel = [0];    // **edit form is excluded 1: calendar    2: to be cont'

//style of div
let div = document.querySelector("div").style;
div.backgroundColor = "rgba(150,250,150,0.5)";
div.margin = "5px";
div.padding = "5px";
div.border = "1px solid rgba(55,55,55,0.8)";
div.borderRadius = "15px";
div.boxShadow = "-2px -2px 4px 4px rgba(80,80,80, 0.6)";

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

function panel_command(index){
    for(let i=0; i<panel.length; i++){
        panel[i] = 0;
    }
    panel[index] = 1;
    control_calendar(panel[0]);
}
