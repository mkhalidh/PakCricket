import React from 'react'

const Services = () => {
  const services = [
    {
      id:1,
      url:"/birthday.jpg",
      title:"Babar Azam",

    },
    {
      id:2,
      url:"/anniversary.jpg",
      title:"Azhar Mehmood",

    },
    {
      id:3,
      url:"/camping.jpg",
      title:"Shaun Tait",

    },
    {
      id:4,
      url:"/gamenight.jpg",
      title:"Naseem Shah",

    },
    {
      id:5,
      url:"/party.jpg",
      title:"Shaheen Shahid Afridi",

    },
    {
      id:6,
      url:"/wedding.jpg",
      title:"Muhammad Rizwan ",

    },
  ]
  return (
    <React.Fragment>
    <div className='services container'>
    <h2>Events</h2>
    <div className='banner'>
    {
      services.map(element=>{
        return (<div className='item' key={element.id}>
        <h3>{element.title }</h3>
        <img src={element.url} alt={element.url}/>
        </div>)
        
      })
    }
    </div>
    </div>
    </React.Fragment>
  )
}

export default Services