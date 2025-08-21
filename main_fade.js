let index = 0;
let imgs = document.querySelectorAll(".imgBox .img");
let countNum = document.querySelector(".countNum");

showImage()
function nextBtn() {
  index++;
  if(index > imgs.length - 1) {
    index = 0;
  }
  showImage();
}
function preBtn() {
  index--;
  if(index < 0) {
    index = imgs.length - 1;
  }
  showImage();
}
function showImage() {
  imgs.forEach((item) => {
    item.classList.remove("on");
  })
  imgs[index].classList.add("on")
  countNum.innerHTML = `${index+1} / 6`;
}