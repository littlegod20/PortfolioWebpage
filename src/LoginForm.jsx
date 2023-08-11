import * as React from 'react';


const LoginForm = () => {
    return(
        <form className='Email'>
           
            <input type="text" name="mail" id="EmailBar" />
           
            <button className='SubscribeButton'>Subscribe Now</button>

            <div className='ContactMedia'>

            </div>
           
        </form>
    );
}
export {LoginForm};