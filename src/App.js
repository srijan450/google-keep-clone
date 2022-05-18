import React from 'react'
import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function App() {
    return (
        <div>
            <Header />
            <CreateNote />
            <Footer />
            {/* <List /> */}
        </div>
    )
}

export default App
