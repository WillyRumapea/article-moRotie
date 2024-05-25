const { getAllMold, getMoldById, changeMold } = require("../handler");

const routes = [
  {
    method: "GET",
    path: "/src/jamur",
    handler: getAllMold,
  },
  {
    method: "GET",
    path: "/src/jamur/{id}",
    handler: getMoldById,
  },
  {
    method: "PUT",
    path: "/src/jamur/{id}",
    handler: changeMold,
  },
];

module.exports = routes;
