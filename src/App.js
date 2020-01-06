//npm install --save reactstrap react react-dom
    import React, { Component } from 'react'
    import Contacts from './components/contacts'
    import keys from './config'
    //import Formjob from './components/Formjob'
    import { Button, Form, FormGroup, Input } from 'reactstrap';


    export default class App extends Component {
    
      state = {
        contacts: [],
        job: 'java' ,
        city: 'Berlin',
        jun:'',
       
    
              }
             
       headers= {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
              }
               
           
    makeApiCall=(job,city) =>{
     const url = `http://api.adzuna.com:80/v1/api/jobs/de/search/1?app_id=${keys.APP_ID}&app_key=${keys.API_KEY}&results_per_page=20&what=${this.state.job}&where=${this.state.city}&content-type=application/json`
      fetch(url)
       .then(res =>{return res.json()})
       .then((data) => {
        console.log('results:',data.results)
        
     this.setState({  contacts: data.results}) 
                })
           
                .catch(
                  (error)=>console.log(error)
                  
                )
                };
              //________________________________________
              changeJun=(e)=>{
              
                this.setState({
               job: e.target.value,  
              
               }) 

             }
             
             
             
              changeJob=(e)=>{
                this.setState({
                job:e.target.value,
               }) 
             }
           
             changeCity=(e)=>{
               this.setState({
              
               city:e.target.value,
              
              }) 
             
            }
           
             handelSubmit=(e)=>{
               e.preventDefault();
               console.log('form submitted ',this.state.job)
               console.log('form submitted ',this.state.city)
             }
           
            
              //-------------------------------------------

      render() {
        
        return (
          <div>
         
            <Form  onSubmit={this.handelSubmit} className="container" id="search-form">
      <FormGroup>
        <Input type="text" className="form-control" name="job" id="job" placeholder="JobTitle"
        onChange={this.changeJob}/> 
        <Input type="text"  className="form-control" name="city" id="city" placeholder="locationTitle" 
        onChange={this.changeCity}/> 
        
        <Button  onClick={this.makeApiCall} className="btn btn-block btn-info">Search</Button>
        <Input name='jun' id='jun' type="text" placeholder="Filter according to your requirements " 
        onChange={this.changeJun} />
       
      </FormGroup>
      </Form>
     
    
          {/*  //------------------------------ */}
         
              <Contacts contacts={this.state.contacts} jun={this.state.jun}  />

          </div>
           
        )
      }
    }
   
