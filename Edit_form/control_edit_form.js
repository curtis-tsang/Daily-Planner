const blank_name = ["Name", "Date", "Time", "Venue", "Remarks"];

let task_name_list = []; //store all task name for checking duplicate names

function visualize_edit_form(){
    let form = document.getElementById("EditForm");
    let display = form.style.display;
    if(display === "" || display === "initial"){
        form.style.display = "none";
        reset_edit_form(form);
    }
    else{
        form.style.display = "initial";
        set_edit_form(form);
    }
}

function set_edit_form(form){

    create_text("h3", "Create new event:", "heading", form);
    for(let i=0; i<blank_name.length; i++){
        create_text("span", blank_name[i], blank_name[i].concat("title"), form);
        create_new_line(blank_name[i].concat("_"), form);
        create_input(blank_name[i], form);
        create_new_line(blank_name[i], form);
    }

    create_button("submit_button", "SUBMIT", "click_submit()",form);
}

function reset_edit_form(form){
    delete_text("heading", form);

    for(let i=0; i<blank_name.length; i++){
        delete_text(blank_name[i].concat("title"), form);
        delete_new_line(blank_name[i].concat("_"), form);
        delete_input(blank_name[i], form);
        delete_new_line(blank_name[i], form);
    }

    delete_button("submit_button", form);
}

function create_text(ele, val, setID,form){
    let text = document.createElement(ele);
    let content = document.createTextNode(val);
    text.appendChild(content);
    text.setAttribute("id", setID);
    form.appendChild(text);
}

function delete_text(getID, form){
    let del_item = document.getElementById(getID);
    form.removeChild(del_item);
}

function create_button(setID, txt, func_call,form){
    let submit = document.createElement(setID);
    submit.setAttribute("id", setID);
    submit.setAttribute("onclick", func_call);
    submit.setAttribute("class", "normal_button");
    submit.textContent = txt;
    form.appendChild(submit);
}

function delete_button(getID ,form){
    let submit = document.getElementById(getID);
    form.removeChild(submit);
}

function create_input(setID, form){
    let input = document.createElement("input");
    input.setAttribute("id", setID);
    if(setID === "Date"){
        input.setAttribute("type", "date");
        let today = new Date().toJSON().slice(0,10);
        input.setAttribute("value", today);
    }
    if(setID === "Time"){
        input.setAttribute("type", "time");
    }
    form.appendChild(input);
}

function delete_input(getID, form){
    let del_item = document.getElementById(getID);
    form.removeChild(del_item);
}

function create_new_line(setID, form){
    let new_line = document.createElement("br");
    setID = setID.concat("_");
    new_line.setAttribute("id", setID);
    form.appendChild(new_line);
}

function delete_new_line(getID, form){
    getID = getID.concat("_");
    let del_line = document.getElementById(getID);
    form.removeChild(del_line);
}

//

//load the page

function create_event(arr){
    for(let i=0; i<task_name_list.length; i++){
        if(arr[0] === task_name_list[i]){
            window.alert("Tasks with duplicated names are not allowed !");
            return;
        }
    }

    let item = document.createElement("li");                //create a listed item in ordered list
    item.setAttribute("id", arr[0].concat("_ID"));
    item.setAttribute("class", "task_item");
    item.setAttribute("onmouseover", "del_icon_on(this.id)");
    item.setAttribute("onmouseout", "del_icon_off(this.id)");
    
    create_text("h2", arr[0], arr[0].concat("_node"), item);
    for(let i=1; i<arr.length; i++){
        let child_node = document.createElement("p");
        child_node.textContent = blank_name[i].concat(" : ", arr[i]);
        child_node.style.lineHeight = "100%";
        child_node.style.padding = "2px";
        child_node.style.margin = "0px";
        item.appendChild(child_node);
    }
    let del_icon = document.createElement("button");
    del_icon.setAttribute("id", arr[0].concat("_del_icon"));
    del_icon.setAttribute("onclick", "del_item(this.id)");
    del_icon.innerHTML = "&#x1F5D1;";
    del_icon.style.display = "none";
    item.appendChild(del_icon);
    
    let list = document.getElementById("list");
    list.appendChild(item);
    task_name_list.push(arr[0]);
}

function click_submit(){
    let arr = [];
    for(let i=0; i<blank_name.length; i++){
        response = document.getElementById(blank_name[i]).value;
        if(response === ""){
            arr.length += 1;
            arr[arr.length-1] = "";
        }
        else{
            arr.length += 1;
            arr[arr.length-1] = response;
        }
        if(blank_name[i] === "Date"){
            let today = new Date().toJSON().slice(0,10);
            document.getElementById(blank_name[i]).value = today;
        }
        else{document.getElementById(blank_name[i]).value = "";}
    }
    create_event(arr);
}

function delete_item(response){
    let list = document.getElementById("list");
    let x = document.getElementById(response.concat("_ID"));
    list.removeChild(x);
}

function del_item(id){
    id = id.substr(0, id.length-9);
    task_name_list = task_name_list.filter(function(element){ return element!=id; });
    id = id.concat("_ID");
    let del_item = document.getElementById(id);
    let form = document.getElementById("list");
    form.removeChild(del_item);
}

function del_icon_on(id){
    id = id.substr(0, id.length-3);
    id = id.concat("_del_icon");
    let del_icon = document.getElementById(id);
    del_icon.style.display = "initial";
}

function del_icon_off(id){
    id = id.substr(0, id.length-3);
    id = id.concat("_del_icon");
    let del_icon = document.getElementById(id);
    del_icon.style.display = "none";
}
