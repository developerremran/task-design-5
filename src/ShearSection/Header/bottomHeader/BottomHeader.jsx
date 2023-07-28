import '../headerStyle.css';

const BottomHeader = () => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <img className="w-[15px] h-[15px]" src="https://i.ibb.co/F0wbKCn/7865119.png" alt="" />
                <p className="text-lg text-gray-400">Back</p>
            </div>
            <div className='flex justify-between py-10'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='max-w-[50px] h-[50px]' src="https://i.ibb.co/9pm8FCZ/icon1677254912017.png" alt="" />
                    </div>
                    <div className='space-y-2'>
                    <span className='text-[2rem] font-bold'>CosIQ</span> <br />
                    <span className='text-gray-400'>Delhi,</span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button
                        type="button"
                        className="navBtnStyleGetStart p-2"
                    >
                        Get started
                    </button>
                    <button
                        type="button"
                        className="navBtnStyleGetStart"
                    >
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;