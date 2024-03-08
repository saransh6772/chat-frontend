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
const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const UserManagement = lazy(() => import('./pages/admin/UserManagement'))
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement'))
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'))

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
                    <Route path='/admin/dashboard' element={< Dashboard/>}/>
                    <Route path='/admin/users' element={< UserManagement/>}/>
                    <Route path='/admin/chats' element={< ChatManagement/>}/>
                    <Route path='/admin/messages' element={< MessageManagement/>}/>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;