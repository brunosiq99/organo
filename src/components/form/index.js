import './form.css';
import { useState } from 'react'
import { FormTextField } from '../text-field';
import { Dropdown } from '../dropdown';
import { FormButton } from '../formButton';

export const Form = (props)=>{
    //fique atento que, no universo React, os eventos são nomeados com camelCase, logo: onclick vira onClick.
    const [employeeName,setEmployeeName] = useState('');
    const [position,setPosition] = useState('');
    const [image,setImage] = useState('');
    const [team,setTeam] = useState('')

    const submitForm = (event) => {
        event.preventDefault();
        props.onRegisterEmployee({
            employeeName:employeeName, // no javaScript position: position é igual a position
            position, 
            image, 
            team
        });
        setEmployeeName('');
        setPosition('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="section__form container">
            <form className="form" onSubmit={submitForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormTextField 
                    required={true} 
                    label="Nome"
                    value={employeeName}
                    onchange={value => setEmployeeName(value)}/>    
                <FormTextField 
                    required={true} 
                    label="Cargo"
                    value= {position}
                    onchange={value => setPosition(value)}/>
                <FormTextField 
                    required={false}
                    label="Endereço da imagem"
                    value={image}
                    onchange={value => setImage(value)}/>
                <Dropdown 
                    required={true} 
                    itens={props.teamsList} 
                    label="Time"
                    value={team}
                    onchange={value => setTeam(value)}/>
                    
                <FormButton>
                    Criar card
                </FormButton>
            </form>
        </section>  
    )
}