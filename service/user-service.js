const userLogin = () =>
  fetch(`http://localhost:3000/usuario/`).then((response) => response.json());

export const userServices = {
  userLogin,
};
