import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {

  const t = useTranslations("Dashboard")
  const navigation = useRouter()

  return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5 text-center w-[50%] self-center h-full pt-28'>
            <p className='font-mono text-lg'>
             {t("Empowering minds through the profound teachings of Islam, fostering a community of knowledge and understanding")}
            </p>
            <h4 className='font-mono text-2xl font-semibold'>
             {t("Welcome to the Ethiopian Islamic Teaching Organization")}
            </h4>
        </div>
      <button 
      onClick={() => navigation.push('/AboutUs')}
      className='bg-rose-400 p-3 rounded-xl self-center'>
        {t("Learn More")}
      </button>
    </div>
  )
}

export default Dashboard