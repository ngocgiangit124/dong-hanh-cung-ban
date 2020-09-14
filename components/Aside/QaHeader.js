import React, { memo } from 'react';

const QaHeader = memo(() => {
    return (
        <>
            <div className="rounded-lg">
                <img className="w-full rounded-lg" src="../img/qa_header.png" alt="qa" />
            </div>
        </>
    );
});
export default QaHeader;