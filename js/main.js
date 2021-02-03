let myBtn = document.querySelectorAll(".btn");
let opennedGifst = 0;

myBtn.forEach((item) => {
      item.addEventListener("click", function () {
      opennedGifst++;
       if (opennedGifst<3){
        this.nextElementSibling.style.filter = "blur(0px)";
        this.style.display = "none";
       }

      });   
});

