// create element test part 
const h2_textAreaPage =document.querySelector('.textarea-page-title');

const divCreateElementContainer=document.querySelector('.create-element-container');//root of new elements 

const inputTitleBox = document.querySelector(".input-note-title");
const inputTextleBox = document.querySelector(".txt");
const submitBtn = document.querySelector(".title-button");
const saveBtn=document.querySelector('.save-btn'); 

submitBtn.addEventListener('click',e=>{
    h2_textAreaPage.innerText=inputTitleBox.value;

});

saveBtn.addEventListener('click',saveNewNote);

function saveNewNote(title,text,index) {
    const ul_NotesPageContainer=document.createElement('ul');
    ul_NotesPageContainer.classList.add('notes-page-container');
    divCreateElementContainer.appendChild(ul_NotesPageContainer);

    const li_NotesPageContainer=document.createElement('li');
    li_NotesPageContainer.classList.add('notes-container');
    ul_NotesPageContainer.appendChild(li_NotesPageContainer);

    const header_NotesPageContainer=document.createElement('header');
    header_NotesPageContainer.classList.add('header');
    li_NotesPageContainer.appendChild(header_NotesPageContainer);

    const div1_headerNoteTitle_NotesPageContainer=document.createElement('div');
    div1_headerNoteTitle_NotesPageContainer.classList.add('settings-part-notes-page');
    header_NotesPageContainer.appendChild(div1_headerNoteTitle_NotesPageContainer);

    const ul_div_NotesPageContainer=document.createElement('ul');
    ul_div_NotesPageContainer.classList.add('tools-notes-page');
    div1_headerNoteTitle_NotesPageContainer.appendChild(ul_div_NotesPageContainer);

    const li_ul_div_NotesPageContainer=document.createElement('li');
    li_ul_div_NotesPageContainer.classList.add('fas');
    li_ul_div_NotesPageContainer.classList.add('fa-cog');
    ul_div_NotesPageContainer.appendChild(li_ul_div_NotesPageContainer);

    const div2_headerNoteTitle_NotesPageContainer=document.createElement('div');
    div2_headerNoteTitle_NotesPageContainer.classList.add('header-note-title');
    header_NotesPageContainer.appendChild(div2_headerNoteTitle_NotesPageContainer);

    const h2_div_headerNoteTitle_NotesPageContainer=document.createElement('h2');//Note Title 
    div2_headerNoteTitle_NotesPageContainer.appendChild(h2_div_headerNoteTitle_NotesPageContainer);//Note Title 
    h2_div_headerNoteTitle_NotesPageContainer.innerText=inputTitleBox.value;

    const div3_headerNoteTitle_NotesPageContainer=document.createElement('div');
    div3_headerNoteTitle_NotesPageContainer.classList.add('close-part');
    header_NotesPageContainer.appendChild(div3_headerNoteTitle_NotesPageContainer);

    const span_div3_headerNoteTitle_NotesPageContainer=document.createElement('span');
    div3_headerNoteTitle_NotesPageContainer.appendChild(span_div3_headerNoteTitle_NotesPageContainer);

    const a_span_div3_headerNoteTitle_NotesPageContainer=document.createElement('a');
    a_span_div3_headerNoteTitle_NotesPageContainer.classList.add('fas');
    a_span_div3_headerNoteTitle_NotesPageContainer.classList.add('fa-times');
    a_span_div3_headerNoteTitle_NotesPageContainer.classList.add('close-note');
    span_div3_headerNoteTitle_NotesPageContainer.appendChild(a_span_div3_headerNoteTitle_NotesPageContainer);

    const div_li_NotesPageContainer=document.createElement('div');
    div_li_NotesPageContainer.classList.add('txt-container');
    li_NotesPageContainer.appendChild(div_li_NotesPageContainer);

    const p_div_li_NotesPageContainer=document.createElement('p');//user text
    div_li_NotesPageContainer.appendChild(p_div_li_NotesPageContainer);//user text 
    p_div_li_NotesPageContainer.innerText=inputTextleBox.value;

    const footer_li_NotesPageContainer=document.createElement('footer');
    footer_li_NotesPageContainer.classList.add('footer');
    li_NotesPageContainer.appendChild(footer_li_NotesPageContainer);

    const button_footer_li_NotesPageContainer=document.createElement('button');//save button
    button_footer_li_NotesPageContainer.classList.add('save-btn');//save button
    footer_li_NotesPageContainer.appendChild(button_footer_li_NotesPageContainer);//save button
    button_footer_li_NotesPageContainer.innerText='Edit';//save button
}







showTasks();



submitBtn.onclick = () => {

    let userData = inputTitleBox.value;
    let getLocalstorage = localStorage.getItem("New Note");

    if (getLocalstorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalstorage);
    }

    listArr.push(userData);
    localStorage.setItem("New Note", JSON.stringify(listArr));
    showTasks();

};


saveBtn.onclick = () => {

    let userData = inputTextleBox.value;
    let getLocalstorage = localStorage.getItem("New Note");

    if (getLocalstorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalstorage);
    }

    listArr.push(userData);
    localStorage.setItem("New Note", JSON.stringify(listArr));
    showTasks();

};



function showTasks() {

    let getLocalstorage = localStorage.getItem("New Note");

    if (getLocalstorage === null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalstorage);
    }

    listArr.forEach((title,text,index) => {

        ul_NotesPageContainer.append(saveNewNote(title,text,index));
    });
    inputTextleBox.value = "";
    inputTitleBox.value = "";
};
 