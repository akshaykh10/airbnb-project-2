import Hero from './components/Hero'
import HeroText from './components/HeroText'
import NavBar from './components/Navbar'
import './style.css'

export default function App(){
    return (
        <div>
            <NavBar/>
            <Hero/>
            <HeroText/>
        </div>
        
    )
}