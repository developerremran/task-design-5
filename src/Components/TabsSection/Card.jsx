
const Card = ({ price, reward1, reward2, limitStart, limitEnd }) => {
    return (
        <div className="border p-5">
            <div className="w-[100%]">
                <div className="space-y-8">
                    <h2><span className="text-xl font-semibold">₹{price} </span><br />
                        <hr />
                    </h2>

                    <div>
                        <p>Rewards</p>
                        <li style={{ listStyle: 'circle' }}>{reward1}</li>
                        <li style={{ listStyle: 'circle' }}>{reward2}</li>
                    </div>

                    <div>
                        <h2 className="text-md font-semibold">Terms And Condition</h2>
                        <p>Community participants offer.</p>
                    </div>


                    <div>
                        <button className="bg-blue-600 w-full  text-white text-center p-3">Invest ₹{price}</button>
                        <p className="text-center">
                            CSOP
                            Limited ( {limitStart} of {limitEnd} left)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;