import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btn: {
    backgroundColor: '#4285F4',
    marginTop:'20px',
    width:'10rem',
    borderRadius:0
  }
}));
export default useStyles
