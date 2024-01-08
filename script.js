const istatus = document.querySelector("h5")
const addBtn = document.querySelector("#add")
const btn = document.querySelector("#add")
let check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addBtn.innerHTML = "Remove"
        addBtn.style.backgroundColor = "#D72A1D"
        check = 1
        
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "#E92420"
        addBtn.innerHTML = "Add Friend"
        addBtn.style.backgroundColor = "cadetblue"
        check = 0;
    }
})

