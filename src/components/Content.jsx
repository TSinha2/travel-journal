import './Content.css'
import Entry from './Entry.jsx'



export default function Content()
{
    let item = {
        'img': 'https://images.unsplash.com/photo-1628926867153-b6bad577f000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        'url': 'https://www.google.com',
        'desc': 'Some random text',
        'start': '12 Jan, 2000',
        'end': '12 Dec, 2001',
        'title': 'Shimogō, Fukushima',
        'location': 'JAPAN'
    }

    return (
        <main>
            <Entry item={item}/>
        </main>
    )    
}