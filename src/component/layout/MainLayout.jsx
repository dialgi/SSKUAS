/* eslint-disable react/prop-types */

import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = (props) => {
  const {children} = props;
    return (
      <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
          {/* Navbar Start */}
          <Navbar />
          {/* Navbar End */}

          <div className="w-screen">
          {/* Header Start */}
          <Header />
          {/* Header End */}
          {/* Content Start */}
          <main className="px-6 py-4">{children}</main>
      </div>
      </div>
        
     
    );
  };
  
  
  export default MainLayout;