import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Wrapper from './Wrapper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Popover, OverlayTrigger } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 390,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    fileinputfordocs: {
        marginTop: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Customer Id', 'Comcast Application', 'Primary Identification', 'Secondary Identification', 'Internet Essentails Documents'];
}

function getFileInputComponent(inputName) {
    let inputId = "inputGroupFile-" + inputName;
    const [labelName, setLabelName] = React.useState("Choose file");
    function handleChange(event) {
        setLabelName(event.target.value);
      }
    return (<div className="input-group file-app-input">
                <div className="input-group-prepend">
                <span className="input-group-text" >
                    Upload
                </span>
                </div>
                <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id={inputId}
                    onChange={handleChange}
                />
                <label className="custom-file-label" htmlFor={inputId}>
                    {labelName}
                </label>
                </div>
            </div>);
}



function getStepContent(step) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
      });
    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
    }

    const popover = (
        <Popover id="popover-basic">
          Information Goes Here!!
        </Popover>
    );
   
    switch (step) {
        case 0:
            return (<TextField variant="outlined" label="Customer Id" className={classes.textField} />);
        case 1:
            return getFileInputComponent("ComcastApp");
        case 2:
            return <div>
                        <InputLabel htmlFor="age-simple">
                            Document Type
                        </InputLabel>
                        <Select
                        value={values.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                        className={classes.formControl}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                <i className="fa fa-info fa-lg info-icon-spacing"></i>
                        </OverlayTrigger>
                        <div className={classes.fileinputfordocs}>{getFileInputComponent("PrimaryIdentification")}</div>
                    </div>;
        case 3:
            return  <div>
                        <InputLabel htmlFor="age-simple">Document Type</InputLabel>
                        <Select
                        value={values.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }} 
                        className={classes.formControl}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                <i className="fa fa-info fa-lg info-icon-spacing"></i>
                        </OverlayTrigger>
                        <div className={classes.fileinputfordocs}>{getFileInputComponent("SecondaryIdentification")}</div>
                    </div>;
        case 4:
            return  <div>
                        <InputLabel htmlFor="age-simple">Document Type</InputLabel>
                        <Select
                        value={values.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }} 
                        className={classes.formControl}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                <i className="fa fa-info fa-lg info-icon-spacing"></i>
                        </OverlayTrigger>
                        <div className={classes.fileinputfordocs}>{getFileInputComponent("InternetEssentailsDocuments")}</div>
                    </div>;
        default:
            return 'Unknown step';
    }
}

const UploadForm = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    return (
        <Wrapper>
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <div>{getStepContent(index)}</div>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <div>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    {/* <Button 
                        variant="contained"
                        color="primary"
                        onClick={handleReset} 
                        className={classes.button}>
                        Reset
                    </Button> */}
                </div>
            )}
        </div>
        </Wrapper>
    );
}
export default UploadForm;
