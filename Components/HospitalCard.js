import {Box, Heading, Image, Text, Divider } from '@chakra-ui/react'
import {StarIcon, TriangleDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import Link from 'next/link' 

export default function HavannaCard(props){
    return(
        <Box maxW='xl' h='140px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' marginTop='40px' borderRadius='20px' display='flex'  boxShadow=' 0 10px 20px -5px #848b90' >
              <Image src={`${props.img}`}  alt="Havana specialist hospital" maxW='8rem' p="30px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' >{props.name}</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' >
                  {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < props.stats.rating ? '#ffba23' : 'gray.300'}
                    />
                   ))}
                  <Text color='white' ml='10px'>{props.stats.reviewCount} Reviews</Text>
                </Box>
                <Box ml='-10px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white' wordBreak='normal'>{props.address}</Text>
                </Box>

                <Box display='block' ml='380px' mt='-60px' >
                <InfoOutlineIcon color='white'/>
                    <Text color='white' ml='-25px' textDecoration='underline' cursor='pointer'>More info?</Text>
                </Box>
              </Box>
              {/* {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < props.stats.rating ? '#ffba23' : 'gray.300'}
                    />
                   ))} */}
              
              
            </Box>
    )
}