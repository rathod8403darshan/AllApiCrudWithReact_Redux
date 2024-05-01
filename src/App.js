import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FormFunc from "./Component/NormalCrud/FormFunc";
import Shop from "./Component/NormalCrud/Shop";
import TableFunc from "./Component//NormalCrud/TableFunc";
import Hellooo1 from "./Hellooo1";
import React, { useEffect } from "react";
import { mountingFunc } from "./React-redux/action/ActionFun";
import { useDispatch, useSelector } from "react-redux";
import ApiForm from "./Component/ApiRedux/ApiForm";
import ApiTable from "./Component/ApiRedux/ApiTable";
import TokenApiForm from "./Component/ApiTokenRedux/TokenApiForm";
import TokenApiTable from "./Component/ApiTokenRedux/TokenApiTable";
import ApiProductTable from "./Component/ApiProduct/ApiProductTable";
import ApiProductForm from "./Component/ApiProduct/ApiProductForm";
import ApiStudentTable from "./Component/ApiStudent/ApiStudentTable";
import ApiStudentForm from "./Component/ApiStudent/ApiStudentForm";

function App() {
    
 
  return (
    <>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/form"} />}></Route>
            <Route path="/form" element={<FormFunc />}>
              <Route path=":id"></Route>
            </Route>
            <Route path="/table" element={<TableFunc />}></Route>
            <Route path="/formapi" element={<ApiForm />}>
                <Route path=":idapi"></Route>
            </Route>
            <Route path="/tableapi" element={<ApiTable />}></Route>

            <Route path="/formapiToken" element={<TokenApiForm />}>
                <Route path=":idapiToken"></Route>
            </Route>
            <Route path="/tableapiToken" element={<TokenApiTable />}></Route>

            <Route path="/formapiProduct" element={<ApiProductForm/>}>
                <Route path=":idapiProduct"></Route>
            </Route>
            <Route path="/tableapiProduct" element={<ApiProductTable />}></Route>

            <Route path="/formapiStudent" element={<ApiStudentForm/>}>
                <Route path=":idapiStudent"></Route>
            </Route>
            <Route path="/tableapiStudent" element={<ApiStudentTable />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
