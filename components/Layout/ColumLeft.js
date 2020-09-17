import React, { memo } from 'react';

const ColumLeft = memo((props) => {
    return (
        <>
            <div className=" md:col-span-2 xs:ml-3 xs:mr-3 md:ml-4 md:mr-4 mb-20">
                {props.children}
            </div>
        </>
    );
});

export default ColumLeft;