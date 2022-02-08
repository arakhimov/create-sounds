import React from "react";
import { useParams } from "react-router";
import EditFormPage from "../../components/page/editFormPage/editFormPage";
import ProductsTable from "../../components/page/productsTable/productsTable";
import Breadcrumbs from "../../components/ui/breadcrumbs/breadcrumbs";

const Edit = () => {
  const { productId } = useParams();

  return (
    <div className="edit">
      <Breadcrumbs />
      {productId ? <EditFormPage /> : <ProductsTable />}
    </div>
  );
};

export default Edit;
