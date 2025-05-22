const boton = document.querySelector("#solict")
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

/* solicitar()
  .then((respuesta) => {
    console.log(respuesta);
  }) 
  .catch((error) => {
    console.log(error);
  }) */
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
