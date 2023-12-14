let calendar_src = "https://calendar.google.com/calendar/embed?";

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
    calendar.setAttribute("src", calendar_src);

    let main_list = document.getElementById("main");
    if(parseInt(getComputedStyle(main_list).height) < 500){
        calendar.style.height = "450px";
    }
    else{calendar.style.height = "90%";}
    calendar.style.width = "100%";
    form.appendChild(calendar);

    let src_box = document.createElement("input");
    src_box.setAttribute("id", "src_box");
    src_box.style.width = "80%";
    src_box.value = calendar_src;
    form.appendChild(src_box);

    let update_cal = document.createElement("button");
    update_cal.setAttribute("id", "update_cal");
    update_cal.innerHTML = "Update";
    update_cal.style.marginTop = "0";
    update_cal.style.width = "18%";
    update_cal.style.height = "30px";
    update_cal.setAttribute("onclick", "update_calendar_src()");
    form.appendChild(update_cal);
}

function reset_calendar(form){
    let calendar = document.getElementById("calendar");
    form.removeChild(calendar);

    let src_box = document.getElementById("src_box");
    form.removeChild(src_box);

    let update_cal = document.getElementById("update_cal");
    form.removeChild(update_cal);
}

function update_calendar_src(){
    let src_box = document.getElementById("src_box");
    let source = src_box.value;

    calendar_src = source;
    let calendar = document.getElementById("calendar");
    calendar.setAttribute("src", calendar_src);
}
