import VideoSet from "../Video/VideoSet";




const VideoSection = () => {
    return (
        <div>
            <div>
                <div className="flex pt-3 pb-5">
                    <p className="bg-[#c3b1e1] px-2"># BEAUTY & PERSONAL CARE</p>
                    <p className="bg-[#f3eac0] mr-2 px-2"># SHARK TANK</p>
                    <p># FMCG</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Molecular skincare brand focussed on safe & visible results</h2>
                    <div className="flex gap-5 py-6">
                        <div className="flex gap-2 items-center">
                            <img className="w-[20px] h-[20px] items-center" src="https://i.ibb.co/YNbYSfq/4683959.png" alt="" />
                            <p>https://mycosiq.com</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-[20px] h-[20px]" src="https://i.ibb.co/TY7XMSS/5254487.png" alt="" />
                            <p>AAGCI5003E</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:flex gap-20 items-center justify-between">
                <div className="lg:w-[70%] w-full bg-black">
                    <VideoSet></VideoSet>
                </div>
                <div className="w-[100%] lg:p-0 p-10">
                    <div className="space-y-8">
                        <h2><span className="text-xl font-semibold">₹1450000 </span><br /> 56.20 % of minimum goal raised

                              <hr />
                        </h2>
                  
                        <h2>
                            <span className="text-xl font-semibold">113</span> <br />Total investors
                       
                       <hr />
                       </h2>
                        

                        <h2>
                           <span  className="text-xl font-semibold"> 16 Days</span> <br /> Left to Invest
                           
                        </h2>
             

                        <div>
                            <button className="bg-black w-full  text-white text-center p-3">Login to Invest</button>
                            <p className="text-center">₹ 1000 Minimum Investment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;