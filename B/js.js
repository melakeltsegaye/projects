const ansque = document.getElementsByClassName("ansque");

for (i = 0; i < ansque.length; i++) {
    ansque[i].addEventListener("click", function() {
        this.classList.toggle('action');
    })
}