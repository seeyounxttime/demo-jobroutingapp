import React from "react";
import AppSearchBar from "./components/AppSearchBar";
import AppContainer from "./components/AppContainer";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import JobDetailModal from "./components/JobDetailModal";
import AuthProvider from "./components/auth/AuthProvider";
import HomeAndLoginModal from "./components/pages/HomeAndLoginModal";
import ThemeProvider from "./components/contexts/ThemeProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppSearchBar />
        <AppContainer>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/jobs/:id" element={<JobDetailModal />}></Route>
              <Route path="/login" element={<HomeAndLoginModal />}></Route>
            </Routes>
          </ThemeProvider>
        </AppContainer>
      </AuthProvider>
    </div>
  );
}

export default App;
