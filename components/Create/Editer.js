import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { EditorState } from "draft-js";
const Editor = dynamic(
    () => import("react-draft-wysiwyg").then(mod => mod.Editor),
    { ssr: false }
)
function Editer(props) {
    const [state, setState] = useState(EditorState.createEmpty())
    const onEditorStateChange = editorState => {
        setState(editorState);
    };
    return (
        <Editor
            editorState={state}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={(editorState) => onEditorStateChange(editorState)}
        // placeholder="The message goes here..."
        />
    );
}

export default Editer;