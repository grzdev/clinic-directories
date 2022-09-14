import {Box, Container, Heading, Image, SimpleGrid, Input} from '@chakra-ui/react'
import Cards from '../Components/Cards'
import cardApi from '../Components/cardApi.json'
import { useState } from 'react'
import { FaSort } from "react-icons/fa"


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

    <Container maxW='auto' borderRadius='20px' centerContent >
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" " mt='30px'/>
          <Heading marginLeft='60px' fontSize='25px' fontFamily='Sans-serif' color='#197AB8'>
            CLINICS
          </Heading>
          
          <Box ml={'250px'} mt={'-50px'}>
             <Input htmlSize={3} width='auto' variant={'outline'} borderBottom={"5px solid #197AB8"} 
                    border="none" placeholder='Search...' onChange={event=> {setSearchTerm(event.target.value)}}
              /> 
          </Box>

          <Box  ml={"350px"} mt={'-25px'}>
          <FaSort color='#197AB8' fontSize={"20px"}/>
          </Box>
        </Box>
        
        <Container maxW='container.xl' centerContent>
          <SimpleGrid minChildWidth='450px' spacing={2}>
            
            {hospitalCard}

          </SimpleGrid>
        </Container>
    </Container>
  )
}
