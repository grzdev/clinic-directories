import {Box, Container, Heading, Image, SimpleGrid  } from '@chakra-ui/react'


import HospitalCard from '../Components/HospitalCard'
import HospitalCardDataa from '../Components/HospitalCardDataa'


export default function Home() {

    const hospitalCards = HospitalCardDataa.map(card=>{
      return(
        <HospitalCard
        key={card.id}
        {...card}
        />
      )
    })


  return (

    <Container maxW='auto' borderRadius='20px' centerContent >
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" " mt='30px'/>
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
