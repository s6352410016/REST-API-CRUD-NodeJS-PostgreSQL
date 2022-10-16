const router = require('express').Router();
const conn = require('../config/db');

router.get('/employees' , async (req , res) => {
    try{
        const data = await conn.query('SELECT * FROM employees ORDER BY "id" ASC');
        res.status(200).json({data: data.rows});
    }catch(err){
        console.log(err);
    }
});

router.post('/addemployee' , async (req , res) => {
    try{
        const {empName , empAddress , empTel , empSalary} = req.body;
        const saveData = await conn.query('INSERT INTO employees ("empName" , "empAddress" , "empTel" , "empSalary") VALUES($1 , $2 , $3 , $4)' , [empName , empAddress , empTel , empSalary]);
        res.status(201).json({msg: saveData});
    }catch(err){
        console.log(err);
    }
});

router.put('/updateemployee/:id' , async (req , res) => {
    try{
        const {empName , empAddress , empTel , empSalary} = req.body;
        const {id} = req.params;
        const updateData = await conn.query('UPDATE employees SET "empName" = $1 , "empAddress" = $2 , "empTel" = $3 , "empSalary" = $4 WHERE "id" = $5' , [empName , empAddress , empTel , empSalary , id]);
        res.status(200).json({msg: updateData});
    }catch(err){
        console.log(err);
    }
});

router.delete('/deleteemployee/:id' , async (req , res) => {
    try{
        const {id} = req.params;
        const deleteData = await conn.query('DELETE FROM employees WHERE "id" = $1' , [id]);
        res.status(200).json({msg: deleteData});
    }catch(err){
        console.log(err);
    }
});

module.exports = router;