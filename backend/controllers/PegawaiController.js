import Pegawai from '../models/pegawaimodel.js';

// Create a new Pegawai
async function createPegawai(req, res) {
  try {
    const { No_Pw, Nama_Pw, Jabatan, Alamat } = req.body;
    const pegawai = await Pegawai.create({ No_Pw, Nama_Pw, Jabatan, Alamat });
    res.status(201).json(pegawai);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Pegawai' });
  }
}

// Get all Pegawai
async function getAllPegawai(req, res) {
  try {
    const pegawaiList = await Pegawai.findAll();
    res.json(pegawaiList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Pegawai' });
  }
}

// Get a single Pegawai by ID
async function getPegawaiById(req, res) {
  try {
    const { id } = req.params;
    const pegawai = await Pegawai.findByPk(id);
    if (pegawai) {
      res.json(pegawai);
    } else {
      res.status(404).json({ error: 'Pegawai not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Pegawai' });
  }
}

// Update a Pegawai by ID
async function updatePegawai(req, res) {
  try {
    const { id } = req.params;
    const { No_Pw, Nama_Pw, Jabatan, Alamat } = req.body;
    const updatedPegawai = await Pegawai.update(
      { No_Pw, Nama_Pw, Jabatan, Alamat },
      { where: { id } }
    );
    if (updatedPegawai[0] === 1) {
      res.json({ message: 'Pegawai updated successfully' });
    } else {
      res.status(404).json({ error: 'Pegawai not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Pegawai' });
  }
}

// Delete a Pegawai by ID
async function deletePegawai(req, res) {
  try {
    const { id } = req.params;
    const deletedPegawai = await Pegawai.destroy({ where: { id } });
    if (deletedPegawai === 1) {
      res.json({ message: 'Pegawai deleted successfully' });
    } else {
      res.status(404).json({ error: 'Pegawai not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Pegawai' });
  }
}

export {
  createPegawai, // Create a new Pegawai
  getAllPegawai, // Get all Pegawai
  getPegawaiById, // Get a single Pegawai by ID
  updatePegawai, // Update a Pegawai by ID
  deletePegawai, // Delete a Pegawai by ID
};
