import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Button'

const Dashboard = () => {
    return (
        <div>
            <Link href='/Form' underline="none">
                <Button
                    variant='contained'
                    color='success'
                    onClick={() => {
                        alert('Success')
                    }}
                >
                    Try to Click me!
                </Button>
            </Link>
            <Link href='/Client' underline="none">
                <Button
                    variant='contained'
                    color='success'
                    onClick={() => {
                        alert('Success')
                    }}
                >
                    Try to Click me!
                </Button>
            </Link>
        </div>
    )
}

export default Dashboard