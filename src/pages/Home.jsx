import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { StarBackground } from '@/components/StarBackground'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ProjectScetion } from '@/components/ProjectScetion'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/*Theme toggle*/}
        <ThemeToggle/>

        {/*Background effects*/}
        <StarBackground/>

        {/*Navbar*/}
        <Navbar/>

        {/*Main content*/}
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectScetion/>
          <ContactSection/>
        </main>

        {/*Footer*/}
        <Footer/>
    </div>
  )
}

export default Home