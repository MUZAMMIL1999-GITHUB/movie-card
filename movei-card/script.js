const imgInput = document.getElementById("inp1")
const titleInput = document.getElementById("inp2")
const mainDiv = document.getElementById("movieDiv");
const cardBtn = document.getElementById("getCard");
const containerEl = document.querySelector(".container")

function display() {
    const image = document.createElement("img");
   
    // image.src = imgInput.value
    const title = document.createElement("h1")
    // title.textContent = titleInput.value

    // mainDiv.append(image, title);

    mainDiv.innerHTML = `
     <img src="${image.src = imgInput.value}" alt="">
        <h1>${ title.textContent = titleInput.value}</h1>
    `
    imgInput.value = ""
    titleInput.value = ""
}
cardBtn.addEventListener("click", () => {
    display();
    mainDiv.classList.add("get-card")
    
})