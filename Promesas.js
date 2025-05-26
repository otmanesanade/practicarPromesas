/* const boton = document.querySelector("#solict")
const textContent = document.querySelector("#textContent")



boton.addEventListener('click', () => {
  newSolicitar();
})
const solicitar = () => {

  const isOk = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve({
          nombre: "otmane",
          correo: "otmank514@gmail.com"
        }
        );
      } else {
        reject('Error al obtener el usuarios')
        
      }
    }, 2000);

  });

};

solicitar()
  .then((respuesta) => {
    console.log(respuesta);
  }) 
  .catch((error) => {
    console.log(error);
  })
const newSolicitar = async () => {
  try {
    const usuario = await solicitar();
    const { nombre, correo } = usuario
    console.log(`mi nombre es ${nombre} y mi correo es ${correo}`);
    textContent.innerHTML = `mi nombre es ${nombre} y mi correo es ${correo}`

  }
  catch (error) {
    console.log(error);
    textContent.innerHTML = 'Error al obtener el usuarios'

  }
};
 */
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
