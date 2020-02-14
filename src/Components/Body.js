import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Languages from './Languages'
import ContactAndSocials from './ContactAndSocials'
import Projects from './Projects'

export default function Body() {
    return (
        <>
           <AboutMe/> 
           <Skills/>
           <Languages/>
           {/* <Projects/> */}
           <ContactAndSocials/>
        </>
    )
}
