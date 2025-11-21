import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { signout } from '../../../app/actions/auth';

export default function AdminNavSidebar({ setActiveComponent }) {
    return (
        <div className='flex flex-col'>
            <button
                type='button'
                className='flex items-center gap-2 cursor-pointer group py-4 border-b'
                onClick={() => setActiveComponent('AdminDashboard')}
            >
                <User className='text-accent group-hover:scale-130 ease-in-out duration-300' />
                <p className='text-xl group-hover:translate-x-4 ease-in-out duration-300'>
                    Admin Dashboard
                </p>
            </button>

            <button
                type='button'
                className='flex items-center gap-2 cursor-pointer group py-4 border-b'
                onClick={() => setActiveComponent('AdminLink2')}
            >
                <User className='text-accent group-hover:scale-130 ease-in-out duration-300' />
                <p className='text-xl group-hover:translate-x-4 ease-in-out duration-300'>
                    Admin nav 2
                </p>
            </button>

            <button
                type='button'
                className='flex items-center gap-2 cursor-pointer group py-4 border-b'
                onClick={() => setActiveComponent('AdminLink3')}
            >
                <User className='text-accent group-hover:scale-130 ease-in-out duration-300' />
                <p className='text-xl group-hover:translate-x-4 ease-in-out duration-300'>
                    Admin nav 3
                </p>
            </button>

            <button
                type='button'
                className='flex items-center gap-2 cursor-pointer group py-4 border-b'
                onClick={() => setActiveComponent('AdminLink4')}
            >
                <User className='text-accent group-hover:scale-130 ease-in-out duration-300' />
                <p className='text-xl group-hover:translate-x-4 ease-in-out duration-300'>
                    Admin nav 4
                </p>
            </button>

            <form action={signout}>
                <button type='submit' className='text-danger cursor-pointer'>
                    Sign out
                </button>
            </form>
        </div>
    );
}
