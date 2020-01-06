import React from 'react'

//import Formjob from './Formjob'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,CardImg
} from 'reactstrap';
  

    const Contacts = (props) => {
     let contacts = props.contacts;
      var jun  = props.jun;
     
      return (
        
  <div >
  
  <h1 className="text-center p-3 mb-2 bg-success text-white">RESULTS OF SEARCH</h1>
  
   {/* -----------------------------------------the result of search---------------------------------  */}
   
          {contacts.filter(
           contact=>contact.title.includes('Junior','junior')  
           
          ).map((contact,index) => (
           
            <div key={index} >
            
      <Card>
      <CardImg top width="100%" src={require('./job.svg')}   height="100" alt="Card image cap" />
        <CardBody>
       
     
 
          <CardTitle><h4> <div className="content" dangerouslySetInnerHTML={{__html:contact.title}}></div></h4></CardTitle> 
       
          <CardSubtitle> <h5 className=" text-danger">{contact.location.display_name}</h5></CardSubtitle>
          
          <CardText><div className="content" dangerouslySetInnerHTML={{__html: contact.description}}></div></CardText>
          <a href={contact.redirect_url}>View Job</a>
        </CardBody>
      </Card>
    </div>
         )
          ) }
        </div>
      )
    };
    export default Contacts

    