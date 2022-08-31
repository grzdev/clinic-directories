import {Box, Heading, Image, Text, } from '@chakra-ui/react'
import {StarIcon, InfoOutlineIcon, TriangleDownIcon} from '@chakra-ui/icons' 

export default function ReddingtonCard(){
    return(
        <Box maxW='xl' h='140px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' marginTop='40px' borderRadius='20px' display='flex' boxShadow='5px 7px #d0cdcd'>
              <Image src='https://reddingtonhospital.com/wp-content/uploads/2020/02/REDDINGTON-LOGO-FOR-WEBSITE-1-1-300x110-1.png' alt="Reddington Hospital" maxW='8rem' p="25px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Reddington Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>3.0</Text>
                  <StarIcon ml='5px' color='#f0ca67'/>
                  <StarIcon ml='1.5px'color='#f0ca67'/>
                  <StarIcon ml='1.5px' color='#f0ca67'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(121 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>12, Ajanaku Street, Off Salvation Road,<br/> Opebi, Ikeja, Lagos</Text>
                </Box>
                <Box display='block' ml='380px' mt='-70px'>
                  <InfoOutlineIcon color='white'/>
                  <Text color='white' ml='-25px' textDecoration='underline' cursor='pointer'>More info?</Text>
                </Box>
              </Box>
            </Box>
    )
}