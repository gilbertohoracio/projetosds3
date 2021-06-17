import NavBar from "components";
import BarChart from "components/BarChart";
import DataTable from "components/datatable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";

const DashBoard = () => {
    return (
        <>
        <NavBar />
        <div className='container'>
          <h1 className="text-primary" PY-3>DashBoard de Vendas</h1>
  
          <div className="row" px-3>
  
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
              <BarChart></BarChart>
            </div>
  
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
              <DonutChart></DonutChart>
            </div>
  
          </div>
  
          <div className="py-3">
            <h2 className="text-primary">Todas Vendas</h2>
          </div>
          <DataTable />
        </div>
        <Footer />
        </>
    );
}

export default DashBoard;
