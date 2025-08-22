let index = 0;
let imgs = document.querySelectorAll(".imgBox .img");
let countNum = document.querySelector(".countNum");
let texts = document.querySelectorAll(".texts")
// console.log(texts)

function showImage() {
  imgs.forEach((imgItem) => {
    imgItem.classList.remove("on");
  })
  texts.forEach((text) => {
    text.classList.remove("on");
  })
  
  imgs[index].classList.add("on")

  let selectImgText = imgs[index].querySelectorAll(".texts h1, .texts h4, .texts h6");
  // img 클래스의 모든 것을 배열로 받아와 [index]에 해당하는 .texts의 글자만 가져옴
// console.log(index)
    if (selectImgText) {
    // 이미지가 있는 경우(true)
// console.log(selectImgText)
      selectImgText.forEach((text, idx) => {
        text.style.transitionDelay = ( idx * 0.3) + "s";
        text.classList.add("on");
      // 해당 이미지의 클래스에 on을 추가해준다
      })
    }
    
  countNum.innerHTML = `${index+1} / 6`;
}
showImage();

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

let fadeInterval = setInterval(nextBtn, 5000);
// 자동으로 nextBtn쪽으로 실행하도록 함수 실행을 변수에 저장하고
window.addEventListener("click", () =>{
  clearInterval(fadeInterval);
  // 인터벌 종료시 해당 변수를 파라미터로 넣어준다
})

