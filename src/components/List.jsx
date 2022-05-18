import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function List({ title, body, Id, dlt }) {
    return (
        <div class="card m-3 height h-auto px-4" style={{ width: "18rem" }}>

            <div class="card-body">
                <h5 class="card-title text-center">{title}</h5>

                <p class="card-text" style={{ textAlign: 'justify' }}>{body}</p>

            </div>
            <p className="setposition text-end"><Button variant="contained" className="Addbutn" onClick={dlt} id={Id}><DeleteIcon /></Button></p >
        </div>
    )
}

export default List
