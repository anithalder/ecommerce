import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delevery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const location = useLocation()
    const querySearcher = new URLSearchParams(location.search)

    const step = querySearcher.get('step')

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    //   const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //       // You probably want to guard against something like this,
    //       // it should never occur unless someone's actively trying to break something.
    //       throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //       const newSkipped = new Set(prevSkipped.values());
    //       newSkipped.add(activeStep);
    //       return newSkipped;
    //     });
    //   };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className='mt-12 px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>

                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            {/* <Box sx={{ flex: '1 1 auto' }} />

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button> */}
                        </Box>

                        <div className='mt-10'>
                            {step == 2 ? <DeliveryAddress/> : <OrderSummary/>}
                        </div>

                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}