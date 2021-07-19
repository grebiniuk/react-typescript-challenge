import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  middle: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%,-50%)',
    width: 300
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  translateIcon: {
    color: '#fff',
    backgroundColor: '#8a50f7',
  },

  dark: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    background: '#000',
    opacity: 0.6,
  },
  btnLabel: {
    position: 'relative',
    left: '-12px',
    display: 'inline-block',
    padding: '6px 12px',
    background: '#8a50f7',
    border: 10,
  },

  btnLabeled: {
    paddingTop: 0,
    paddingBottom: 0,
    border: 0,
  },

  btn: {
    marginBottom: 10
  }
}));
