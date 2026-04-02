'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function IdadePage() {
    const [age, setAge] = useState('');
    const [birthYear, setBirthYear] = useState(null);
    const router = useRouter();

    const calculateBirthYear = () => {
        const currentYear = new Date().getFullYear();
        const calculated = currentYear - parseInt(age);
        setBirthYear(calculated);
    };

    const clearForm = () => {
        setAge('');
        setBirthYear(null);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-blue-300 w-96 p-8 rounded-lg shadow-lg text-center'>
                <h1 className='text-2xl font-bold mb-6'>Calcular Ano de Nascimento</h1>
                
                <input className=' bg-white border border-gray-300 rounded py-2 px-4 w-full mb-6'
                    type="number"
                    placeholder="Digite sua idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <button 
                    onClick={calculateBirthYear}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-6'
                >
                    Calcular
                </button>

                <div className='bg-white border-2 border-blue-500 rounded p-6 min-h-20 flex items-center justify-center'>
                    {birthYear !== null ? (
                        <p className='text-lg font-bold text-blue-600'>
                            Ano de Nascimento: <strong>{birthYear}</strong>
                        </p>
                    ) : (
                        <p className='text-gray-400'>Resultado aparecerá aqui</p>
                    )}
                </div>

                <div className='flex gap-4 mt-6'>
                    <button 
                        onClick={clearForm}
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex-1'
                    >
                        Limpar
                    </button>
                    
                    <button 
                        onClick={() => router.push('/')}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-1'
                    >
                        Voltar ao Menu
                    </button>
                </div>
            </div>
        </div>
    );
}