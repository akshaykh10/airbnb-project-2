import Card from './components/Card'
import Hero from './components/Hero'
import HeroText from './components/HeroText'
import NavBar from './components/Navbar'
import './style.css'
import expData from './expData'


export default function App(){
    let exps=expData.map((exp)=>{
        return <Card
            img={exp.image}
            rating= {exp.rating}
            reviewCount={exp.reviewCount}
            country={exp.country}
            title={exp.title}
            price={exp.price}
            status={exp.status}
        />
    })
    return (
        
        <div>
            <NavBar/>
            <Hero/>
            <HeroText/>
            <section className='row-scroll'>
                {exps} 
            </section>
             
        </div>
        
    )
}