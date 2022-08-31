import {Box, Heading, Image, Text, } from '@chakra-ui/react'
import {StarIcon, TriangleDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import Link from 'next/link' 

export default function HavannaCard(){
    return(
        <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.havanaspecialisthospital.com/media/img/logo_xy.png'  alt="Havana specialist hospital" maxW='8rem' p="30px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Havana specialist hospital </Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(30 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>115, Akerele Extension, P.O. Box 4631,<br/> Surulere Lagos</Text>
                </Box>

                <Box display='block' ml='380px' mt='-70px' >
                <InfoOutlineIcon color='white'/>
                  <Link href="../pages/Hospitals/Havanna/HavannaInfo">
                    <Text color='white' ml='-25px' textDecoration='underline' cursor='pointer'>More info?</Text>
                  </Link>
                </Box>
              </Box>
            </Box>
    )
}