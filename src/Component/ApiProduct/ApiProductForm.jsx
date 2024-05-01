import React, { useEffect, useState } from "react";
import HOCApiProduct from "./HOCApiProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddProductApiFun, EditProductApiFun } from "../../React-redux/action/ProductApiAction";
import axios from "axios";

function ApiProductForm() {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams();
    const [obj, setObj] = useState({})
    const [blank, setBlank] = useState({ category: "", productName: "", price: "", clothSize: "", inStock: "", description: "" });

   

    useEffect(()=> {
        if(params.idapiProduct){
            axios.get("https://student-api.mycodelibraries.com/api/product/get-product-by-id?id="+params.idapiProduct).then((res)=> {
                setObj({...res.data.data})
            })
        }
    },[params.idapiProduct])


    const show = (e) => {
        
            obj[e.target.name] = e.target.value
        
        setObj({ ...obj })
    }

    const Data = () => {
        setBlank({ ...blank })

            if(params.idapiProduct){
              obj.id = params.idapiProduct
                dispatch(EditProductApiFun(obj));
            }else{
              dispatch(AddProductApiFun(obj));
            }
        


        setObj({ ...blank });

        setTimeout(()=>{
            navigate("/tableapiProduct");
        },500)

    }
  return (
    <>
      <form
        action=""
        className="mx-auto w-50 mb-4 shadow-lg p-4 mt-4 bg-danger-subtle text-dark"
      >
        <div>
          <label htmlFor="">category :</label> <br />
          <input
            type="text"
            name="category"
            className="w-100"
            onChange={show}
            value={obj.category}
          />
          <br />
        </div>
        <div>
          <label htmlFor="">productName :</label> <br />
          <input
            type="text"
            name="productName"
            className="w-100"
            onChange={show}
            value={obj.productName}
          />
          <br />
        </div>

        <div>
          <label htmlFor="">price :</label> <br />
          <input
            type="number"
            name="price"
            className="w-100"
            onChange={show}
            value={obj.price}
          />
        </div>
        <div>
          <label htmlFor="">clothSize ;</label> <br />
          <input
            type="text"
            name="clothSize"
            className="w-100"
            onChange={show}
            value={obj.clothSize}
          />
        </div>
        <div>
          <label htmlFor="">inStock ;</label> <br />
          <input type="text" name="inStock" value={obj.inStock} className="w-100" onChange={show} />
        </div>
        <div>
          <label htmlFor="">description :</label>
          <br />
          <input
            type="text"
            name="description"
            className="w-100"
            value={obj.description}
            onChange={show}
           
          />
        
        </div>

        <br />

        <button className="btn btn-primary" type="button" onClick={Data}>
          Submit
        </button>
      </form>
    </>
  );
}

export default HOCApiProduct(ApiProductForm);
