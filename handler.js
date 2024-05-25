const jamur = require("./jamur");

const getAllMold = () => {
  return {
    status: "success",
    data: {
      jamur,
    },
  };
};

const getMoldById = (request, h) => {
  const { id } = request.params;

  const mold = jamur.find((n) => n.id === id);

  if (mold) {
    return {
      status: "success",
      data: {
        mold,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "tidak ada jamur ditemukan",
  });
  return response.code(404);
};

const changeMold = (request, h) => {
  const { id } = request.params;
  const { nama, dampak, tambahkanData } = request.payload || {};

  const mold = jamur.find((n) => n.id === id);

  if (mold !== undefined) {
    if (nama) mold.nama = nama;
    if (dampak) mold.dampak = dampak;

    if (tambahkanData) {
      Object.assign(mold, tambahkanData);
    }

    return h.response({
      status: "success",
      data: {
        mold,
      },
    });
  }

  const response = h.response({
    status: "fail",
    message: "jamur tidak ada, data tidak dapat diubah",
  });
  return response.code(404);
};

module.exports = { getAllMold, getMoldById, changeMold };
