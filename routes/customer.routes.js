import { Router } from "express";
import { allCustomers, findCustomerById, findCustomerByname, updateCustomerBycity } from "../services/customer.service.js";
const router =Router()

router.get('/',async (req,res)=>{
  try{

    const result = await allCustomers()
    
    res.json({
      message:'all customers retrived',
      customers:result.rows
    })
  }catch(err){
    res.status(500).json({
      message:'Internal server Error',
      error:err
    })
  }
})
router.get('/search',async (req,res)=>{
  try{

    const result = await findCustomerByname(req.query.name)
    
    res.json({
      message:' customer retrived',
      customers:result.rows[0]
    })
  }catch(err){

    console.log(err);

    res.status(500).json({
      message:'Internal server Error',
      error:err
    })
  }
})
router.get('/:id',async (req,res)=>{
  try{

    const result = await findCustomerById(req.params.id)
    
    res.json({
      message:' customer retrived',
      customers:result.rows[0]
    })
  }catch(err){

    console.log(err);

    res.status(500).json({
      message:'Internal server Error',
      error:err
    })
  }
})
router.patch('/:id', async (req,res)=>{
  try{

    const id = req.params.id
    const {city} =req.body
    await updateCustomerBycity(city,id)
    
    res.json({
      message:' customer updated'
    })
  }catch(err){

    console.log(err);

    res.status(500).json({
      message:'Internal server Error',
      error:err
    })
  }
})














export default router