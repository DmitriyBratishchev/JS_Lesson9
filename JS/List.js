"use strickt";

(function (){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    let text = document.querySelector("input").value;
    if (!text) {
      alert("Вы ничего не ввели.\nВведите текст задачи!");
    } else {
      let newLi = document.createElement("li");
      newLi.className = "list-item";
      newLi.innerHTML = text;

      document.querySelector("ol").prepend(newLi);
      document.querySelector("input").value = '';
    }
  });

  document
    .querySelector('.list')
    .addEventListener('click', function(ev){
      if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle("completed");
      }
    })
})()