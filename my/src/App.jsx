// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Navigation from "./navigation";

// const App = () => {
//   return <BrowserRouter>
//     <Navigation></Navigation>
//   </BrowserRouter>
// };

// export default App;
import React from "react";
import AppRouter from "./navigation/AppRouter";

const App = () => {
  return <AppRouter />;
};

export default App;