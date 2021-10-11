let nav_btns = document.querySelectorAll('.nav_btn');
let nav_pointer = document.querySelector('.nav_pointer').style;

nav_btns.forEach(element => {
    element.addEventListener('mouseenter',(e)=>{
        nav_pointer_appear(e);
        
        let hidden_nav = document.querySelector(`.${e.target.getAttribute('data-btn_name')}_hidden_nav`);
        if(hidden_nav){
            hidden_nav_appear(hidden_nav,e);
        }
        
    })
});

nav_btns.forEach(element =>{
    element.addEventListener('mouseleave',(e)=>{
        nav_pointer_disappear();

        let hidden_nav = document.querySelector(`.${e.target.getAttribute('data-btn_name')}_hidden_nav`);
        if(hidden_nav){
            hidden_nav_disappear(hidden_nav);
        }
        
    })
})

function hidden_nav_appear(hidden_nav, e){
    hidden_nav.classList.remove('hidden'); 
    hidden_nav.style.top = `${e.target.offsetHeight}px`;
    hidden_nav.style.width = `${e.target.offsetWidth}px`;
}
function hidden_nav_disappear(hidden_nav){
    hidden_nav.classList.add('hidden'); 
}

function nav_pointer_appear(e){
    nav_pointer.left =`${window.pageXOffset + e.target.getBoundingClientRect().left}px`;
    nav_pointer.width = `${e.target.offsetWidth}px`;

}
function nav_pointer_disappear(){
    nav_pointer.width = `0px`;
    nav_pointer.left = `-10px`;
}