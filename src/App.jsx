import { Routes, Route, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from "react";
import './App.css'
import Home from './components/home'
import { ErrorBoundary } from 'react-error-boundary'
import About from './components/about'
import Header from './components/header'
import ErrorPage from './components/errorpage'
import User from './components/user'
const Users = lazy(() => import('./components/users'));
const AllUser = lazy(() => import('./components/alluser'));
import Footer from './components/footer'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Reset App</button>
    </div>
  );
};


export default function App() {



  return (
    <div className="app">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}>
        <main>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={< About />} />
              <Route path="/users" element={<AllUser />}>
                <Route index element={<Users />} />
                <Route path=":id" element={<User />} />
              </Route>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
