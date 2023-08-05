import React from 'react';
import './HackathonsList.css';

function HackathonsList() {
  const hackathon = [
    {
      id: 1,
      title: 'Hackathon 1',
      description: 'Description 2',
      datestart: '01-01-2023',
      dateend: '02-01-2023',
      organiser: 'nameOrganiser',
      img: 'url',
    },
    {
      id: 2,
      title: 'Hackathon 2',
      description: 'Description 2',
      datestart: '01-02-2023',
      dateend: '02-02-2023',
      organiser: 'nameOrganiser',
      img: 'url',
    },
    {
      id: 3,
      title: 'SMART CITY HACK DAY',
      description: 'My first hackathon!',
      datestart: '16-Jun-2018',
      dateend: '16-Jun-2018',
      organiser: 'Tech Nation Visa Ambassadors',
      img: require('./hackimg/TN.png'),
    },
    {
      id: 4,
      title: 'SMART CITY HACK DAY',
      description: 'My first hackathon!',
      datestart: '16-Jun-2018',
      dateend: '16-Jun-2018',
      organiser: 'Tech Nation Visa Ambassadors',
      img: require('./hackimg/TN.png'),
      badge: require('../Badges/badges/12.svg').default,
    },
    
  ];

  // Group hackathons by years
  const groupedHackathons = {};
  hackathon.forEach((hack) => {
    const year = hack.datestart.split('-')[2]; // Extract the year from the date
    if (!groupedHackathons[year]) { // if the object doesn't have a group of year, just add 
      groupedHackathons[year] = [];
    }
    groupedHackathons[year].push(hack);
  });


  // Step 2: Sort the years in descending order and render hackathons div for each year
  return (
    <div className='list-parent-container'>
      {Object.keys(groupedHackathons)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <div key={year} className='full-width-container'>
            <h2 className='year-display'>{year}</h2>
            <h2 className='line'>Hackathons</h2>

            {groupedHackathons[year].map((hack) => (
            
                <div key={hack.id}  className='flex_hackathonsList'>
                <div>
                  <img src={hack.img} width={100} alt='hackathon' />
                </div>

                <div className='hackathons_details'>
                 <h3>{hack.title}</h3>
               
                 <p className='white'>{hack.organiser}</p>
                 <div className='flex_hackathonsList spacer'>
                    <p className='white'>{hack.datestart}</p>
                    <p className='white'>{hack.dateend}</p>

                 </div>
                 <p className='white'>{hack.description}</p>
                 <img src={hack.badge} width={50} alt='badge' />
                </div>
              </div>
            
            
            ))}
          </div>
        ))}
    </div>
  );
}

export default HackathonsList;
