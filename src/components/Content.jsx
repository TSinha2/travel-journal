import './Content.css'
import Entry from './Entry.jsx'
import item from '../data.js'


export default function Content()
{
    let entries = item.map((value, index, array) => (
        <div key={value.key}>
            <Entry item={value}/>
            {index < array.length-1 && <hr/>}
        </div>
    ))

    return (
        <main>
            {/* <Entry item={item[2]}/> */}
            {entries}
        </main>
    )    
}