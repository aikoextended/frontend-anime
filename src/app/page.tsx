"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Add your logic for registration here
        console.log('Registering:', { name, email, password, confirmPassword });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md">
                <div>
                    <label htmlFor="name" className="text-black">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-black">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-black">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="text-black">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                    Register
                </button>
            </form>
        </div>
    );
}