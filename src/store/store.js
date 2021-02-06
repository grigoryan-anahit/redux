import { renderComponentsTree } from '../index';
import { v4 as uuidv4 } from 'uuid';
const store = {
    state: {
        modal: {
            isModalOpen: false,
            isOpenEditPostModal: false,
        },
        navbar: {
            isNav: false,
            test: false,
        },
        postPage: {
            posts: [
                {
                    id: uuidv4(),
                    title: 'Music Post',
                    body: 'Lorem ispum text lorem text'
                },
                {
                    id: uuidv4(),
                    title: 'Matematic Post',
                    body: 'Lorem ispum text lorem text'
                },
                {
                    id: uuidv4(),
                    title: 'Life Post',
                    body: 'Lorem ispum text lorem text'
                }
            ]
        }
    },

    getState() {
        return this.state;
    },
    setState(newState) {
        this.state = newState;
        return renderComponentsTree();

    },

    dispatch(action) {
        switch (action.type) {
            case 'toggleOpenNav': {
                this.setState({
                    ...this.state,
                    navbar: {
                        ...this.state.navbar,
                        isNav: !this.state.navbar.isNav
                    }
                })

                break;
            }
            case 'toggleTest': {
                this.setState({
                    ...this.state,
                    navbar: {
                        ...this.state.navbar,
                        test: !this.state.navbar.test
                    }
                })

                break;
            }
            case 'addPost': {
                const posts = [...this.state.postPage.posts];
                posts.push(
                    {
                        id: uuidv4(),
                        title: action.title,
                        body: action.body
                    }
                )
                this.setState({
                    ...this.state,
                    postPage: {
                        posts: posts
                    }

                })
                break;
            }
            case 'deletePostById': {
                let posts = [...this.state.postPage.posts];
                // const idx = posts.findIndex(post => post.id === action.id);
                // posts.splice(idx, 1);
                posts = posts.filter(post => post.id !== action.id);
                this.setState({
                    ...this.state,
                    postPage: {
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
                let posts = [...this.state.postPage.posts];
                // posts = posts.filter(post => post.id !== action.post.id);
                // posts.push(action.post);
                const idx = posts.findIndex(post => post.id === action.post.id);
                posts.splice(idx, 1, action.post);
                this.setState({
                    ...this.state,
                    postPage: {
                        posts
                    }
                })
                break;
            }
            case 'openModal': {
                this.setState({
                    ...this.state,
                    modal: {
                        isModalOpen: true,
                    }
                })
                break;
            }
            case 'closeModal': {
                this.setState({
                    ...this.state,
                    modal: {
                        isModalOpen: false,
                    }
                })
                break;
            }
            default: break;
        }
    }
}

export const dispatch = store.dispatch.bind(store);

export default store;