import React from 'react';
import InputText  from '../App';

import Enzyme,  {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('Input Text component',()=>{

let component;
let props;
let label= 'keywords';
let keywords='this is some keywords'

Enzyme.configure({
 adapter: new Adapter()
});
//------------------------
beforeEach(()=>{
    props={
        onChange: jest.fn()
    }
     component=shallow(
   <InputText 
   label={label}
   value={keywords} 
   onChange={props.onChange} />
);
})
//-------------------------

    it('should render the right way ',()=>{
        //expect(true).toBe(true)
        expect(component).toMatchSnapshot();
    });

    /* it('should render the label  the right way ',()=>{
        //expect(true).toBe(true)
        expect(component).find('label').text().toBe(label+':');
    }); */

   /*  it('should call the onChange function ',()=>{
        let mountedComponent = mount(
      <InputText 
     label={label}
     value={keywords} 
     onChange={props.onChange} />
        );
        mountedComponent.find('input').simulate('change') ;
        expect(props.onChange).toHaveBeenCalled();
      }); */

})