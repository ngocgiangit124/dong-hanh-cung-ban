import React, { memo, Component, PropTypes, useState } from 'react'
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(
    () => import('react-rte'),
    { ssr: false }
)


const Editer = memo(({ value, setValue }) => {

    const [editorValue, setEditorValue] =
        React.useState(RichTextEditor.createEmptyValue());

    const handleChange = value => {
        setEditorValue(value);
        setValue(value.toString("markdown"));
    };

    return (
        <RichTextEditor
            value={editorValue}
            onChange={handleChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{ minHeight: 410 }}
        />
    );
});
export default Editer;
