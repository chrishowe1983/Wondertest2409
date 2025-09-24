import '../App.css'
import { PageRouter } from "@/PageRouter"
import { Toaster } from "@/components/ui/toaster"
import { emotions } from "@/lib/config"
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  const onNavigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageRouter 
        currentPage={currentPage}
        onNavigate={onNavigate}
        emotions={emotions}
      />
      <Toaster />
    </>
  )
}

export default App