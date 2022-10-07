import './team.css';
import { Employee} from '../employee'

export const Team = ({team, employees}) => {
    //console.log(employees)
    const thisTeam = team;
    const teamSecondaryColorStyle = {backgroundColor: thisTeam.secondaryColor}
    const teamTitleColor = {borderColor: thisTeam.primaryColor};
    const teamPrimaryColorStyle = {backgroundColor: thisTeam.primaryColor}
    return (
        //condicional em react
        employees.length>0 && 
            <section style={teamSecondaryColorStyle} className="team">
            <h3 style={teamTitleColor}>{thisTeam.teamName}</h3>
            <div className='container employees'>
                {employees.map(employee => 
                    <Employee 
                        key={employee.employeeName} 
                        teamPrimaryColorStyle={teamPrimaryColorStyle} 
                        employee={employee}
                    />
                )}
            </div>   
        </section>
    )
}
