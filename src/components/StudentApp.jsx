import React from "react";

function StudentApp() {
  return (
    <body>
      <div
        className="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addModalLabel">
                New student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="firstName" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control p-2"
                  />
                </div>
                <div className="mb-3">
                  <label for="lastName" className="form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control p-2"
                  />
                </div>
                <div className="mb-3">
                  <label for="group" className="form-label">
                    Select group
                  </label>
                  <select
                    name="group"
                    id="group"
                    className="form-select d-block w-100 p-2"
                  >
                    <option value="REACT N32">REACT N32</option>
                    <option value="REACT N45">REACT N45</option>
                    <option value="REACT N50">REACT N50</option>
                    <option value="REACT N58">REACT N58</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="doesWork"
                    id="doesWork"
                  />
                  <label className="form-check-label" for="doesWork">
                    Does work?
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-primary"
                id="btn-add-student"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Editing student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="firstNameEdit" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="firstNameEdit"
                    name="firstNameEdit"
                    className="form-control p-2"
                  />
                </div>
                <div className="mb-3">
                  <label for="lastNameEdit" className="form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    id="lastNameEdit"
                    name="lastNameEdit"
                    className="form-control p-2"
                  />
                </div>
                <div className="mb-3">
                  <label for="groupEdit" className="form-label">
                    Select group
                  </label>
                  <select
                    name="groupEdit"
                    id="groupEdit"
                    className="form-select d-block w-100 p-2"
                  >
                    <option value="REACT N32">REACT N32</option>
                    <option value="REACT N45">REACT N45</option>
                    <option value="REACT N50">REACT N50</option>
                    <option value="REACT N58">REACT N58</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="doesWorkEdit"
                    id="doesWorkEdit"
                  />
                  <label className="form-check-label" for="doesWorkEdit">
                    Does work?
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-primary"
                id="btn-edit-student"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-3">
          <div className="col col-9">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Ф.И.O"
              className="form-control p-3"
            />
          </div>
          <div className="col col-3 d-flex gap-3">
            <select
              name="filter-select"
              id="filter-select"
              className="form-select d-block w-50"
            >
              <option value="ALL">ALL Groups</option>
              <option value="REACT N32">REACT N32</option>
              <option value="REACT N45">REACT N45</option>
              <option value="REACT N50">REACT N50</option>
              <option value="REACT N58">REACT N58</option>
            </select>
            <button
              className="btn btn-success d-block w-50"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Add student
            </button>
          </div>
        </div>

        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Group</th>
                <th>Does work?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="students-list"></tbody>
          </table>
        </div>
      </div>
    </body>
  );
}

export default StudentApp;
