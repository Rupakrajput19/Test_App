import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormDialog from './Dialog_box';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'Name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email ID', width: 250 },
  { field: 'Contact', headerName: 'Contact No.', width: 150 },
  { field: 'address', headerName: 'Address', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 },
 
];  

const rows = [
  { id: 1, Name: 'Snow Melisandre', email:"ritu.kumar@gmail.com", Contact: 9876543210  , address: "Delhi" , department: "IT Department"},
  { id: 2, Name: 'Roxie Mincent', email:"ritu.kumar@gmail.com", Contact: 9876543210  ,address: "Delhi" , department: "Finance Department"},
  { id: 3, Name: 'Lannister Marley', email:"ritu.kumar@gmail.com", Contact: 9876543210  , address: "Delhi" , department: "HR Department"},
  { id: 4, Name: 'Tony Stark', email:"ritu.kumar@gmail.com", Contact: 9876543210  , address: "Delhi" , department: "IT Department"},
  { id: 5, Name: 'Targaryen Ford', email:"ritu.kumar@gmail.com", Contact: 9876543210  ,  address: "Delhi"  , department: "IT Department"},
  { id: 6, Name: 'Yarn Melisandre' , email:"ritu.kumar@gmail.com", Contact: 9876543210  , address: "Delhi"  , department: "IT Department"},
  { id: 7, Name: 'Copy Clifford', email:"ritu.kumar@gmail.com", Contact: 9876543210  , address: "Delhi" , department: "IT Department"},
  { id: 8, Name: 'Frances England',  email:"ritu.kumar@gmail.com", Contact: 9876543210  ,address: "Delhi" , department: "IT Department"},
  { id: 9, Name: 'Roxie Snow', email:"ritu.kumar@gmail.com", Contact: 9876543210  ,  address: "Delhi" , department: "IT Department"},
  { id: 10, Name: 'Vincent Lannister', email:"ritu.kumar@gmail.com", Contact: 9876543210  ,  address: "Delhi" , department: "IT Department"},
];

export default function DataTable() {
  return (
    <>
    <FormDialog/>

    <div id="datagrid" style={{ height: 400, width: '90%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
