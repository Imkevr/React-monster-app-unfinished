export const getAll = () => {
  return fetch("http://localhost:8000/monsters/").then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
};

export const getOne = (id) => {
  return fetch("http://localhost:8000/monsters/" + id).then(response => {
    console.log(response);
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
}
