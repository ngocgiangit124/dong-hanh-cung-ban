import React, { memo } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
const Share = memo((props) => {
    const close = () => {
        props.close()
    }
    return (
        <div id="myModal" className={`modal block`}>
            <div className='modal-content sm:w-full md:w-40%'>
                <div className='modal-title flex justify-between items-center my-2 mx-5'>
                    Share
                    <span className="close" onClick={() => close()}>&times;</span>
                </div>
                <hr />
                <div>
                    {/* overflow-auto h-screen */}
                    <div className='m-8 flex flex-row justify-start items-center'>
                        <img className='mr-16' src='../img/facebook.png' />
                        <img src='../img/twitter.png' />

                    </div>
                    <div className='mb-8 flex flex-row justify-center items-center'>
                        {/* <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 resize-none overflow-hidden block
                    w-90%  appearance-none leading-normal" type="text" disable value="https://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htm" ></textarea> */}
                        <TextareaAutosize className="bg-colorinput text-gray-600 focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 resize-none overflow-hidden block
                    w-90%  appearance-none leading-normal"
                            defaultValue={'https://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htmhttps://donghanhcungbandoc.vn/thu-phi-bot-la-29060.htm'} disabled />
                    </div>
                    {/* <div className="flex justify-center items-center m-10">
                        <img src='../img/waiting.png' />
                    </div> */}
                </div>
                {/* <div>&nbsp;</div> */}
            </div>
        </div >
    );
});
export default Share;