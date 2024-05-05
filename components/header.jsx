import React from 'react'
import { Menu, MessageCircleMore } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className='flex justify-between px-6 lg:px-24 items-center border-b-2 border-black h-20'>
        <figure className='w-52'>
            <img className='w-full' src="/images/logo.png" alt="logo soluções metálicas" />
        </figure>
        <nav>
            <ul className='hidden lg:flex gap-6 [&>li:hover]:text-teal-400 [&>li:hover]:cursor-pointer [&>li:hover]:transition [&>li:hover]:ease-in-out [&>li:hover]:duration-300'>
                <li>Inicio</li>
                <li>Sobre nós</li>
                <li>Serviços</li>
                <li>Obras</li>
                <li>Qualidade e Segurança</li>
                <li>Orçamento</li>
            </ul>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className='lg:hidden' size={32} />
                </SheetTrigger>
                <SheetContent>
                    <ul className='flex flex-col gap-6 [&>li:hover]:text-teal-400 [&>li:hover]:cursor-pointer [&>li:hover]:transition [&>li:hover]:ease-in-out [&>li:hover]:duration-300'>
                        <li>Inicio</li>
                        <li>Sobre nós</li>
                        <li>Serviços</li>
                        <li>Obras</li>
                        <li>Qualidade e Segurança</li>
                        <li>Orçamento</li>
                        <li className='mx-auto'><Button className='bg-teal-600 border-none hover:bg-teal-400'><MessageCircleMore /> Fale conosco</Button></li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    </header>
  )
}
