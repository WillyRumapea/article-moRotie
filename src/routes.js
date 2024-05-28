const { getAllMold, getMoldById, changeMold } = require("../handler");

const routes = [
  {
    method: "GET",
    path: "/jamur",
    handler: getAllMold,
  },
  {
    method: "GET",
    path: "/jamur/{id}",
    handler: getMoldById,
  },
  {
    method: "PUT",
    path: "/jamur/{id}",
    handler: changeMold,
  },
];

module.exports = routes;
