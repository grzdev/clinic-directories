import {Box, Heading, Image, Text, } from '@chakra-ui/react'
import {StarIcon, InfoOutlineIcon} from '@chakra-ui/icons' 
import { TriangleDownIcon } from '@chakra-ui/icons'

export default function ParklandCard(){
    return(
        <Box maxW='xl' h='140px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' marginTop='40px' borderRadius='20px' display='flex' boxShadow='5px 7px #d0cdcd'>
              <Image src='https://www.parklandespecialists.com/wp-content/uploads/2019/04/PS-Updated-logo.png'  alt="Parkland Specialist Hospital" maxW='8rem' p="30px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Parkland Specialist Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>3.6</Text>
                  <StarIcon ml='5px' color='#f0ca67'/>
                  <StarIcon ml='1.5px'color='#f0ca67'/>
                  <StarIcon ml='1.5px' color='#f0ca67'/>
                  <StarIcon ml='1.5px' color='#f0ca67'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(42 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>13, Razaq Balogun Street, Off Adebola Street,<br/> Off Adeniran Ogunsanya, Surulere, Lagos</Text>
                </Box>
                <Box display='block' ml='385px' mt='-70px'>
                  <InfoOutlineIcon color='white'/>
                  <Text color='white' ml='-25px' textDecoration='underline' cursor='pointer'>More info?</Text>
                </Box>
              </Box>
            </Box>
    )
}