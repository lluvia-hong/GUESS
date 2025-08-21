let imgBox = document.querySelector(".imgBox");
let index = 1;
let imgNum = document.querySelectorAll(".imgBox .img").length;
let step = 100 / imgNum;
let countNum = document.querySelector(".countNum");

function showImage() {
  imgBox.style.transform = `translateX(${-step*index}%)`;
  countNum.innerHTML = `${index} / 6`;
}
function nextBtn() {
  // if(index >= imgNum -1) return;
  index++;
  showImage();
}
function preBtn() {
  // if(index <= 0) return;
  index--;
  showImage();
}
showImage();
function fixloop() {
  if(index === imgNum -1) {
    imgBox.style.transition = "none";
    index = 1;
    showImage();
    void imgBox.offsetWidth;
    imgBox.style.transition = "1s";
  }else if(index === 0) {
    imgBox.style.transition = "none";
    index = imgNum - 2;
    showImage();
    void imgBox.offsetWidth;
    imgBox.style.transition = "1s";
  }
}