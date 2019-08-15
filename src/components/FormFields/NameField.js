import React, { Fragment } from 'react'


const NameField = ({name}) => {
    return (
        <Fragment>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name={name} value={name} onChange={this.onChange} />
        </Fragment>
    )
}