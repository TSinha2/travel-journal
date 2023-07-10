import './Entry.css'

export default function Entry(props)
{
    return (
        <div className='entry'>
            <img src={props.item.img}/>
            <div className="entry--content">
                <div className="entry--gmaps">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>                  
                    <p> {props.item.location} </p>
                    <a href={props.item.url}>View on Google Maps</a>
                </div>
                <h1> {props.item.title} </h1>
                <p> {props.item.desc} </p>
                <p className='entry--start_date'>{props.item.start}</p>
                <p className='entry--end_date'>{props.item.end}</p>
            </div>
        </div>
    )    
}