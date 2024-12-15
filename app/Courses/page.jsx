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
      <div className='flex flex-col gap-10 mx-4 bg-stone-300 p-4 rounded-xl'>
          <h3 className='text-center font-serif font-semibold text-2xl'>{t("Enroll now")}</h3>
          <h4 className='text-center font-mono text-xl'>{t("Join a community of learners")}</h4>
          <div className='flex justify-between gap-10'>
            <div className='bg-slate-400 p-3 rounded-xl flex flex-col gap-5'>
              <h3 className='text-center font-serif font-semibold text-xl'>{t("Eligibility Criteria")}</h3>
              <p className='text-lg font-mono'>
              {t("To enroll in our courses, students should meet specific eligibility criteria, which include having a foundational understanding of Islamic teachings    For advanced courses, prior completion of prerequisite courses may be required    We encourage all interested individuals to review the course descriptions carefully to ensure they meet the necessary qualifications before applying")}
              </p>
            </div>
            <div className='bg-slate-400 p-3 rounded-xl flex flex-col gap-5'>
              <h3 className='text-center font-serif font-semibold text-xl'>{t("Application Process")}</h3>
              <p className='text-lg font-mono'>
              {t("The application process is straightforward and can be completed online through our website   Interested students must fill out the application form, providing necessary details such as educational background and areas of interest    Once submitted, our administrative team will review the application and notify applicants of their acceptance via email, along with further instructions for enrollment")}
              </p>
            </div>
          </div>
          <div className='bg-slate-400 p-3 rounded-xl flex flex-col gap-5 w-[48%]'>
              <h3 className='text-center font-serif font-semibold text-xl'>{t("Payment Options")}</h3>
              <p className='text-lg font-mono'>
               {t("We offer flexible payment options to accommodate all students   Payments can be made through credit/debit cards, bank transfers, or installment plans, depending on the course structure     Detailed information about course fees and payment deadlines will be provided upon acceptance into the program,ensuring that students can choose the method that best suits their financial situation")}
              </p>
            </div>
          <button className='bg-green-300 w-fit px-8 rounded-xl py-2 self-center'>
            {t("Apply")}
          </button>
      </div>
    </div>
  )
}
