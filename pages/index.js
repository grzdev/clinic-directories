import {Box, Center, Container, Divider, Heading, Image, SimpleGrid} from '@chakra-ui/react'

import HavannaCard from './Hospitals/Havanna/HavannaCard'
import ParklandCard from './Hospitals/Parkland/ParklandCard'
import ReddingtonCard from './Hospitals/Reddignton/ReddigntonCard'
import EuracareCard from './Hospitals/Euracare/EuracareCard'
import LifefortCard from './Hospitals/Lifefort/LifefortCard'
import EttaAtlanticCard from './Hospitals/EttaAtlantic/EttaAtlanticCard'

export default function Home() {
  
  return (
    <Container maxW='container.xl' bg='#F4FAFF' mt='30px' borderRadius='20px'>
      <Center>
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" "/>
          <Heading marginLeft='60px' fontSize='25px' fontFamily='Sans-serif' color='#197AB8'>CLINICS</Heading>
        </Box>
      </Center>

        <Container maxW='container.xl'>
          <SimpleGrid minChildWidth='450px' spacing={2}>

            <HavannaCard/>
            <ParklandCard/>
            <ReddingtonCard/>
            <EuracareCard/>
            <LifefortCard/>
            <EttaAtlanticCard/>

          </SimpleGrid>
        </Container>
    </Container>
  )
}
