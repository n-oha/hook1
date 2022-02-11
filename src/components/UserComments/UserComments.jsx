import React, { useState, useEffect } from 'react'

import styles from './UserComments.module.css'

const UserComments = () => {
    const [ userComment, setUserComment ] = useState('')

    useEffect(() => {
        console.log('render click action')
    }, [userComment])

    const refresh = () => {
        setTimeout(() => {
            window.location.reload(false)
        })
    }

    return (
        <div className={styles.container}>
            <button onClick={() => setUserComment('Hello')}>First Button</button>
            <button onClick={() => setUserComment('Nice')}>Second Button</button>
            <button onClick={() => setUserComment('Bye Bye')}>Third Button</button>
            <h1>{userComment}</h1>
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}

export default UserComments