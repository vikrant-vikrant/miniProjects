document.querySelector(".push").onclick = function(){
  if(document.querySelector(".newtask input").value.length == 0){
    alert("Plese enter a Task");
  }else {
    document.querySelector(".tasks").innerHTML += `
        <div class="task">
          <span id="taskname" title="Click for mark as Done">
            ${document.querySelector('.newtask input').value}
          </span>
          <button class="detele" title="Delete task">
              <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
    `;
    document.querySelector(".newtask input").value = '';
    for(task of document.querySelectorAll(".task button")){
      task.onclick = function(){
        this.parentNode.remove();
      }
    }
    for(task of document.querySelectorAll(".task #taskname")){
      task.onclick = function(){
        this.style.textDecoration = "line-through";
      }
    }
  }
}
document.querySelector(".newtask input").addEventListener("keydown",function(event){
  if(event.key == "Enter"){
    document.querySelector(".push").click();
  }
})



