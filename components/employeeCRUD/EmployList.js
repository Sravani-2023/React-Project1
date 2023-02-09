import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const EmployeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Manager", Salary: 8000 },
    { id: 2, name: "Jane Doe", position: "Developer", Salary: 7000 },
    { id: 3, name: "Jim Smith", position: "Designer", Salary: 6000 },
    { id: 101, name: "sanjay", Salary: 5000, position: "Manager" },
    { id: 104, name: "deepak", Salary: 8000, position: "Developer" },
    { id: 103, name: "ranjan", Salary: 7000, position: "Designer" },
    { id: 102, name: "manoj", Salary: 9000, position: "Developer" },
  ]);

  const [editing, setEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [employeeid, setEmployeeid] = useState();
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [modalOpen, setModalOpen] = useState();

  const changeHandler = (e) => {
    if (e.target.name === "eID") {
      setEmployeeid(e.target.value);
    } else if (e.target.name === "eName") {
      setEmployeeName(e.target.value);
    } else if (e.target.Salary === "eSal") {
      setEmployeeSalary(e.target.value);
    } else {
      setEmployeePosition(e.target.value);
    }
  };
  function openmodal() {
    setModalOpen(true);
    console.log("modal is opened");
  }
  function closeModal() {
    setIsOpen(false);
  }
  function CloseModal() {
    setModalOpen(false);
  }
  const deleteEmp = (eidToDelete) => {
    const tempArray = employees.filter((employee) => {
      return employee.id !== eidToDelete;
    });
    setEmployees(tempArray);
  };

  const addEmp = (empObj) => {
    setIsOpen(true);   
    setModalOpen(false); 
    setEmployees([...employees, empObj]);
    // Swal.fire({
    //     title: "Do you want to add the employee?",
    //     showDenyButton: true,
    //     showCancelButton: true,
    //     confirmButtonText: "Add",
    //     denyButtonText: `Not Interested`,
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       Swal.fire("Saved!", "", "success");
    //     } else if (result.isDenied) {
    //       Swal.fire("Changes are not saved", "", "info");
    //     }
    //   });
      
  };
  const alertDemo2 = () => {
    Swal.fire({
        title: "Do you want to save changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "save",
        denyButtonText: `Not Interested`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  };
  const editEmployee = (employee) => {
    setEditing(true);
    setIsOpen(true);
    setSelectedEmployee(employee);
  };
  const saveChanges = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === selectedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditing(false);
  };

  return (
    <>
      <h4 className="text-center" style={{ marginTop: "10px" }}>
        <u>Employee Table</u>
      </h4>
      <br />
      <button
        onClick={openmodal}
        className="btn btn-primary ms-1"
        style={{ float: "right", marginRight: "300px" }}
      >
        Add
      </button>
      <table
        className="table table-bordered table striped center"
        style={{ width: "900px", marginLeft: "300px", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, ind) => {
            return (
              <tr key={ind}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.Salary}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee)}
                    className="btn btn-success ms-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmp(employee.id)}
                    className="btn btn-danger ms-1"
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editing && (
        <Modal
          show={modalIsOpen}
          onHide={closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ width: "600px", position: "center", marginLeft: "450px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ float: "center" }}>
              Employee Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={() => saveChanges(selectedEmployee)}>
              {" "}
              <div className="form-group">
                <label htmlFor="name">Name:</label>{" "}
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={selectedEmployee.name}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="position">Position:</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  value={selectedEmployee.position}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      position: e.target.value,
                    })
                  }
                />{" "}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Salary">Salary</label>{" "}
                <input
                  type="text"
                  id="Salary"
                  className="form-control"
                  value={selectedEmployee.Salary}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      Salary: e.target.value,
                    })
                  }
                />{" "}
              </div>
              <br />
              <button type="submit" className="btn btn-primary ms-1" onClick={alertDemo2}>
                Save
              </button>{" "}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Modal
        show={modalOpen}
        onHide={CloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ width: "600px", position: "center", marginLeft: "450px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ float: "center" }}>
            Add Employee Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border p-2">
            <div className="m-2">
              Eid:
              <input
                name="eID"
                placeholder="Enter Employee ID"
                onChange={changeHandler}
              />
            </div>
            <div className="m-2">
              Name:{" "}
              <input
                name="eName"
                placeholder="Enter Employee Name"
                onChange={changeHandler}
              />{" "}
            </div>
            <div className="m-2">
              Salary:{" "}
              <input
                name="eSal"
                placeholder="Enter Employee Sal"
                onChange={changeHandler}
              />{" "}
            </div>
            <div className="m-2">
              Position:{" "}
              <input
                name="ePos"
                placeholder="Enter Employee Position"
                onChange={changeHandler}
              />{" "}
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                let empObj = {
                  id: employeeid,
                  name: employeeName,
                  Salary: employeeSalary,
                  position: employeePosition,
                };
                addEmp(empObj);
              }} 
            > 
              {" "}
              Add
            </button>
          </div>

          {/* <form onSubmit={() => saveChanges(selectedEmployee)}>
              {" "}
              <div className="form-group">
                <label htmlFor="name">Name:</label>{" "}
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="position">Position:</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  
                />{" "}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Salary">Salary</label>{" "}
                <input
                  type="text"
                  id="Salary"
                  className="form-control"
                />{" "}
              </div>
              <br />
              <button className='btn btn-primary' onClick={()=>{
            let empObj = {
                eId: employeeID,
                name: employeeName,
                sal: employeeSalary,
              };
              addEmp(empObj)
               }}>Add</button>
            </form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default EmployeList;
