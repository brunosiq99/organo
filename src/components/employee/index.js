import './employee.css';

export const Employee = (props) => {
    return(
        <div className='employee'>
            <div style={props.teamPrimaryColorStyle} className='header'>
                <img src={props.employee.image} alt={props.employeeName}></img>   
            </div>
            <div className='footer'>
                <h4>{props.employee.employeeName}</h4>
                <h5>{props.employee.position}</h5>
            </div>
        </div>
    )
}
