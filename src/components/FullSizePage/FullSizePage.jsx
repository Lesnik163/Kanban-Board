import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailInformation from '../DetailInformation/DetailInformation';


const FullSizePage = () => {
    return(
        <div>
            <Header title="Awesome Kanban Board"/>
            <DetailInformation />
            <Footer />
        </div>
    )
}
export default FullSizePage;