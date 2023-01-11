import React from 'react';

import './FullSizeMain.css'

const FullSizeMain = () => {
    return(
        <div className='fullSizeMain'>
            <div className='fullSizeMain-wrapper'>
                <div className='fullSizeMain-container'>
                    <h2>Заглушка</h2>
                    <button className='cross-button'><img src='./logo/crossForClosing.svg'  style={{scale:4}}alt='Plus'/></button>
                </div>            
                <section>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsumquas     quibusdam saepe accusantium, fuga voluptate? Nostrum aperiamdolores     quo consequuntur quam. Dolorem quisquam, excepturi placeatsit ipsum     laudantium architecto repellendus!
                </section>
            </div>
        </div>
    )
}
export default FullSizeMain;