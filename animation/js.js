const cont = document.querySelector(".cont");
const img =document.querySelector(".imgcont");

const cont2 = Array.from(img.children);

cont2.forEach((item) => {
  const dublicate = item.cloneNode(true);
  dublicate.setAttribute("aria-hideen", true);
  img.appendChild(dublicate)
})