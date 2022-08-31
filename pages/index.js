import {Box, Center, Container, Divider, Heading, Image, SimpleGrid} from '@chakra-ui/react'


import HospitalCard from './Components/HospitalCard'
import HospitalCardDataa from './HospitalCardDataa'


export default function Home() {

    const hospitalCards = HospitalCardDataa.map(card=>{
      return <HospitalCard
              key={card.id}
              {...card}
      />
    })
  
  return (
    /*MAP HERE*/ 

    <Container maxW='container.xl' bg='#F4FAFF' mt='30px' borderRadius='20px'>
      <Center>
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" "/>
          <Heading marginLeft='60px' fontSize='25px' fontFamily='Sans-serif' color='#197AB8'>CLINICS</Heading>
        </Box>
      </Center>

        <Container maxW='container.xl'>
          <SimpleGrid minChildWidth='450px' spacing={2}>

            {hospitalCards}

          </SimpleGrid>
        </Container>
    </Container>
  )
}
