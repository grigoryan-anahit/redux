import { v4 as uuidv4} from 'uuid';
import {renderComponentsTree} from '../index';

const store={
    state:{
        navbar:{
            isNav:false,
        }, 
        modal:{
            isModalOpen:false
        },  
        postPage:{
            posts:[
                {
                    id:uuidv4(),
                    title:'About Cappuchino ',
                    body: ' lorem lorem lorem lorem lorem lorem'
               },
                {
                    id:uuidv4(),
                    title:'About Espresso ',
                    body: ' lorem lorem lorem lorem lorem lorem'
               },
              {
                    id:uuidv4(),
                    title:'About NesCafe ',
                    body: ' lorem lorem lorem lorem lorem lorem'
             }
            ]
        }
   },
   getState(){
       return this.state;
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
            case 'addPost':{
                const posts=[...this.state.postPage.posts];
                posts.push(
                    {
                        id:uuidv4(),
                        title:action.title,
                        body:action.body,
                    }
                )
                this.setState({
                    ...this.state,
                    postPage:{
                        posts:posts
                    }
                })
                break;
            }
            case 'deletePost':{
                let posts=[...this.state.postPage.posts];
               posts=posts.filter(item=>item.id!==action.id);
                this.setState({
                    ...this.state,
                    postPage:{
                        posts
                    }

                })
                break;
            }
            case 'updatePost': {
              
                // {
                //     id:1,
                //     title:sdksdp,
                //     body:'sdfdfd'
                // }
                if(!action.post) 
                    return;
                    let posts=[...this.state.postPage.posts];
                // posts = posts.filter(post => post.id !== action.post.id);
                // posts.push(action.post);
          
                const idx = posts.findIndex(post => post.id === action.post.id);
                posts.splice(idx, 1, action.post);
                console.log(posts);
                this.setState({
                    ...this.state,
                    postPage: {
                        posts
                    }
                })
                break;
            }
            case 'openModal':{
                this.setState({
                    ...this.state,
                    modal:{
                        ...this.state.modal,
                        isModalOpen:true
                    }
                })
                break;
            }
            case 'closeModal':{
                this.setState({
                    ...this.state,
                    modal:{
                        ...this.state.modal,
                        isModalOpen:false
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