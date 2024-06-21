import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

function OrderTracker({activeStep}) {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step) => (
                    <Step key={step} sx={{ color: '#03424C', fontSize: '44px' }}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default OrderTracker
