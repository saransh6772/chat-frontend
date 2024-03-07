import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Loaders from './components/layout/Loaders'


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Groups = lazy(() => import('./pages/Groups'))
const Chat = lazy(() => import('./pages/Chat'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
let user = true;

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loaders />}>
                <Routes>
                    <Route path="/login" element={<ProtectedRoute user={!user} redirect='/'><Login /></ ProtectedRoute>} />
                    <Route element={<ProtectedRoute user={user} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/groups" element={<Groups />} />
                        <Route path="/chat/:chatId" element={<Chat />} />
                    </Route>
                    <Route path='/admin' element={< AdminLogin/>}/>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;