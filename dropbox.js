let storageImageOne = document.getElementById("storeImage");
let storageDropUpImgOne = document.getElementById("imgOne");
let One = document.getElementById("testOne");
let Two = document.getElementById("testOne");

let storageImageTwo = document.getElementById("storeImageTwo");

    // Function to display texts and images in the dropbox section three
// First button
function storeSlideOne() {
    // Move the slider out
    storageImageOne.style.transform = "translate(-1px)"
    // rotate the dropdown button
    storageDropUpImgOne.style.transform = "rotate(180deg)"
    storageImageTwo.style.transform = "translate(760px)"
    storageImageTwo.style.transitionDelay = "1s"
    storageImageTwo.style.transitionDuration = "0.1s"
    storageImageOne.style.zIndex = "1"
    
}
// Second button
function storeSlideTwo() {
    storageImageOne.style.transform = "translate(760px)"
          // Move the slider out
    storageImageTwo.style.transform = "translate(-1px)"
     // rotate the dropdown button
    storageDropUpImgOne.style.transform = "rotate(180deg)"
    // Slider transition onclick
    // storageImageTwo.style.display = "block"
    storageImageOne.style.transitionDelay = "1s"
     storageImageOne.style.transitionDuration = "0.1s"
    storageImageTwo.style.zIndex = "1"
    storageImageOne.style.zIndex = "-1"
}

  // Second button
function storeSlideThree() {
          // Move the slider out
    storageImageOne.style.transform = "translate(-1px)"
    // Slider background color
    storageImageOne.style.backgroundColor = "green"
     // rotate the dropdown button
    storageDropUpImgOne.style.transform = "rotate(180deg)"
   //Display the image
    storageImageOne.src = "assets/dpThree.png"
    // Slider transition onclick
    storageImageOne.style.transition = "ease-out 0.2s"
}

