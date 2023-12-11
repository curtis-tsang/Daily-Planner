function visualize_calendar(){
    let form = document.getElementById("Calendar");
    let display = form.style.display;
    if(display === "" || display === "initial"){
        form.style.display = "none";
        reset_calendar(form);
    }
    else{
        form.style.display = "initial";
        set_calendar(form);
    }
}

function set_calendar(form){
    let calendar = document.createElement("iframe");
    calendar.setAttribute("id", "calendar");
    calendar.setAttribute("src", "https://calendar.google.com/calendar/embed");
    calendar.style.width = "80%";
    calendar.style.height = "300px";
    form.appendChild(calendar);
}

function reset_calendar(form){
    let calendar = document.getElementById("calendar");
    form.removeChild(calendar);
}