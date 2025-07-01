import bcrypt from "bcrypt";
import Customer from "../Model/Customer.js";

const customerRegister = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        

        const customerExist = await Customer.findOne({
            $or: [{ username }, { email }]
        });

        if (customerExist) {
            return res.status(400).json({
                success: false,
                message: "Username or email already exists with these credentials"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newCustomer = new Customer({
            username,
            email,
            password: hashPassword,
            role: role || "user"
        });

        await newCustomer.save();

        res.status(200).json({
            success: true,
            message: "Customer registered successfully",
            data: newCustomer
        });

    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export { customerRegister };
