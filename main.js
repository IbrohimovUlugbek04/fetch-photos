const elList = document.querySelector(".list");



function renderImg(arr, startNumber, endNumber, node){
arr.slice(startNumber, endNumber).forEach(item => {
 const itemLi = document.createElement("li");
 itemLi.classList.add("photos-item")
 const itemParagrph = document.createElement("p")
 const itemLink = document.createElement("img")
 itemParagrph.textContent = item.title;
 itemLink.src = item.thumbnailUrl;
 itemLink.alt = item.title;
 itemLi.append(itemLink, itemParagrph)
 node.append(itemLi)
});
}

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
.then(data => renderImg(data, 0, 21, elList))