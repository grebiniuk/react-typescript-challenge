import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  middle: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%,-50%)',
    maxWidth: 300,
    minWidth: 200,
  },
  textMuted: {
    opacity: 0.7,
  }
}));
