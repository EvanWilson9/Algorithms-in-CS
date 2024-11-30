import React from 'react'
import PageStructure from '../components/PageStructure'
import PageStructure2 from '../components/PageStructure2'

export default function PageFive() {
  return (
    <>
    <PageStructure 
    title="What social and legal issues have arisen due to the
    widespread use of computing technology and
    algorithms?"
    response="In the field of computer science, cybersecurity is a huge and rapidly growing industry.
     Its purpose is to make sure that programs, networks, and even physical devices are safe from threat actors.
      However, the development and growing usage of artificial intelligence is making it harder to stop threats.
       AI can replicate voices, process data, and identify patterns on a larger scale. Due to this fact, hackers
        are able to take advantage of more and more people everyday. On the flip side, this increased threat of
         security is what also creates more jobs for people in the industry.
 "
    image="/images/ai-in-legal.png"
  />
  <PageStructure2 
    title="What new issues are likely to arise in the
    future?"
    response="Artificial intelligence is a revolutionary creation from a scientific standpoint.
     It can perform actions and complete tasks similar to, and sometimes, better than humans.
      This fact is what makes artificial intelligence so interesting, yet dangerous at the same time.
       It has the ability to take jobs away from developers and increase the unemployment rate in the field.
        Companies could be able to hire less developers and use artificial intelligence to create code more
         efficiently and on a larger scale.
 "
    image="/images/ai-job.png"
  />
</>
    
  )
}
