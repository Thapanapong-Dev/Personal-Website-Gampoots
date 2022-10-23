import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setPage } from '../redux/service/pageSlice'

import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { useLocation } from 'react-router-dom'

export default function LoginPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPage("login"))
    })
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

