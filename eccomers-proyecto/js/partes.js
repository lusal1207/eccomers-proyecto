fetch("partes/header.html")
.then(res => res.text())
.then(data => document.getElementById('header').innerHTML = data);
fetch("partes/footer.html")
.then(res => res.text())
.then(data => document.getElementById('footer').innerHTML = data);