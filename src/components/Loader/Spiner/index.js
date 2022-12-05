import './style.css'

const Spinner = ({ height = '35px', width = '35px'}) => {
    return (
        <div style={{ height, width }} className="spinner"></div>
    )
}

export default Spinner
