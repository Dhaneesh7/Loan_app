const pool = require("../config/db");

exports.createCustomer = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    const result = await pool.query(
      "INSERT INTO customers (name, phone, email) VALUES ($1, $2, $3) RETURNING *",
      [name, phone, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
