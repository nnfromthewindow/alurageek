const userGet = () =>
  fetch(`https://alurageekwebstore.herokuapp.com/usuario/`).then((response) =>
    response.json()
  );
//para usar json-server usar esta direccion http://localhost:3000/usuario/
const userRegister = (email, password) => {
  return fetch(`https://alurageekwebstore.herokuapp.com/usuario/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const userServices = {
  userGet,
  userRegister,
};
