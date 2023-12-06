import { ButtonIcon } from "@components/ButtonIcon";
import { moneyFormat } from "@utils/moneyFormat";
import { Box, HStack, Heading, VStack, Text } from "native-base";

type DataProps = {
  id: string;
  title: string;
  mainStacks: string;
  city: string;
  uf: string;
  remuneration: number;
  workingModel: string;
  level: string;
}

type CardProps = {
  data: DataProps
  hasButtons?: boolean; 
}

export const Card = ({ data, hasButtons = false }: CardProps) => {
  const { title, mainStacks, city, uf, remuneration, workingModel, level } = data;

  const formattedMoney = moneyFormat(remuneration);

  return (
    <Box 
      borderColor="gray.200" 
      borderRadius="lg" 
      borderWidth={2} 
      p={5} 
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Heading fontFamily="heading" fontSize="md" color="gray.700">{title}</Heading>

        { hasButtons && (
          <HStack space={2}>
            <ButtonIcon 
              icon="edit-2"
              color="orange"
              size={18}
            />

            <ButtonIcon 
              icon="trash-2"
              color="red"
              size={18}
            />
          </HStack>
        )}
      </HStack>

      <VStack >
        <VStack py={2}>
          <Text fontFamily="heading" fontSize="sm" color="gray.400">Principais tecnologias: {mainStacks}</Text>
        </VStack>
        
        <Text fontFamily="body" fontSize="sm" color="gray.400">Nível: {level}</Text>
        <Text fontFamily="body" fontSize="sm" color="gray.400">Remuneração: {formattedMoney}</Text>
        <Text fontFamily="body" fontSize="sm" color="gray.400">Modelo de trabalho: {workingModel}</Text>

        <HStack>
          <Text fontFamily="body" fontSize="sm" color="gray.400">Cidade: {city} - </Text>
          <Text fontFamily="body" fontSize="sm" color="gray.400">{uf}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}