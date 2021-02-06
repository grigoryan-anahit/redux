import React from 'react';

class Test extends React.Component {
    state = {
        name: true,
        age: 45,

    }
    handleClick = () => {
        // this.setState({
        //     name:!this.state.name
        // } ,()=>{
        //     console.log('End' );
        // })


        // this.setState(prevState => {
        //     return {
        //         name:!this.state.name
        //     }
        // })

    }
    render() {
        console.log('render');
        return (
            <div>
                <p>{this.state.name ? 'Ashot' : 'Anahit'}</p>
                <button onClick={this.handleClick}>Toggle Change Name</button>
            </div>
        )
    }
}



export default Test;