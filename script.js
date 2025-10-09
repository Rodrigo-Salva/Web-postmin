document.addEventListener("DOMContentLoaded", () => {
  // Detectar si estamos en la carpeta /semanas/ para ajustar rutas
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
      console.log("✅ Header cargado correctamente");
      // NO se carga JS de Bootstrap aquí, ya está en el HTML
    })
    .catch(err => console.error("⚠️ Error cargando header:", err));

  // Cargar FOOTER
  fetch(basePath + "footer.html")
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar footer.html");
      return res.text();
    })
    .then(data => {
      const footerContainer = document.getElementById("footer-placeholder");
      if (footerContainer) {
        footerContainer.innerHTML = data;
        console.log("✅ Footer cargado correctamente");
      }
    })
    .catch(err => console.error("⚠️ Error cargando footer:", err));
});
