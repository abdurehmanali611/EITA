"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {

  const t = useTranslations("footer")

  return (
    <div className='my-10 flex flex-col gap-10 p-5'>
      <div className='flex justify-between items-center'>
        <Image src="/assets/EITA.png" alt="EITA" height={100} width={100}/>
        <ul className='flex gap-10'>
            <li>
              <Link href=''>
               <Image src='/assets/gmail.jpg' alt='Gmail' width={50} height={50} className='rounded-full'/>
              </Link>
            </li>
            <li>
              <Link href=''>
               <Image src='/assets/facebook.webp' alt='facebook' width={50} height={50} className='rounded-full'/>
              </Link>
            </li>
            <li>
              <Link href=''>
               <Image src='/assets/telegram.png' alt='telegram' width={50} height={50} className='rounded-full'/>
              </Link>
            </li>
            <li>
              <Link href=''>
               <Image src='/assets/whatsapp.webp' alt='whatsapp' width={50} height={50} className='rounded-full'/>
              </Link>
            </li>
        </ul>
      </div>
      <div className='flex justify-between items-center'>
         <div className='w-[32%] flex flex-col gap-5'>
          <h3 className='font-serif text-xl text-center font-semibold'>{t("Donation to EITA")}</h3>
          <p className='text-center font-mono text-lg'>
            {t("Donate for your wealthiness in the life of heaven: Donate for the sake of Allah")}
          </p>
          <Link 
          className='text-red-400 pl-[100%] text-lg'
          href=''>{t("Donate")}</Link>
         </div>
         <div className='w-[35%] flex flex-col gap-5'>
          <h3 className='font-serif text-xl text-center font-semibold'>{t("Membership to EITA")}</h3>
          <p className='text-center font-mono text-lg'>
            {t("Be a member of our islamic community so you won't lose any updates about the islamic world")}
          </p>
          <div className='flex gap-24'>
            <Link 
            className='text-red-400 text-lg'
            href=''>{t("Paid Membership")}</Link>
            <Link 
            className='text-red-400 text-lg'
            href=''>{t("Free Membership")}</Link>
          </div>
         </div>
      </div>
      <p className='text-lg font-mono text-center'>
        copyright &copy; All Rights Reserved 2024/25
      </p>
    </div>
  )
}

export default Footer