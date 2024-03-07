import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentList from "./components/StudentList";

const App = () => {
  return (
    <>
      <h1>
        <div className="container pt-4 text-center pb-3">
          Student Registration 📄!
        </div>
        <StudentList />
      </h1>
    </>
  );
};

export default App;
