import { Box, Container, Heading, useColorModeValue, VStack, Input, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "", 
  });

  
  const toast = useToast();
  
  const navigate = useNavigate();
  const { createProduct } = useProductStore();

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleAddProduct = async () => {
    if (!isValidUrl(newProduct.image)) {
      toast({
        title: "Invalid Image URL",
        description: "Please enter a valid URL for the product image.",
        status: "error",
        isClosable: true,
        duration: 3000,
      });
      return;
    }

		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
        duration: 3000,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
        duration: 3000,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
    navigate('/');
	};

  return (
    <Container maxW={"container.sm"}>
      <VStack
      spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={20} mb={5}>
          Create New Product
        </Heading>

        <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
            placeholder='Price'
            name='price'
            type='number'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
          </VStack>
          <Button mt="5" w="full" colorScheme='blue' onClick={handleAddProduct}>
            Add Product
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
