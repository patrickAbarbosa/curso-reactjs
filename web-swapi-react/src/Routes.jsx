//Icons
import DashboardIcon from '@material-ui/icons/MoveToInbox'
import PeopleIcon from '@material-ui/icons/People'
// Views
import Dashboard from './views/Dashboard/Dashboard.jsx'
import Pessoas from './views/Pessoas/Pessoas.jsx'

const dashboardRoutes = [
    {
        path: '/',
        name: "Dashboard",
        icon: DashboardIcon,
        key: "dashboard",
        component: Dashboard
    },
    {
        path: '/pessoas',
        name: "Pessoas",
        key: "pessoas",
        icon: PeopleIcon,
        component: Pessoas
    }
]

export default dashboardRoutes