import { client } from "../configs/database.js";

export function allCustomers(){
  return client.query('SELECT*FROM customers;')
}

export function findCustomerById(id) {
  return client.query('SELECT * FROM customers WHERE id=$1;', [id])

}

export function findCustomerByname(name){
  return client.query('SELECT*FROM customers WHERE name=$1;',[name])
}
export function updateCustomerBycity(city,id){
  return client.query('UPDATE customers SET city=$1 WHERE id=$2;', [city, id])
}