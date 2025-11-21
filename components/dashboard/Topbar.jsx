import React from 'react';
import { User } from 'lucide-react';

export default function Topbar({ name }) {
    return (
        <div className='border-b-2 h-10 flex justify-end items-center'>
            <div className='flex items-center'>
                <User className='mr-2' />
                <p className='mr-10'>Hello, {name}!</p>
            </div>
        </div>
    );
}
