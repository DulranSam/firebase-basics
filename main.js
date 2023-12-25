const Axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
  const clickMain = document.querySelector(".click");
  const verytop = document.querySelector(".top");

  async function fetchData() {
    try {
      const response = await Axios.get(
        "https://yts.mx/api/v2/list_movies.json"
      );
      verytop.innerHTML = JSON.stringify(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  clickMain.addEventListener("click", () => {
    fetchData();
  });
});
