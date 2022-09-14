import {Box, Container, Heading, Image, SimpleGrid, Input} from '@chakra-ui/react'
import Cards from '../Components/Cards'
import cardApi from '../Components/cardApi.json'
import { useState } from 'react'


export default function Home() {
  const [searchTerm , setSearchTerm] = useState("")

    const hospitalCard = cardApi.filter((val)=>{
      if (searchTerm == ""){
        return val
      }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map(card=>{
      return(
        <Cards
        key={card.id}
        {...card}
        />
      )
    })


  return (

    <Container maxW='auto' borderRadius='1.25rem' centerContent >
        <Box marginTop='1rem'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" " mt='1.875rem'/>
          <Heading marginLeft='3.75rem' fontSize='1.2rem' fontFamily='Sans-serif' color='#197AB8'>
            CLINICS
          </Heading>
          
          <Box ml='15.625rem' mt='-3rem'>
             <Input htmlSize={4} width='auto' variant='outline' borderBottom="0.3rem solid #197AB8" 
                    border="none" placeholder='Search...' onChange={event=> {setSearchTerm(event.target.value)}}
                    _placeholder={{fontSize:"0.7rem"}}
              /> 
          </Box>

          {/* <Box  ml="22rem" mt='-1.6rem'>
          <FaSort color='#197AB8' fontSize="1.25rem"/>
          </Box> */}
        </Box>
        
        <Container maxW='container.xl' centerContent>
          <SimpleGrid minChildWidth='28.1rem' spacing={2}>
            
            {hospitalCard}

          </SimpleGrid>
        </Container>
    </Container>
  )
}
