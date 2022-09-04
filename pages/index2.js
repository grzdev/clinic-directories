import HospitalMainCard from "./HospitalMainCard";
import HospitalDetails from "../Components/HospitalDetails";
import { Container } from "@chakra-ui/react";

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
        <Container centerContent>
            {hospitalMainCard}
        </Container>
    )
}