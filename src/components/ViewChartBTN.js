import { Link } from 'react-router-dom'

const ViewChartBTN = () => {
    return (
        <div>
            <Link to='/chart' className="btn" style={{ justifyContent: "center", alignItems: "center", display: "flex"}} >ViewChart</Link>
        </div>
    )
}

export default ViewChartBTN
