import React from 'react'
import './Badges.css'

function Badges() {

  const badges = [
    {
      id: 1,
      url: require('./badges/1.svg').default,
      name: "1st place",
      unlocked: true,
      howManyTimesUnlocked: 1,
    },
    {
      id: 2,
      url: require('./badges/2.svg').default,
      name: "2nd place",
      unlocked: true,
      howManyTimesUnlocked: 1,
    },
    {
      id: 3,
      url: require('./badges/3.svg').default,
      name: "3rd place",
      unlocked: true,
      howManyTimesUnlocked: 1,
    },
    {
      id: 4,
      url: require('./badges/12.svg').default,
      name: "here 4 pizza",
      unlocked: true,
      howManyTimesUnlocked: 1,
    }
    ,
    {
      id: 5,
      url: require('./badges/22.svg').default,
      name: "Early Adopter",
      unlocked: false,
      howManyTimesUnlocked: 1,
    },
    {
      id: 6,
      url: require('./badges/3.svg').default,
      name: "here 4 pizza",
      unlocked: false,
      howManyTimesUnlocked: 1,
    }
    ,
    {
      id: 7,
      url: require('./badges/3.svg').default,
      name: "3rd place",
      unlocked: false,
      howManyTimesUnlocked: 1,
    }
    ,
    {
      id: 8,
      url: require('./badges/3.svg').default,
      name: "3rd place",
      unlocked: false,
      howManyTimesUnlocked: 1,
    }
  ];

  // sort badges by unlocked and then by name
  const sortedBadges = badges.sort((a, b) => {
    if (a.unlocked && !b.unlocked) {
      return -1; // a should come before b
    } else if (!a.unlocked && b.unlocked) {
      return 1; // a should come after b
    }
    return 0; // no change in order
  });
  
  const filtredBadges = sortedBadges.slice(0, 8);

  return (
    <div className='minibox'>
    <h2>Badges</h2>
    <hr/>
    <div className='badge_container'>
      {filtredBadges.map((badge) => (
        <div key={badge.id} className='badge'>
          {badge.unlocked ? (
            <>
              <p>{badge.name}</p>
              <img src={badge.url} alt={badge.name} width={100} />
            </>
          ) : (
            <>
            <p>{badge.name}</p>
            <img src={badge.url}  className='locked' alt={badge.name} width={100} />
          </>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Badges