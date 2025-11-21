import React from 'react';
import AdminNavSidebar from './admin/AdminNavSidebar';
import UserNavSidebar from './user/UserNavSidebar';

export default function Sidebar({ role, setActiveComponent }) {
    return (
        <div className='h-screen w-1/5 border-r-2 pl-5 pt-5'>
            <h2 className='mb-5 text-2xl font-bold'>Scooter app</h2>
            {role === 'admin' ? (
                <AdminNavSidebar setActiveComponent={setActiveComponent} />
            ) : (
                <UserNavSidebar setActiveComponent={setActiveComponent} />
            )}
        </div>
    );
}
