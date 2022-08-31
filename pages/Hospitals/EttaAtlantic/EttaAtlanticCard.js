import {Box, Heading, Image, Text, } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons' 
import { TriangleDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'

export default function EttaAtlanticCard(){
    return(
        <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.ettaatlantic.com/wp-content/uploads/2018/12/Etta-Atlantic-Memorial-Hospital-logo.png' alt="Etta-Atlantic Memorial Hospital Ikate Lekki Lagos" maxW='8rem' p="30px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='17px' marginLeft='20px'>Etta-Atlantic Memorial Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='23px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(37 Reviews)</Text>
                </Box>
                <Box ml='7px' display='flex' mt='5px'> 
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>22 Abioro St, Ikate 106104,<br/>Lekki, Lagos</Text>
                </Box>
              </Box>
              <Box display='block' ml='-5Spx' mt='60px'>
                  <InfoOutlineIcon color='white'/>
                  <Text color='white' ml='-25px' >More info?</Text>
                </Box>
            </Box>
    )
}