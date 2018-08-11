import React, { Component } from 'react';
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(props){
    //super props sets this.props to the constructor
    super(props);
    //setting up state

    this.state = {
      list: `projectData`,
      clicked: false
    }
    this.removeItem = this.removeItem.bind(this)

  }

  // bind the function to this (app component)

  removeItem(id){
    console.log('Remove item');
  }

  render() {
    console.log(this);
    return (
      <section>
          <h4>Projects</h4>
        <div className="project-types-list">
          {this.state.list.map( item =>

            <span data-ptype="all" className="project-type project-type--all project-type--selected"
              onClick={ () => this.removeItem(item.objectID) }> All</span>

            )
          }
            <span data-ptype="solo" className="project-type project-type--solo "
            // onClick={

            // }
            >
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team"
            // onClick={

            // }
            >
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}

          </div>
        </section>

    );
  }
}

export default FilterProjects;