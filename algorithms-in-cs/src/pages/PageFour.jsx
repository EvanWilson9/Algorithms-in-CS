import React from 'react'
import PageStructure from '../components/PageStructure'
import PageStructure2 from '../components/PageStructure2'

export default function PageFour() {
  return (
    <>
      <PageStructure 
      title="How has the widespread use of computing technology
      and algorithms changed the way we work, play, and
      interact with other people?"
      response="The increased use of computing technology has changed the way that computer scientists
       operate and communicate in general. In this modern age, they are able to email, call, or use other
        forms of media to contact each other. As technology evolves, so does the way that they work.
         Software such as GitHub, Git, Azure, and others make it easier to develop and run applications.
          They ultimately revolutionize the way we can manage the development process. Consequently,
           computing technology has led to the creation of different game development platforms like Unity,
            Unreal Engine, and Godot that create the AAA games and indie games that people all around the world play today.
"
      image="/images/chatgpt.webp"
    />
    <PageStructure2 
      title="How much should we let technology do for us?"
      response="As a software developer or anyone in the computer science industry artificial
       intelligence may seem like a solution for all problems. However, a computer scientist
        should be able to understand the logic and process behind something before just letting
         AI do it for them. Otherwise, AI could create something that is insecure or could create
          more problems in the future. If the developer doesn’t understand exactly what the algorithm 
          is creating, then they won’t be able to tell if it is actually good code or not.
           That is why this technology needs to be used more as a tool/resource than a cheatsheet. 
 "
      image="/images/chatgpt-meme.webp"
    />
  </>
  )
}
