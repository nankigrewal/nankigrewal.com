// Step 1: Import React
import * as React from 'react'
import NavBar from '../components/nav'
import AboutMe from '../components/aboutme'
import Footer from '../components/footer'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <div style={{ position: "fixed", width: "100%", bottom: 0 }}>
        <Footer />
      </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage