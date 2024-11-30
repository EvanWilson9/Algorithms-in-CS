import React from 'react'
import PageStructure from '../components/PageStructure'

export default function PageOne() {
  return (
    <PageStructure 
      title="What is a computer?"
      response="In today’s society, when people hear the word computer it is 
      thought of as the electronics/machines that run algorithms for us humans
       use. However, I believe that a computer is anything that can process and
        run algorithms. This means that we as people are also computers. In the 
        field of computer science the developer, or computer, must come up with 
        an algorithm and write it for the electronic computer to then process and
         run. In this case, both the person and the device are using these algorithms
          to complete a task. Hence, they are both computers."
      image="/images/human-computer.jpg"
    />
  )
}
