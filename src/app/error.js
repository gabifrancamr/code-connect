'use client' 
 
import { ArrowBack } from '@/components/Icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/Heading'

import { useEffect } from 'react'
 
import style from './error/error.module.css'
import banner from './error/500.png'

export default function Error({
  error,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className={style.container}>
      <Image src={banner}/>
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        <span>Voltar ao feed</span> <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}