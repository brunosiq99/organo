import { useState } from 'react';
import { Banner } from './components/banner';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Team } from './components/team';


function App() {
	const teams = [
		{
			teamName:"Programação",
			primaryColor: '#57c278',
			secondaryColor: '#d9f7e9'
		},{
			teamName:"Front-End",
			primaryColor:'#82cffa',
			secondaryColor:'#e8f8ff'
		},{
			teamName:"Data Science",
			primaryColor:'#a6d157',
			secondaryColor:'#f0f8e2'
		},{
			teamName:"Devops",
			primaryColor:'#e06b69',
			secondaryColor:'#fde7e8'
		},{
			teamName:"UX e Design",
			primaryColor:'#db6ebf',
			secondaryColor:'#fae9f5'
		},{
			teamName:"Mobile",
			primaryColor:'#ffba05',
			secondaryColor:'#fff5d9'
		},{
			teamName:"Inovação e Gestão",
			primaryColor:'#ff8a29',
			secondaryColor:'#ffeedf'
		}
    ]

	const [listedEmployees,setEmployeeList] = useState([]);
	const newRegisteredEmployee = (employee)=>{
		setEmployeeList([...listedEmployees, employee])
		// Estamos pegando arrray antigo, espalhando funcionários antigos num novo array, e adicionando o nov ao final
	}
	return (
		<div className="App">
			<Banner/>
			
			<Form 
				teamsList={teams.map(team => team.teamName)} 
				onRegisterEmployee={employee => newRegisteredEmployee(employee)}
			/>

			{teams.map(team => 
				<Team 
					key={team.teamName} 
					employees={listedEmployees.filter(employee => employee.team === team.teamName)} 
					team={team}/>
			)}

			<Footer/>

		</div>
	);
}

export default App;
