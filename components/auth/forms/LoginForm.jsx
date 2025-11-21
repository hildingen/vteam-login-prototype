'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useActionState } from 'react';
import { signin } from '../../../app/actions/auth';

export default function LoginForm() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false);
    const [state, action, pending] = useActionState(signin, undefined);

    return (
        <div className='w-md'>
            <form action={action} className=''>
                <input
                    className='w-full bg-gray-200 p-2 rounded-md text-xl mt-3 h-14 border-detail border-2  focus:border-accent'
                    placeholder='Enter email...'
                    name='email'
                    type='text'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className='flex justify-between items-center relative w-full'>
                    <input
                        className='w-full bg-gray-200 p-2 rounded-md text-xl mt-3 h-14 border-detail border-2  focus:border-accent'
                        placeholder='Enter password...'
                        name='password'
                        type={viewPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {viewPassword ? (
                        <EyeOff
                            onClick={() => {
                                setViewPassword(!viewPassword);
                            }}
                            className='absolute right-0 -mb-3 mr-2 hover:text-detail cursor-pointer'
                        />
                    ) : (
                        <Eye
                            onClick={() => {
                                setViewPassword(!viewPassword);
                            }}
                            className='absolute right-0 -mb-3 mr-2 hover:text-detail cursor-pointer'
                        />
                    )}
                </div>
                {state?.errors?.password && <p>{state.errors.password}</p>}

                <button
                    type='submit'
                    disabled={pending}
                    className='bg-detail rounded-md w-full text-2xl text-center mt-5 py-2 hover:opacity-80 border-2 hover:border-accent cursor-pointer'
                >
                    Login
                </button>
            </form>
        </div>
    );
}
