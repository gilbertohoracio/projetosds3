import React from 'react';
import 'assets/css/styles.css'
import NavBar from 'components';
import Footer from 'components/Footer';
import DataTable from 'components/datatable';
function App() {
  return ( 
    <>
    <NavBar />
    <div className='container'>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
