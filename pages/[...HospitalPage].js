import HospitalMainCard from "../Components/HospitalMainCard";
import HospitalDetails from "../Components/HospitalDetails";
import { Container, SimpleGrid} from "@chakra-ui/react";
import { useRouter } from "next/router";

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
        <Container maxW='container.xs' centerContent>
             <SimpleGrid>
                {hospitalMainCard}
            </SimpleGrid>
        </Container>
    )
}