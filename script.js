document.addEventListener("DOMContentLoaded", () => {
  const inSemanas = window.location.pathname.includes("/semanas/");
  const basePath = inSemanas ? "../" : "./";

  console.log("📁 Cargando header desde:", basePath + "header.html");

  // Cargar HEADER
  fetch(basePath + "header.html")
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar header.html");
      return res.text();
    })
    .then(data => {
      const headerContainer = document.getElementById("header-placeholder");
      if (!headerContainer) {
        console.error("❌ No se encontró el div con id='header-placeholder'");
        return;
      }
      headerContainer.innerHTML = data;

      // Inicializar Bootstrap
      const bsScript = document.createElement("script");
      bsScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      document.body.appendChild(bsScript);
    })
    .catch(err => console.error("⚠️ Error cargando header:", err));

  // Cargar FOOTER
  fetch(basePath + "footer.html")
    .then(res => res.text())
    .then(data => {
      const footerContainer = document.getElementById("footer-placeholder");
      if (footerContainer) footerContainer.innerHTML = data;
    })
    .catch(err => console.error("⚠️ Error cargando footer:", err));
});
