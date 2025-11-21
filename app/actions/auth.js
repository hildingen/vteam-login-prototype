'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import users from '../../json/users.json';

export async function signin(state, formData) {
    let email = formData.get('email');

    let password = formData.get('password');

    const user = users.find((user) => user.email === email);

    if (!user) {
        throw new Error('No user found');
    }

    // const isValid = await bcrypt.compare(password, user.passwordHash);
    const isValid = password === user.passwordHash;

    if (!isValid) {
        throw new Error('Password does not match email');
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    const cookieStore = await cookies();

    cookieStore.set('token', token, { httpOnly: true });

    redirect('/dashboard');
}

export async function signout() {
    const cookieStore = await cookies();

    cookieStore.delete('token');

    redirect('/auth/login');
}
