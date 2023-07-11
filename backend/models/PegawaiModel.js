import { DataTypes } from 'sequelize';
import db from '../config/Database.js';

const Pegawai = db.define('pegawai', {
  No_Pw: {
    type: DataTypes.INTEGER(10),
  },
  Nama_Pw: {
    type: DataTypes.STRING(100),
  },
  Jabatan: {
    type: DataTypes.STRING(255),
  },
  Alamat: {
    type: DataTypes.STRING(150),
  },
}, {
  freezeTableName: true,
});

export default Pegawai;
