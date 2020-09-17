import React, { useState, useRef } from 'react';
import ReactTags from 'react-tag-autocomplete'

function hastag(props) {
    const reactTags = useRef(null)
    const [state, setState] = useState({
        tags: [
            // { id: 1, name: "Apples" },
            // { id: 2, name: "Pears" }
        ],
        suggestions: [
            { id: 3, name: "Tin 1" },
            { id: 4, name: "Tin 2" },
            { id: 5, name: "Tin 3" },
            { id: 6, name: "Tin 4" }
        ]
    })

    const onDelete = (i) => {
        const tags = state.tags.slice(0)
        tags.splice(i, 1)
        setState({ ...state, tags })
    }

    const onAddition = (tag) => {
        const tags = [].concat(state.tags, tag)
        setState({ ...state, tags })
    }

    function TagComponent({ tag, removeButtonText, onDelete }) {
        return (
            <button type='button' title={removeButtonText} onClick={onDelete}>
                {tag.name}
            </button>
        )
    }
    return (
        <ReactTags
            ref={reactTags}
            tags={state.tags}
            suggestions={state.suggestions}
            onDelete={(x) => onDelete(x)}
            onAddition={(x) => onAddition(x)}
            placeholderText={'Thêm mới'}
            // noSuggestionsText="haha"
            delimiters={['Enter', 'Tab']}
            allowNew={true}
        />

    );
}

export default hastag;