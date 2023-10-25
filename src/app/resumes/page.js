"use client"
import Header from '@/components/header'
import MyResumes from "@/components/myresumes"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyResumes } from '@/app/store/slices/resumeSlice';
// import Userlogin from '../../components/auth/user'
import Link from "next/link"

export default function ResumePage() {
    // const resumes = [1, 2, 3, 4, 5]
    
    const dispatch = useDispatch();
    const resumes = useSelector((state) => state.resume.resumes)
    console.log("here", resumes);
    const didMount = () => {
        dispatch(getMyResumes())
    }

    useEffect(didMount, [])

    return (
        // <main className={styles.main}>
        <main>
            <Header />
            <div className="container">
                <div className='flex flex-ai-c flex-jc-sb ptb7'>
                    <h1>Мои Резюме</h1>
                    <Link className='button button-secondary-bordered' href="/create-resume">Создать резюме</Link>
                </div>
                <MyResumes resumes={resumes}/>
            </div>

        </main>
  )
}
