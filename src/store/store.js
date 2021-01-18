import { logRoles } from '@testing-library/react';
import {renderComponentsTree} from '../index';

const store={
    state:{
        navbar:{
            isNav:false,
        },   
        postsPage:{
            posts:[
                {
                    id:'post1',
                    title:'About Cappuchino ',
                    body: ' lorem lorem lorem lorem lorem lorem'
               },
                {
                    id:'post2',
                    title:'About Espresso ',
                    body: ' lorem lorem lorem lorem lorem lorem'
               },
              {
                    id:'post3',
                    title:'About NesCafe ',
                    body: ' lorem lorem lorem lorem lorem lorem'
             }
            ]
        }
   },
   getState(){
       return this.setState;
   },
   setState(newState){
     this.state=newState;
       return renderComponentsTree();
   },
   dispatch(action){
       switch (action.type) {
           case 'toggleNavOpen':{
            this.setState({
                ...this.state,
                navbar:{
                    ...this.state.navbar,
                    isNav:!this.state.navbar.isNav
                }
            })

               
               break;
        }
       
           default: break;
       }
   }
}
export const dispatch=store.dispatch.bind(store);
export default store;