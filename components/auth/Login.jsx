import React from 'react';
import Image from 'next/image';
import LoginForm from './forms/LoginForm';

export default function Login() {
    return (
        <div className='h-screen flex'>
            <div className='flex-1 relative'>
                <Image alt='Scooters' src='/scooters-2.png' fill={true} />
            </div>
            <div className='flex-1 items-center justify-center flex flex-col'>
                <h2 className='text-4xl font-bold mb-5'>Hello Again</h2>
                <p className='text-lg mb-5'>Welcome back, please login!</p>
                <LoginForm />
            </div>
        </div>
    );
}
