import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

export const Guarantors = () => {
    const [guarantors, setGuarantors] = useState([{ name: '', surname: '', adress: '', phone: '' }]);

    const handleGuarantorChange = (index, event) => {
        const { name, value } = event.target;
        const updatedGuarantors = [...guarantors];
        updatedGuarantors[index][name] = value;
        setGuarantors(updatedGuarantors);
    };

    const handleAddGuarantor = () => {
        setGuarantors([...guarantors, { name: '', address: '' }]);
    };

    const handleRemoveGuarantor = (index) => {
        const updatedGuarantors = [...guarantors];
        updatedGuarantors.splice(index, 1);
        setGuarantors(updatedGuarantors);
    };

    const updatedGuarantors = guarantors.map((guarantor, index) => (
        <FormControl key={index}>
            <FormLabel htmlFor={`name-${index}`}>Guarantor Name:</FormLabel>
            <Input id={`name-${index}`}
                name="name"
                value={guarantor.name}
                onChange={(event) => handleGuarantorChange(index, event)} />
            <FormLabel htmlFor={`surname-${index}`}>Guarantor Surname:</FormLabel>
            <Input id={`surname-${index}`}
                name="surname"
                value={guarantor.surname}
                onChange={(event) => handleGuarantorChange(index, event)} />
            <FormLabel htmlFor={`adress-${index}`}>Guarantor Adress:</FormLabel>
            <Input id={`adress-${index}`}
                name="adress"
                value={guarantor.adress}
                onChange={(event) => handleGuarantorChange(index, event)} />
            <FormLabel htmlFor={`phone-${index}`}>Guarantor Phone:</FormLabel>
            <Input id={`phone-${index}`}
                name="phone"
                value={guarantor.phone}
                onChange={(event) => handleGuarantorChange(index, event)} />
            <Flex my={3} justifyContent='space-between'>
                <Button onClick={handleAddGuarantor}>Add guarantor</Button>
                <Button onClick={() => handleRemoveGuarantor(index)}>Remove Guarantor</Button>
            </Flex>
        </FormControl>
    ))

    return (
        <>
            {updatedGuarantors}

            <Button type="submit">Add guarantors</Button>
        </>
    )

}