import Reac,{useState} from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'
const Allitems=()=> {
    const [items,setItems] = useState(Sdata)
  return (
    <div>
        <section className='gallery desi mtop'>
            <div className='container'>
                <div className='content grid'>
                    {items.map((item) => {
                            return <Dcard key={item.id} item={item}/>
                        })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Allitems