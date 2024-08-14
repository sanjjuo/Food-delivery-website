import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import "./List.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { RiDeleteBin5Fill } from "react-icons/ri";

const List = ({url}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async(foodId) =>{
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }    
  }

  return (
    <div className='list-table-section'>
      <h1>List Items</h1>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item,index)=>(
              <tr key={index}>
              <td><img src={`${url}/images/` + item.image} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>$ {item.price}</td>
              <td onClick={()=>removeFood(item._id)}><RiDeleteBin5Fill className='remove'/></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default List
