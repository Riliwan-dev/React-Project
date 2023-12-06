import React, { Component } from 'react';

class Counter extends Component {

    state = {
        // Count: 0,
        tags: ['tag1', 'tags2', 'tags3']
        // imageUrl : 'https://picsum.photos/200'
    };
    
    // styles = {
        //     fontSize : 30,
        //     fontWeight : 'bolder'  
        // }
        renderTag() {
            if(this.state.tags.length === 0)  return 'There is no tags' ;
        }
        
        render() { 
            
            // let classes = this.getBtnClasses(); 
            
            return (
        <React.Fragment>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            {/* <span className={this.getBtnClasses()}>{this.formatCount()} </span>
            <button className='btn btn-secondary btn-sm'>increment</button> */}
            {/* <ul>{this.state.tags.map(tag => <l1 key={tag}>{tag}</l1>)}</ul> error not listing the tags  */} 
            <ul className="list"> {this.state.tags.map(tag => <li key={tag} className="list">{tag}</li>)}</ul>
            {/* <ul className="list-group">
  {this.state.tags.map(tag => <li key={tag} className="list-group-item">{tag}</li>)}
</ul> */}

        </React.Fragment>
        );
    }
    }

    // getBtnClasses() {
    //     let classes = "btn m-2 btn-";
    //     classes += (this.state.Count === 0) ? "warning" : "primary";
    //     return classes;
    // }

//     formatCount() {
//         return this.state.Count === 0 ? 'Zero' : this.state.Count;
//     }
// }
 
export default Counter;