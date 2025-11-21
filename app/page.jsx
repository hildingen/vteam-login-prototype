import React from 'react';
import Login from '../components/auth/Login';
import { getSession } from '../utils/user';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getSession();

    if (!session) {
        redirect('/auth/login');
    }

    redirect('/dashboard');
}
