const sidebar_open = document.querySelector(".sidebar-open");
const btn_close = document.querySelector(".btn close");
const sidebar = document.querySelector(".sidebar"); 

sidebar_open.addEventListener("click",function(){
    sidebar.classList.toggle('show-sidebar');

    
});