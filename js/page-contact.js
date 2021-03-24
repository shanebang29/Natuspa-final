var list;
list = document.querySelectorAll("p");
for (var i = 0; i < list.length; ++i) {
   list[i].classList.add('text-muted');
}