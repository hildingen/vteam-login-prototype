'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import AdminLink1 from './admin/sub-pages/AdminLink1';
import AdminLink2 from './admin/sub-pages/AdminLink2';
import AdminLink3 from './admin/sub-pages/AdminLink3';
import AdminLink4 from './admin/sub-pages/AdminLink4';
import UserLink1 from './user/sub-pages/UserLink1';
import UserLink2 from './user/sub-pages/UserLink2';
import UserLink3 from './user/sub-pages/UserLink3';
import UserLink4 from './user/sub-pages/UserLink4';

export default function DashboardWrapper({ user }) {
    const [activeComponent, setActiveComponent] = useState(
        user.role === 'admin' ? 'AdminDashboard' : 'UserDashboard'
    );

    return (
        <div className='flex'>
            <Sidebar role={user.role} setActiveComponent={setActiveComponent} />
            <div className='flex-1'>
                <Topbar name={user.name} />
                <div className='p-4'>
                    {activeComponent === 'AdminDashboard' && <AdminLink1 />}
                    {activeComponent === 'AdminLink2' && <AdminLink2 />}
                    {activeComponent === 'AdminLink3' && <AdminLink3 />}
                    {activeComponent === 'AdminLink4' && <AdminLink4 />}
                    {activeComponent === 'UserDashboard' && <UserLink1 />}
                    {activeComponent === 'UserLink2' && <UserLink2 />}
                    {activeComponent === 'UserLink3' && <UserLink3 />}
                    {activeComponent === 'UserLink4' && <UserLink4 />}
                </div>
            </div>
        </div>
    );
}
