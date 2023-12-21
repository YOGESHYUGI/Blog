import express from "express";
import Auth from "../Modules/auth.js";
import bcrypt from "bcryptjs"
const router = express.Router()

router.put("/:id", async (req, res) => {
    const values = {
        Fname: req.body.username,
        Gender: req.body.topping,
        profile: req.body.imageurl
    }
    // const { username, topping, imageurl } = req.body
    try {
        const updateUser = await Auth.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        updateUser.Fname=values.Fname
        updateUser.Gender=values.Gender
        updateUser.profile=values.profile
        updateUser.save()
        res.status(500).json(updateUser)
    } catch (error) {
        res.status(200).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await Auth.findByIdAndDelete(req.params.id)
        res.status(500).json(deleteUser)
    } catch (error) {
        res.status(200).json(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const getuser = await Auth.findById(req.params.id)
        res.status(500).json(getuser)
    } catch (error) {
        res.status(200).json(error)
    }
})

router.post("/save", async (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.pass, salt);
    const newuser = new Auth({
        Fname: req.body.Fname, email: req.body.email, pass: hash,
        Lname: req.body.Lname, Month: req.body.Month, Day: req.body.Day, Year: req.body.Year,
        Gender: req.body.Gender
    })
    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/login", async (req, res) => {

    const { email, pass } = req.body
    try {
        const user = await Auth.findOne({ email: email })
        const correctPass = bcrypt.compareSync(req.body.pass, user.pass);
        if (correctPass) {
            const temp = {
                Fname: user.Fname,
                Lname: user.Lname,
                Gender: user.Gender,
                Day: user.Day,
                Month: user.Month,
                Year: user.Year,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id
            }
            res.send(temp)
        } else {
            return res.status(400).json({ messade: 'Login failed' })
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

// router.post("/reg1", (req, res) => {
//     const newuser = new Auth({ Fname: req.body.Fname, Lname: req.body.Lname })
//     try {
//         res.send(newuser)
//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });

export default router;
