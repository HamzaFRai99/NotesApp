const Pbtn = document.querySelector('.pbtn ');
const hidePbtn = document.querySelector('.page-btn ');

const NotesTitleCont = document.querySelector('.enter-note-title');
const hideNotesTitleCont=document.querySelector('.enter-note-title button');
const colseNoteTitle = document.querySelector('.close-note-title');

const hideNotesCont = document.querySelector('.notes-container');
const colseNote = document.querySelector('.close-note');

const pageTitle = document.querySelector('.page-title');
const h1_pageTitle = document.querySelector('.page-title h1');
const span_pageTitle = document.querySelector('.page-title span');
const rotateIcon = document.querySelector('.pagefas');

const saveIcon = document.querySelector('.save-icon');
const userNotesPage = document.querySelector('.user-notes-page');



Pbtn.addEventListener('click', e => {
    hidePbtn.classList.toggle('hide-page-pbtn');
    NotesTitleCont.classList.toggle('enter-note-title-hide-cont');
    pageTitle.classList.toggle('hide-cont');

});



hideNotesTitleCont.addEventListener('click', e => {

    NotesTitleCont.classList.toggle('enter-note-title-hide-cont');
    hideNotesCont.classList.toggle('hide-cont');

});


colseNoteTitle.addEventListener('click', a => {
    hidePbtn.classList.toggle('hide-page-pbtn');
    pageTitle.classList.toggle('hide-cont');
    NotesTitleCont.classList.toggle('enter-note-title-hide-cont');
});

colseNote.addEventListener('click', a => {
    NotesTitleCont.classList.toggle('enter-note-title-hide-cont');
    hideNotesCont.classList.toggle('hide-cont');
});


h1_pageTitle.addEventListener("mouseover", a => {

    span_pageTitle.classList.toggle('hove-white');
    h1_pageTitle.classList.toggle('hove-green');

});


span_pageTitle.addEventListener("mouseover", a => {

    h1_pageTitle.classList.toggle('hove-green');
    span_pageTitle.classList.toggle('hove-white');
});


Pbtn.addEventListener("mouseover", a => {

    rotateIcon.classList.add('rotate-icon');
    Pbtn.classList.add('hove-radius-pbtn');
    console.log('run');
    h1_pageTitle.classList.add('hove-green');
    span_pageTitle.classList.add('hove-white');
});


Pbtn.addEventListener("click", a => {

    rotateIcon.classList.remove('rotate-icon');
    Pbtn.classList.remove('hove-radius-pbtn');

    console.log('yes');
});

saveIcon.addEventListener("click", a => {

    userNotesPage.classList.remove('notes-page-hidden');
    hideNotesCont.classList.add('hide-cont');


});

const sett_cont=document.querySelector('.sett-cont ');
const settingsIcon=document.querySelector('.fa-cog');
const settingsIcon_container=document.querySelector('.settings-icon-container');

settingsIcon.addEventListener("click", a => {

     settingsIcon_container.classList.toggle('settings-icon-container-animation');
    //themeColorContainer.classList.toggle('theme-colors-container-animation');
    sett_cont.classList.toggle('visibility-hidden');

});


const themeColor=document.querySelector('.theme-color');
const themeColorContainer=document.querySelector('.theme-colors-container ');

themeColor.addEventListener("click", a => {

    themeColorContainer.classList.toggle('theme-colors-container-animation');
    themeColorContainer.classList.toggle('visibility-hidden');
    settingsIcon_container.classList.toggle('settings-icon-container-animation');
    settingsIcon_container.classList.toggle('hidden');

});


const left_back=document.querySelector('.left-back');
left_back.addEventListener("click", a => {
    themeColorContainer.classList.toggle('theme-colors-container-animation');
    settingsIcon_container.classList.toggle('settings-icon-container-animation');
    settingsIcon_container.classList.toggle('hidden');
    themeColorContainer.classList.toggle('visibility-hidden');




});

// Pbtn.addEventListener("mouseover", a => {

//     rotateIcon.classList.toggle('change-color-pagefas');


// });




