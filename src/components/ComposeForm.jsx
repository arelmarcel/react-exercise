import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import { toast } from 'wc-toast'

import './ComposeForm.css';


//pass onSubmit ke dalam ComposeForm
function ComposeForm({ onSubmit }) {
    const [editorValue, setEditorValue] = useState('')
    // console.log(editorValue)

    useEffect(() => {
        if (editorValue.length > 0) {
            document.title = `Typing ${editorValue.length} char tweet`
        }
        // return document.title = `React Twitter Clone`
    })
    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value)
    }

    //fungsi baru utk handle submit
    // useEffect(() => {
    //     toast("Tweeted!")
    // })
    const handleSubmit = (e) => {
        //handle agar tidak auto reload saat tombol disubmit
        e.preventDefault()
        //conditional rendering checking whether the tweet contains null
        {
            editorValue.length > 0 &&
                onSubmit(editorValue)
        }


        //saat klik submit membersihkan form/ bagian utk tweet
        setEditorValue('')
        document.title = `React Twitter Clone`
    }
    return (
        <form className="compose-form" onSubmit={handleSubmit}>
            <div className="compose-form-container">
                <Avatar />
                <textarea
                    value={editorValue}
                    onChange={handleEditorValueChange}
                    className="compose-form-textarea"
                    placeholder="what's happening?"

                />
            </div>
            <div>
                <button className="compose-form-submit">Tweet</button>
            </div>
            {/* <button className="compose-form-submit">Tweet</button> */}
        </form>
    )
}

ComposeForm.propType = {
    onSubmit: PropTypes.func.isRequired,
}

export default ComposeForm;