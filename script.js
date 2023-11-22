const info = document.getElementById("cources_active_item_1")
const infoOpen = document.getElementById("button_open_1")
const closeBtn = document.getElementById("button_close_1")

const bodySec   = document.body;

if(info && infoOpen) {
    infoOpen.addEventListener('click', () =>{
        info.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn.addEventListener('click', () =>{
        info.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
};

const info2 = document.getElementById("cources_active_item_2")
const infoOpen2 = document.getElementById("button_open_2")
const closeBtn2 = document.getElementById("button_close_2")


if(info2 && infoOpen2) {
    infoOpen2.addEventListener('click', () =>{
        info2.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn2.addEventListener('click', () =>{
        info2.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
}

const info3 = document.getElementById("cources_active_item_3")
const infoOpen3 = document.getElementById("button_open_3")
const closeBtn3 = document.getElementById("button_close_3")


if(info3 && infoOpen3) {
    infoOpen3.addEventListener('click', () =>{
        info3.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn3.addEventListener('click', () =>{
        info3.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
}