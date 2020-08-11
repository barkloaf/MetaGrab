import React, { Suspense } from "react";
import Page from "./components/Page"
import "./App.css";

const Loader = () => (
  <div className="App">
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
