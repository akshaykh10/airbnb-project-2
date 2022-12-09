import exp1 from '../images/exp1.png'
import '../style.css'
export default function Card(){
    return (
        <div className='card'>
            <div className='image'>
                <img src={exp1} width= "176px" height="235px"/>
                <h5 className='sold-out'> SOLD OUT</h5>
            </div>
            <div className='rating'>
                <span className='star'>&#9733;</span>
                <span className='rated'> 5.0</span>
                <span className='location'> (6) &#183; USA</span>
            </div> 
            <p className='description'>Life lessons with Katie Zaferes</p>
            <div className='cost'>
                <span className='price'>From $136 / </span>
                <span>person</span>
            </div>
            
        </div>
    )
}