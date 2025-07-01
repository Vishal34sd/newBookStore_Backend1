import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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


const customerLogin = async(req, res)=>{
    try{
        const {username, password} = req.body;
        const customerExist = await Customer.findOne({username});
        if(!customerExist){
            res.status(400).json({
                success : false ,
                message : "Incorrect customer details"
            })
        }
        const matchPassword = await bcrypt.compare(password , customerExist.password);
        if(!matchPassword){
            res.status(400).json({
                success : false ,
                message : "Password is incorect"
            });
        }
        const accessToken = jwt.sign({
            userId: customerExist._id,
            username: customerExist.username,
            role: customerExist.role
        }, process.env.JWT_SECRET_KEY, { expiresIn: '30m' });
        if(accessToken){
            res.status(200).json({
                success : true ,
                message : "Customer logged in successfully",
                token : accessToken
            });
        }else{
            res.status(401).json({
                success : false , 
                message : "Login failed"
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false ,
            message : "Some internal server error has been occured "
        });
    }
}

export { customerRegister , customerLogin};
