import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import List from './List'

function CreateNote() {
    const [data, setData] = useState({ clicked: false, added: [] });
    const [input, setinput] = useState({ title: '', body: '' })
    const Expand = () => {
        setData((previous) => {
            return {
                ...
                previous, clicked: true
            }
        })
    }
    const Collapse = () => {
        setData((previous) => {
            return {
                ...previous, clicked: false
            }
        })
    }

    const fetchInput = (e) => {
        const { name, value } = e.target;
        setinput((privious) => {
            return {
                ...privious,
                [name]: value
            }
        })
    }

    const Addit = () => {
        setData((previous) => {
            if (input.title !== '')
                return {
                    ...previous,
                    added: [...previous.added, input]
                }
            return {
                ...previous
            }
        });
        setinput({ title: '', body: '' })
        Collapse();
    }
    const delt = (e) => {
        console.log(e.target.id)
        setData((previous) => {
            return {
                ...previous,
                added: previous.added.filter((val, ind) => ind != 0)
            }

        })
    }

    return (
        <>
            <div className="d-flex justify-content-center m-md-4 m-2">
                <div className="border shadow p-3 w-100" style={{ borderRadius: "20px" }} onFocus={Expand}>
                    {
                        data.clicked ? <div className="input-group">
                            <input type="text" name="title" onInput={fetchInput} value={input.title} className="w-100 border-0 fs-3" placeholder="Title" style={{ outline: 'none' }} />
                        </div> : ''

                    }

                    <textarea placeholder="Add a note..." name="body" onInput={fetchInput} value={input.body} className=" w-100 border-0" style={{ outline: 'none', overflowY: 'auto', resize: 'none' }}></textarea>
                    {
                        data.clicked ? <p className=" text-end m-0"><Button variant="contained" className="Addbutn" onClick={Addit}><AddIcon /></Button>  </p> : ''
                    }
                </div>
            </div>
            {
                data.added.length ?
                    <h2 className=" text-center mt-4 ">My Listed Tasks</h2> : ''
            }
            <div className="border maindiv" >
                {data.added.map((val, index) => {
                    console.log(index)
                    return (
                        < List
                            key={index}
                            title={val.title}
                            body={val.body}
                            Id={index}
                            dlt={delt}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default CreateNote;