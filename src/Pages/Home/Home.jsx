import React from 'react';
import BottomHeader from '../../ShearSection/Header/bottomHeader/BottomHeader';
import VideoSection from '../../Components/VideoSectoion\'/VideoSection';
import TabsSection from '../../Components/TabsSection/TabsSection';

const Home = () => {
    return (
        <div className='mainWidth'>
            <div className=' mt-[30px]'>
                <BottomHeader></BottomHeader>
                <hr className='h-2'/>

                <div>
                    <VideoSection></VideoSection>
                </div>
            </div>
            <div className='py-28'>
                <div>
                    <TabsSection></TabsSection>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;