import React, { memo } from 'react';

const ColumRight = memo((props) => {
    return (
        <>
            <div className="col-span-1 ml-4 mr-4 hidden  sm:hidden md:block">
                {props.children}
            </div>

        </>
    );
});

export default ColumRight;