import React from 'react'
import PageStructure from '../components/PageStructure'

export default function PageThree() {
  return (
    <PageStructure 
      title="Do humans create or discover algorithms?"
      response="Algorithms are both created and discovered in the field of computer science.
       Throughout the years developers have used different concepts and programming languages to program.
        However, over time they create new methods and new languages to increase optimization in both memory
         and speed. For example, in 1956 the Bubble Sort algorithm was created. It was used to sort data and
          was revolutionary at its time. However, a few years later in 1959, Quicksort was created and was more
           efficient than its predecessor. The creation of Quicksort reveals the concept of a quicker process 
           being invented and implemented into the industry. Now while these algorithms are created from the 
           human standpoint, mathematically they always existed. Meaning they were always present, but were 
           eventually discovered. That is why when I say that humans create them, I mean that they create the
            actual methods to implement them.
 "
      image="/images/comsci-algs.webp"
    />
  )
}
