// cursor sigue el ratón
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// efecto click suave
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// navegación falsa (simula páginas)
function openPage(page) {
  alert("Aquí iría la página: " + page);
}

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (!href.startsWith("http")) {
      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {

    const href = link.getAttribute("href");

    if (href && !href.startsWith("http")) {
      e.preventDefault();

      document.body.style.transition = "0.5s ease";
      document.body.style.opacity = "0";
      document.body.style.filter = "blur(18px)";

      setTimeout(() => {
        window.location.href = href;
      }, 450);
    }

  });
});

const btn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  btn.textContent = "🌙 Modo Oscuro";
}

btn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙 Modo Oscuro";
  } else {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️ Modo Claro";
  }

});