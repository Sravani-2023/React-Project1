import React from "react";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function ListEmployee({ employees, deleteEmp, editEmp }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("modal is opened");
  }
  function closeModal() {
    setIsOpen(false);
  }
  function f1() {
    alert("f1.....");
  }

  return (
    <>
      <h4 className="text-center">Employee Table</h4>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td>
                  <button
                    onClick={() => deleteEmp(emp.eId)}
                    className="btn btn-danger"
                  >
                    Del
                  </button>
                  <button onClick={openModal} className="btn btn-success ms-1">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ width: "600px", position: "center", marginLeft: "450px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>             
              <div className="form-group">
              <label >Eid</label>
              <input className="form-control" />                  
            </div>
            <div className="form-group">
              <label >Name</label>
              <input className="form-control" />              
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input className="form-control" />             
            </div>   
            <br />
            <button type="save" className="btn btn-primary">
              Save
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
