import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function page() {

  const t = useTranslations("Courses")

  return (
    <div className='flex flex-col gap-10'>
      <div
      style={{backgroundImage: `url(${'/assets/background.jpg'})`, backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}
      className='flex flex-col gap-10 text-center h-[500px] justify-center'
      >
        <h3 className='font-serif text-3xl font-semibold'>{t("Explore Our Courses")}</h3>
        <h4 className='font-mono text-2xl'>{t("Deepen Your Understanding of Islamic Knowledge")}</h4>
      </div>
      <div className='flex flex-col gap-8 px-4'>
         <h3 className='text-center font-serif font-semibold text-xl'>{t("Available Courses")}</h3>
         <h4 className='text-center font-mono text-lg'>{t("Deepen Your Islamic knowledge and understanding")}</h4>
         <div className='flex justify-between gap-10'>
             <div className='flex flex-col gap-10 bg-slate-300 p-4 rounded-xl'>
              <Image 
              src= '/assets/fiqh.webp'
              alt='Fiqh'
              width={400}
              height={400}
              className='rounded-xl mt-5'
              />
              <div className='flex flex-col gap-4'>
              <h4 className='text-center font-serif font-semibold text-xl'>{t("Islamic creed and Jurisprudence")}</h4>
              <p className='font-mono text-lg'>
                {t("This course offers a thorough exploration of Islamic law (Sharia), covering its sources, principles, and applications    The course emphasizes critical thinking and practical applications of legal rulings in contemporary society   By the end, participants will have a solid foundation in the fundamental concepts of Islamic jurisprudence")}
              </p>
              <button className='bg-green-300 w-fit p-3 rounded-xl self-center'>
                {t("Read More")}
              </button>
              </div>
             </div>
             <div className='flex flex-col gap-10 bg-slate-300 p-4 rounded-xl'>
              <Image 
              src= '/assets/quranstudy.webp'
              alt='Fiqh'
              width={400}
              height={300}
              className='rounded-xl'
              />
              <div className='flex flex-col gap-4'>
              <h4 className='text-center font-serif font-semibold text-xl'>{t("Quranic Studies")}</h4>
              <p className='font-mono text-lg'>
              {t("Engage deeply with the Quran through this comprehensive course designed for both beginners and advanced learners   It covers the history of the Quran, its linguistic beauty, and its interpretation (Tafsir)   Students will also participate in discussions on the Quran's relevance in modern life and its moral guidance   This course aims to foster a profound connection with the text and enhance one's understanding of its messages")}
              </p>
              <button className='bg-green-300 w-fit p-3 rounded-xl self-center'>
                {t("Read More")}
              </button>
              </div>
             </div>
             <div className='flex flex-col gap-10 bg-slate-300 p-4 rounded-xl'>
              <Image 
              src= '/assets/sirah.webp'
              alt='Fiqh'
              width={400}
              height={400}
              className='rounded-xl'
              />
              <div className='flex flex-col gap-4'>
              <h4 className='text-center font-serif font-semibold text-xl'>{t("The Prophet Traditions")}</h4>
              <p className='font-mono text-lg'>
              {t("Dive into the teachings of the Prophet Muhammad (peace be upon him) through this course that examines Hadith literature    Students will learn about the classification of Hadith, their authenticity, and their role in shaping Islamic thought and practice    The course includes discussions on how these traditions can be applied to contemporary issues faced by Muslims today   By the conclusion, participants will appreciate the significance of prophetic teachings in daily life")}
              </p>
              <button className='bg-green-300 w-fit p-3 rounded-xl self-center'>
                {t("Read More")}
              </button>
              </div>
             </div>
         </div>
      </div>
    </div>
  )
}
