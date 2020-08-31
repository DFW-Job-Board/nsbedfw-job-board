import React, {useState} from 'react'
import api from '../../utility/api';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import industries from '../../utility/industries';


const useStyles = makeStyles(theme => ({
    formControl: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      mindWidth: 120
    }
}));

export default function AddJobToBoard({open, onClose}) {
    const skillLevels = ["Entry", "Associate","Mid", "Senior"];
    const classes = useStyles();
    const [newJob, setNewJob] = useState({title: "", companyName:"", industry:"", skillLevel:""});

    const handleSubmit = () => {
        api.post('/jobs', newJob);
        console.log("Job Added");
        onClose();

    }

    const isEnabled = () => {
        return newJob.title.length > 0 && newJob.companyName.length > 0 && newJob.industry.length > 0 && newJob.skillLevel.length > 0
    }

    const onChange = (e) => {
        e.preventDefault();
        let tempJob = {
            ...newJob
        };
        if (e.target.name === "industry" || e.target.name === "skillLevel") {
            tempJob[e.target.name] = e.target.value;
            console.log(tempJob);
            setNewJob(tempJob);
        } else {
            tempJob[e.target.id] = e.target.value;
            console.log(tempJob);
            setNewJob(tempJob);
        }
        // setNewJob(tempJob);
    }
    
    return (
        <div>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`We want to get great candidates! Enter the information requested below to let our candidates know that you are hiring. Email info@nsbedfw.org if you would 
                        no longer want your job posting listed.`}
                    </DialogContentText>
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Job Title"
                        type="text"
                        fullWidth/>
                    <TextField
                        onChange={onChange}
                        margin="dense"
                        id="companyName"
                        label="Company Name"
                        type="text"
                        fullWidth/>
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <Select
                        className="select"
                        onChange={onChange}
                        margin="dense"
                        id="industry"
                        label="Industry"
                        type="text"
                        value={newJob.industry}
                        name="industry">
                        {industries.map((industry) => {
                            return <MenuItem name="industry" key={industry} value={industry}>{industry}</MenuItem>
                        })}
                        </Select>
                        <FormHelperText>Industry</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <Select
                        className="select"
                        onChange={onChange}
                        margin="dense"
                        id="skillLevel"
                        label="Skill Level"
                        type="text"
                        value={newJob.skillLevel}
                        name="skillLevel"
                        fullWidth>
                        {skillLevels.map((level) => {
                            return <MenuItem name="skillLevel" key={level} value={level}>{level}</MenuItem>
                        })}
                        </Select>
                        <FormHelperText>Skill Level</FormHelperText>
                    </FormControl>
                    {/* <TextField
                        onChange={onChange}
                        margin="dense"
                        id="skills"
                        label="Skills"
                        type="text"
                        fullWidth/> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={!isEnabled()} onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
