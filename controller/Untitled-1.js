// app.post("/register", async(req, res) => {
//     try{
// const hashedPassword = await bcrypt.hash(req.body.password, 10);
// users.push({
//     id: Date.now().toString(),
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword,
// })
// console.log(users);
// res.redirect("/login");
//     } catch(e){
//         res.redirect("register");
//     }
// })

// app.post("/login", async (req, res) => {

// })


// const authRoutes = require('./routes/auth');
// const patientsRoutes = require('./routes/patients');

// app.use('/', authRoutes);
// app.use('/', patientsRoutes);


bcrypt.genSalt(10, (err, salt) =>
bcrypt.hash(newDoctor.password, salt, (err, hash) =>{
    if(err) throw err;
    newDoctor.password = hash;
    newDoctor
    .save()
    .then(res.redirect('/register'))
    .catch((err) => console.log(err));
})

);
