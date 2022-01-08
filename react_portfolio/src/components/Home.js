import React from 'react'
import Address from './Address';
import MyProjects from './MyProjects';
import Smalld from './Smalld';
import WhatIDo from './WhatIDo';
import WhoIAm from './WhoIAm'

const Home = () => {
    return (
        <>
       <Smalld/>

       <WhatIDo/>
       <WhoIAm/>
       <MyProjects/>
       <Address/>
       </>
    )
}

export default Home
