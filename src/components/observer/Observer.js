import { Button, Switch, FormControlLabel } from '@mui/material';

function Observer({ handleClick, handleToggle }) {
  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          handleClick();
          console.log('clickbutton');
        }}
      >
        Click me!
      </Button>&nbsp;&nbsp;
      <FormControlLabel
        control={<Switch name='' onChange={handleToggle} />}
        label='Toggle me!'
      />
    </>
  );
}

export default Observer;
