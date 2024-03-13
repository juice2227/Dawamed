// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Start',
  'Upload Prescription',
  'Recepient',
  'Payment',
  'Complete'
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = useState(0); 

  const handleStepChange = (stepIndex) => {
    setActiveStep(stepIndex); 
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={() => handleStepChange(index)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
