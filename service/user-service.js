const userGet = () =>
  fetch(`http://localhost:3000/usuario/`).then((response) => response.json());

const userRegister = (mail, password) => {
  return fetch(`http://localhost:3000/usuario/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail,
      password,
    }),
  });
};

export const userServices = {
  userGet,
  userRegister,
};
