import React, { memo } from 'react'

const NamePage = memo((props) => {
    return (
        <>
            <div className="pb-3">
                <h2 className="text-2xl font-semibold text-gray-500">  {props.children}</h2>
            </div>
        </>
    );
});
export default NamePage;