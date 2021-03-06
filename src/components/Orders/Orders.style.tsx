import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export const useStylesOrders = makeStyles((theme: Theme) => {
    return (
    createStyles({
      root: {
        padding: theme.spacing(3),
      },
      toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
      },
      title: {
      },
      search: {
      },
      searchtextfield: {
        paddingLeft: theme.spacing(1),
        background: 'WhiteSmoke'
      }
    }))
});


/*==================================*/
export const colors = {
  "completed": {
    '--background-start': '#76D3C9',
    '--background-end': '#CEEDEB',
  } as React.CSSProperties,
  "processing": {
    '--background-start': '#FBA285',
    '--background-end': '#FEE2E1',
  } as React.CSSProperties,
  "cancelled": {
    '--background-start': '#E2E3E5',
    '--background-end': '#F1ECE1',
  } as React.CSSProperties,
  "refunded": {
    '--background-start': '#ABA4D3',
    '--background-end': '#E7B8D9',
  } as React.CSSProperties
}

export const useStylesStatusSelector = makeStyles((theme: Theme) => {
  return (
    createStyles ({
        root: 
        {
          '&:focus':{
            background: 'transparent'
        }
        }
    })
  )
})