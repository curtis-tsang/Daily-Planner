const blank_name = ["Name", "Date", "Time", "Venue", "Remarks"];

function visualize_edit_form(signal){
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

    create_input("delete_box", form);
    create_new_line("delete_box", form);
    create_button("delete_button", "DELETE", "click_del()", form);

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

    delete_input("delete_box", form);
    delete_new_line("delete_box", form);
    delete_button("delete_button", form);
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
    let item = document.createElement("li");                //create a listed item in ordered list
    item.setAttribute("id", arr[0].concat("_ID"));
    item.setAttribute("class", "task_item");
    
    create_text("h2", arr[0], arr[0].concat("_node"), item);
    for(let i=1; i<arr.length; i++){
        let child_node = document.createElement("p");
        child_node.textContent = blank_name[i].concat(" : ", arr[i]);
        child_node.style.lineHeight = "0.5";
        item.appendChild(child_node);
    }

    let list = document.getElementById("list");
    list.appendChild(item);
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
        document.getElementById(blank_name[i]).value = "";
    }
    create_event(arr);
    document.getElementById("result").innerHTML = "submission received";
}

function delete_item(response){
    let list = document.getElementById("list");
    let x = document.getElementById(response.concat("_ID"));
    list.removeChild(x);
}

function click_del(){
    response = document.getElementById("delete_box").value;
    delete_item(response);
    document.getElementById("result").innerHTML = "Deletion finished";
    document.getElementById("delete_box").value = "";
}