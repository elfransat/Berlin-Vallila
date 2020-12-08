/* 
let currentScale = 1;

zoomIn = () => {
  let myImg = document.getElementById("blueprint-image");
  currentScale = currentScale * 2;
  myImg.style.transform = `scale(${currentScale})`;
  console.log(myImg);
};

zoomOut = () => {
  let myImg = document.getElementById("blueprint-image");
  if (currentScale <= 1) {
    return (currentScale = 1);
  } else {
    currentScale = currentScale / 2;
    myImg.style.transform = `scale(${currentScale})`;
    console.log(myImg);
  }
};

reset = () => {
  currentScale = 1;
};
*/
/// Pan function ///
