import React from 'react'
import HomeCom_1 from '../../Components/HomePageComponents/HomeCom_1'
import HomeCom_2 from '../../Components/HomePageComponents/HomeCom_2'
import HomeCom_3 from '../../Components/HomePageComponents/HomeCom_3'

function Home() {
    return (
        <div>
            <div className='bg-black '>
                    <div>

                <HomeCom_1 />
                    </div>
                
                <HomeCom_2 />
              
                <HomeCom_3/>
              
            </div>
        </div>
    )
}

export default Home


