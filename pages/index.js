import {Box, Container, Heading, Image, SimpleGrid  } from '@chakra-ui/react'


import HospitalCard from '../Components/HospitalCard'
import hospitalCardDataa from '../Components/hospitalCardDataa'


export default function Home() {

    const hospitalCards = hospitalCardDataa.map(card=>{
      return(
        <HospitalCard
        key={card.id}
        {...card}
        />
      )
    })


  return (

    <Container maxW='auto' mt='30px' borderRadius='20px' centerContent>
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" "/>
          <Heading marginLeft='60px' fontSize='25px' fontFamily='Sans-serif' color='#197AB8'>
            CLINICS
          </Heading>
        </Box>
        
        <Container maxW='container.xl' centerContent>
          <SimpleGrid minChildWidth='450px' spacing={2}>
            
            {hospitalCards}

          </SimpleGrid>
        </Container>
    </Container>
  )
}
