import HospitalMainCard from "./HospitalMainCard";
import HospitalDetails from "../Components/HospitalDetails";
import { Container, SimpleGrid} from "@chakra-ui/react";

export default function SecondPage(){

    const hospitalMainCard = HospitalDetails.map(card2=>{
        return(
        <HospitalMainCard
            key={card2.id}
            {...card2}
        />
        )
    })

    return(
        <Container maxW='container.xl'>
             <SimpleGrid minChildWidth='450px' spacing={2}>
            {hospitalMainCard}
            </SimpleGrid>
        </Container>
    )
}