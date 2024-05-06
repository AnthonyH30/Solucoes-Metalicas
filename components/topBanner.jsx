import React from 'react'
import { MessageCircleMore, Handshake } from 'lucide-react';
import { Button } from './ui/button'

export default function TopBanner() {
  return (
    <section className='bg-[url("/images/construcao.png")] min-h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center sm:items-start justify-center px-4 text-center md:text-left'>
        <h1 className='text-[42px] lg:text-7xl font-bold text-white leading-[45px] lg:leading-[80px]'><span className='text-teal-400'>Soluções completas em aço</span> para obras comerciais e industriais</h1>
        <p className='text-white mt-2 text-lg'><span className='text-teal-400'>Economize tempo e dinheiro da sua obra</span> construindo com soluções inteligentes e mais eficientes</p>
        <div className='mt-6 flex flex-wrap gap-4 flex-col sm:flex-row items-center'>
            <Button className='rounded-none bg-teal-600 text-lg hover:bg-teal-400 px-8 py-6'>Saiba mais&nbsp;<MessageCircleMore size={20} /></Button>
            <Button className='rounded-none bg-white text-black text-lg hover:bg-slate-400 px-8 py-6'>Solicitar orçamento&nbsp;<Handshake size={20} /></Button>
        </div>
    </section>
  )
}
