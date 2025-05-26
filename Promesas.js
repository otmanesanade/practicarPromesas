
// Función  llamada a una API
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2; 
      if (success) {
        resolve({
          nombre: "Juan Pérez",
          email: "juan.perez@example.com"
        });
      } else {
        reject("Error al obtener los datos del usuario.");
      }
    }, 2000); // 2 segundos 
  });
}

// Manejador del botón
document.getElementById("fetchUserBtn").addEventListener("click", () => {
  const userInfoDiv = document.getElementById("userInfo");
  userInfoDiv.textContent = "Cargando datos...";

  fetchUserData()
    .then(user => {
      userInfoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${user.nombre}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
    })
    .catch(error => {
      userInfoDiv.textContent = error;
    });
});
