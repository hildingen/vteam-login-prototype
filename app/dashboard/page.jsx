import React from 'react';
import DashboardWrapper from '../../components/dashboard/DashboardWrapper';
import users from '../../json/users.json';
import { getSession } from '../../utils/user';
import { redirect } from 'next/navigation';

export default async function Page() {
    async function getUser() {
        'use server';

        const session = await getSession();

        if (!session) {
            redirect('/auth/login');
        }

        const user = users.find((item) => session.email === item.email);

        if (!user) {
            throw new Error('No user found!');
        }

        return user;
    }

    const user = await getUser();

    return (
        <div>
            <DashboardWrapper user={user} />
        </div>
    );
}
