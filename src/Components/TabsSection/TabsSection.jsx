import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "./Card";
import { Link } from "react-router-dom";


const TabsSection = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex  gap-10'>
                    <Tab
                        className={`border-2 border-black rounded-full px-4 py-2 ${tabIndex === 0 ? 'active-tab' : ''
                            }`}
                    >
                        Pitch
                    </Tab>
                    <Tab
                        className={`border-2 border-black rounded-full px-4 py-2 ${tabIndex === 1 ? 'active-tab' : ''
                            }`}
                    >
                        Details
                    </Tab>
                    <Tab
                        className={`border-2 border-black rounded-full px-4 py-2 ${tabIndex === 2 ? 'active-tab' : ''
                            }`}
                    >
                        Discussion
                    </Tab>
                    <Tab
                        className={`border-2 border-black rounded-full px-4 py-2 ${tabIndex === 3 ? 'active-tab' : ''
                            }`}
                    >
                        Updates
                    </Tab>
                </TabList>

                <div className="my-10 p-3 lg:flex sm:block gap-5 border">
                    <div className="lg:w-[70%] w-full  border p-2 ">
                        <TabPanel>
                            <div className="flex justify-between">
                                <h2>Deck Info</h2>
                                <div className="flex p-2 gap-2 items-center bg-blue-500 text-white">
                                    <img className="w-[20px] text-white" src="https://i.ibb.co/FbJYrHy/477125.png" alt="" />
                                    <Link to='https://api.pepcorns.com/clientassets/icon1677255746699.pdf' target="_blank">
                                        <button >CosIQ_pitch.pdf</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="">

                                <div className="py-5">
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/3CF0Pjc/We-make-Skincare-Intelligent-1-01.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/74PgN79/We-make-Skincare-Intelligent-1-02.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/4F1p1XR/We-make-Skincare-Intelligent-1-03.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/3sRCzk8/We-make-Skincare-Intelligent-1-05.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/hcFfJbt/We-make-Skincare-Intelligent-1-06.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/r4wF3pJ/We-make-Skincare-Intelligent-1-07.png" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="https://i.ibb.co/sFhGP8h/We-make-Skincare-Intelligent-1-08.png
" alt="" />
                                    </div>
                                    <div className="py-4">
                                        <img className="max-w-[100%]" src="                            https://i.ibb.co/VSPxF5q/We-make-Skincare-Intelligent-1-10.png
" alt="" />
                                    </div>

                                </div>
                            </div>


                        </TabPanel>
                    </div>


                    <div className="">
                        <div>

                            <h2 className="text-xl font-semibold">Documents</h2>
                            <div className="flex justify-between p-2 gap-20 py-3 my-5 items-center  border text-black w-full">

                                <button>CosIQ_pitch.pdf</button>
                                <img className="w-[20px] text-white" src="https://i.ibb.co/FbJYrHy/477125.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <Card price={'500000'} reward1={'Community perks & notable mention'} reward2={'Community access & benefits'} limitStart={16} limitEnd={17}></Card>

                            <Card price={'80000'} reward1={'All of the above + early access to our newly launched product for feedback'} limitStart={5} limitEnd={10}></Card>

                            <Card price={' 90000'} reward1={'All of the above + Receive a fresh coupon each quarter!'} limitStart={3} limitEnd={5}></Card>

                            <Card price={'500000'} reward1={'Community perks & notable mention'} reward2={'Community access & benefits'} limitStart={16} limitEnd={17}></Card>

                            <Card price={'500000'} reward1={'Community perks & notable mention'} reward2={'Community access & benefits'} limitStart={16} limitEnd={17}></Card>
                            <Card price={'500000'} reward1={'Community perks & notable mention'} reward2={'Community access & benefits'} limitStart={16} limitEnd={17}></Card>

                            <Link className="mt-5" to='/'>Custom Offer? Click Here</Link>
                        </div>
                    </div>

                </div>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsSection;