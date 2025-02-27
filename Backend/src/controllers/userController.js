const pool = require("../DbConnections/postgresdb");
const bcrypt = require("bcrypt");

// ✅ CREATE: Register a New User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if email already exists
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert User
    const newUser = await pool.query(
      `INSERT INTO users (name, email, password, role) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, name, email, role, created_at`,
      [name, email, hashedPassword, role || "customer"]
    );

    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ READ: Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT id, name, email, role, created_at FROM users");
    res.json(users.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ READ: Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT id, name, email, role, created_at FROM users WHERE id = $1", [id]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json(user.rows[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ UPDATE: Update User Details
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const updatedUser = await pool.query(
      `UPDATE users SET name = $1, email = $2, role = $3, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $4 RETURNING id, name, email, role, updated_at`,
      [name, email, role, id]
    );

    if (updatedUser.rows.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({ message: "User updated successfully!", user: updatedUser.rows[0] });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ DELETE: Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING id", [id]);

    if (deletedUser.rows.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
