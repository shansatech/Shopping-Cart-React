import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    button: {

        marginTop: '40px',


    },
    cardGrid: {
        padding: '20px'
    },
    card: {
        height: '100%',
        width: '210px',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%',

    },
    cardContent: {
        flexGrow: 4,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }

}))

export default useStyles;