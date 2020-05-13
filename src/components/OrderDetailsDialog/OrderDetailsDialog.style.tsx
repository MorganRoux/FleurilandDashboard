import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export const useStylesDetailsDialog = makeStyles((theme: Theme) => {
    return (
    createStyles({
      dialogContent: {
        background: 'WhiteSmoke'
      },
      container: {
        paddingBottom: theme.spacing(3),
        paddingTop : theme.spacing(3),
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
      },
      tableContainer: {
        marginTop: theme.spacing(1),
      },
      mainTitle: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      title: {
          paddingBottom : theme.spacing(1)
      }, 
      main: {
        padding: theme.spacing(3),
        margin : theme.spacing(2),
      },
      contact: {
        padding: theme.spacing(3),
        margin : theme.spacing(2),
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      address: {
        flexGrow: 1,
      },
      details: {
        padding: theme.spacing(3),
        margin : theme.spacing(2),
      }
    }))
});
