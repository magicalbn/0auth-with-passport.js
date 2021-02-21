import React from 'react';
import authType from '../../data/authType'
import Card from './Card'



const LoginCard = (props) =>{

    return(
        <div className='login'>
            {
                authType.map(each=>{
                    return <Card key={each.id} logo={each.logo} link={each.link} name={each.provider} />
                })
            }
        </div>
    )
}

export default LoginCard