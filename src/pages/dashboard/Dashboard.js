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
                    Add Wedding Organizer
                </Button>
            </Link>
        </div>
    )
}

export default Dashboard