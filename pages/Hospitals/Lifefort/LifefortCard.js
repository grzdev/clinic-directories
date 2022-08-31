import {Box, Heading, Image, Text, } from '@chakra-ui/react'
import {StarIcon,TriangleDownIcon, InfoOutlineIcon} from '@chakra-ui/icons'

export default function LifefortCard(){
    return(
        <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.lifefortchildrenshospital.com/images/logo-identity.png' alt="Lifefort Children's Hospital" maxW='8rem' p="30px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Lifefort Childrens Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(13 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'> 
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>70 Agege Motor road, by Bishop St,<br/> JUNCTION 101283, Lagos</Text>
                </Box>
                <Box display='block' ml='380px' mt='-70px'>
                  <InfoOutlineIcon color='white'/>
                  <Text color='white' ml='-25px' >More info?</Text>
                </Box>
              </Box>
            </Box>
    )
}