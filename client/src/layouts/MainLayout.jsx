import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IntegrationSection from "../components/IntegrationSection"
import FreeSEOConsultation from "../components/FreeSEOConsultation"

function MainLayout({ children }) {
  return (
   <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-8xl mx-auto">
        {children}
      </main>
       <FreeSEOConsultation />
       <IntegrationSection />
      <Footer />
    </div>
  )
}

export default MainLayout