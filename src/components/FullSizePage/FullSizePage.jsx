import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FullSizeMain from '../FullSizeMain/FullSizeMain';


const FullSizePage = () => {
    return(
        <div>
            <Header title="Awesome Kanban Board"/>
            <FullSizeMain />
            <Footer />
        </div>
    )
}
export default FullSizePage;