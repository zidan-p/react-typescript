import React from 'react';
import { Greet } from './../components/Greet';
import { Person } from './../components/Person';
import { PersonList } from './../components/PersonList';
import { Status } from './../components/Status';

export const BasicProps = () => {

    const personData = {
      first: "ajit",
      last: "lukojoyo"
    }
  
    const personListData = [
      {
        first: "ajit",
        last: "lukojoyo"
      },
      {
        first: "Nur",
        last: "Hadi"
      },
      {
        first: "Su",
        last: "Narko"
      },
      {
        first: "ajit",
        last: "lukojoyo"
      },
      {
        first: "Nur",
        last: "Hadi"
      },
      {
        first: "Su",
        last: "Narko"
      },
    ]
  
  
    return (
      <div className="">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <h2 className='text-white text-xl'>Greet list</h2>
            <div className="flex flex-wrap gap-2 p-2">
              <Greet 
                name='Hadi'
                messageCount={10} 
                logged={true}
              />
              <Greet 
                name='ajit'
                messageCount={10} 
                logged={false}
              />
            </div>
          </div>
  
          <div className="">
            <h2 className='text-white text-xl'>Persons</h2>
            <div className="flex gap-2 p-2">
              <Person name={personData} />
              <Person name={personData} />
              <Person name={personData} />
            </div>
          </div>
          <div className="">
            <h2 className='text-white text-xl'>Person List</h2>
            <PersonList names={personListData} />
          </div>
          <div className="">
            <h2 className='text-white text-xl'>Status</h2>
            <div className="flex gap-2 p-2">
              <Status status='loading' />
              <Status status='success' />
              <Status status='error' />
              <Status status='loading' />
            </div>
          </div>
        </div>
      </div>
    );
}