const pool = require("../config/db");

// Create Payment
exports.createPayment = async (req, res) => {
  try {
    const { loan_id, amount_paid, payment_method } = req.body;

    const result = await pool.query(
      `INSERT INTO payments (loan_id, amount_paid, payment_method)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [loan_id, amount_paid, payment_method]
    );

    res.status(201).json({
      message: "Payment recorded successfully",
      data: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Payments
exports.getPayments = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT p.*, l.loan_amount, c.name AS customer_name
      FROM payments p
      JOIN loans l ON p.loan_id = l.id
      JOIN customers c ON l.customer_id = c.id
      ORDER BY p.id DESC
    `);

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
