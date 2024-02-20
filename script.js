const clickOpenToggle = document.querySelector(".share-icon-bcg-open");
const clickClose = document.querySelector(".share-icon-bcg-close");
const bottomShare = document.querySelector(".bottom-share");


    

clickOpenToggle.addEventListener("click", function(){
    bottomShare.classList.toggle("hidden");
});

clickClose.addEventListener("click", function(){
    bottomShare.classList.add("hidden");
})