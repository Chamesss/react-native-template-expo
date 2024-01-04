import { Text, Center, Button, ButtonText, Box } from "@gluestack-ui/themed"
import React from 'react'
import useTheme from "../hooks/useTheme"
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
    const { theme, setTheme } = useTheme()
    return (
        <Center $dark-bg="$primary950" $light-bg="$primary0" h='100%' w='100%'>
            <Text color="white" mb={16} fontWeight="$bold">
                This is the center.
            </Text>
            <Button
                $dark-bg="$blue600" $light-bg="$red600"
                p={4}
                mb={4}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <ButtonText>navigate to login</ButtonText>
            </Button>
            <Button
                $dark-bg="$blue600" $light-bg="$red600"
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                <ButtonText>Toggle to {theme} </ButtonText>
            </Button>

            <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        </Center>
    )
}