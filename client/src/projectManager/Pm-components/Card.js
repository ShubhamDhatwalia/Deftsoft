import React from 'react';
import UserImage from '../images/user.jpeg'

function Card(){
    return(
        <>
            <div className='card'>

                <div className='img-box w-full flex flex-col items-center -ml-3'>

                    <img src={UserImage} alt='user image' className='object-cover w-40 h-40 rounded-full border-2 border-gray-300 shadow-lg shadow-gray-500/50 hover:scale-105'/>

                    <h3 className='text-left mt-2 font-semibold text-sm'>Robert Brown Junior</h3>
                    <p className='text-sm pl-3'>Software Engineer</p>
                    {/* <button type="button" className='bg-gray-200 w-40 rounded-lg mt-2 text-sm hover:bg-green-300 hover:pointer hover:scale-105'>View Profile</button> */}
                </div>
                
            </div>
        </>
    );
}

export default Card;