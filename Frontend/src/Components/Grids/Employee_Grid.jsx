import { React, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import FormDialog from "./Dialog_box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import swal from "sweetalert";
import { APIs } from "../../API's/api";

const updateData = (params) => {
  const id = params._id;
  // debugger;
  axios
    .put(`${APIs.updateEmployeeApi}/${id}`)
    .then((res) => {
      console.log("Employee Data Updated Successfully", res);
      // Reload_func();
      swal({
        title: "Employee Data Updated Successfully",
      });
      // setInterval(() => {
      //   window.location.reload(false);
      // }, 3000);
    }) 
    .catch((errors) => {
      console.log("Unable to update employee data", errors);
      swal({
        title: "Something went wrong!",
        text: "Unable to update Employee details\nPlease try again later...",
      });
    });
};

const deleteData = (id) => {
    const confrimBox = window.confirm("Do You Really Want To Delete This Employee Data?");
      if (!confrimBox === true) {
        return false;
      }  axios.delete(`${APIs.deleteEmployeeApi}/${id}`)
      .then((res) => {
      console.log("Employee Data Deleted Successfully", res);
      // Reload_func();
      swal({
        title: "Employee Data Deleted Successfully",
      });
      setInterval(() => {
        window.location.reload(false);
      }, 3000);
    })
    .catch((errors) => {
      console.log("Unable to delete Employee data", errors);
      swal({
        title: "Something went wrong!",
        text: "Unable to delete Employee details\nPlease try again later...",
      });
    });
};

// const rows = [data];

const columns = [
  // { field: "id", headerName: "ID", widths: 250 },
  {
    field: "_id",
    headerName: "ID",
    width: 250,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email ID",
    width: 250,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "mobile",
    headerName: "Contact No.",
    width: 200,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
    headerClassName: "super-app-theme--header",
    // headerAlign: "center",
  },
  {
    field: "Edit",
    headerClassName: "super-app-theme--header",
    // headerAlign: 'center',
    sortable: false,
    filterable: false,
    renderCell: () => {
      return (
        <div
          className="d-flex justify-content-center aligh-item-center"
          style={{ cursor: "pointer" }}
        >
          <EditIcon onClick={updateData} />
        </div>
      );
    },
  },
  {
    field: "Delete",
    headerClassName: "super-app-theme--header",
    // headerAlign: 'center',
    sortable: false,
    filterable: false,
    renderCell: (record) => {
      return (
        <div
          className="d-flex justify-content-center aligh-item-center"
          style={{ cursor: "pointer" }}
        >
          <DeleteIcon onClick={ () => deleteData(record.id)} />
        </div>
      );
    },
  },
];

export default function EmployeeGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(APIs.getEmployeeApi)
      .then((response) => {
        // console.log("Employee data fetched successfully!");
        const records = response.data.data;
        setData(records);
      })
      .catch((err) => {
        console.log("Unable to fetch Employee data", err);
      });
  }, []);

  // console.log("Data->", data);
  // console.log("type of data -> ", typeof data);

  return (
    <>
      <FormDialog />
      <div id="datagrid" style={{ height: 660, width: "90%" }}>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[15]}
          getRowId={(row) => row._id}
        />
      </div>
    </>
  );
}
