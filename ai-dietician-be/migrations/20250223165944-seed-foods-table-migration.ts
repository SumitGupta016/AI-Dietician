const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

module.exports = {
  up: async (queryInterface) => {
    const filePath = path.join(__dirname, '../data/Anuvaad_INDB_2024.11.xlsx');

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Corrected sheet name retrieval
    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log('Loaded sheet data:', sheet.slice(0, 5)); // Debugging: print first 5 rows

    const foodData = sheet.map(row => ({
      food_code: row['food_code'],  // Ensure column names match Excel headers
      food_name: row['food_name'],
      primarysource: row['primarysource'] || null,
      energy_kj: row['energy_kj'] || null,
      energy_kcal: row['energy_kcal'] || null,
      carb_g: row['carb_g'] || null,
      protein_g: row['protein_g'] || null,
      fat_g: row['fat_g'] || null,
      freesugar_g: row['freesugar_g'] || null,
      fibre_g: row['fibre_g'] || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    console.log('Processed food data:', foodData.slice(0, 5)); // Debugging

    await queryInterface.bulkInsert('foods', foodData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('foods', null, {});
  },
};
