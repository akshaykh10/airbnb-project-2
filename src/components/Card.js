
import '../style.css'
export default function Card(props){
    return (
        <div className='card'>
            <div className='image'>
                <img src={`./${props.img}`}  width= "176px" height="235px"/>
                <h5 className='sold-out'>{props.status}</h5>
            </div>
            <div className='rating'>
                <span className='star'>&#9733;</span>
                <span className='rated'> {props.rating}</span>
                <span className='location'> ({props.reviewCount}) &#183; {props.country}</span>
            </div> 
            <p className='description'>{props.title}</p>
            <div className='cost'>
                <span className='price'>From ${props.price} / </span>
                <span>person</span>
            </div>
            
        </div>
    )
}