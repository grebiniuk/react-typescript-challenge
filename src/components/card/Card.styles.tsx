import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  img: {
    height: '200px',
    objectFit: 'cover'
  },

  transcribing: {
    opacity: 0.2
  },

  textMuted: {
    opacity: 0.7,
  }
}));
