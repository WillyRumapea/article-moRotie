const pool = require("./connection");

const getAllMold = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute("SELECT * FROM table_jamur");
    return {
      status: "success",
      data: {
        table_jamur: rows,
      },
    };
  } catch (err) {
    console.error(err);
    return h
      .response({
        status: "fail",
        message: "Database query failed",
      })
      .code(500);
  } finally {
    if (connection) connection.release();
  }
};

const getMoldById = (request, h) => {
  const { id } = request.params;

  const mold = jamur.filter((n) => n.id === id)[0];

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
      Object.keys(tambahkanData).forEach((key) => {
        mold[key] = tambahkanData[key];
      });
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
