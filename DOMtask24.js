var containerdiv=document.getElementById("container")
// containerdiv.textContent="sumanth"
var maindiv=document.createElement("div")
containerdiv.appendChild(maindiv)
 var imgtag=document.createElement("img")
 imgtag.setAttribute("src","https://www.hindustantimes.com/ht-img/img/2024/10/23/550x309/raja_saab_prabhas_1729679000409_1729679001249.jfif")
 imgtag.style.borderRadius="100px"
 maindiv.appendChild(imgtag)
var ptag=document.createElement("p")
ptag.textContent="DARLING PRABHAS"
maindiv.appendChild(ptag)
var spantag=document.createElement("span")
ptag.appendChild(spantag)
spantag.textContent="   RAJASAAB"


