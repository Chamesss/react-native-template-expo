import { StyleSheet, Text, View } from 'react-native'
import { Button, ButtonText, ButtonIcon } from '@gluestack-ui/themed'
import { AddIcon } from '@gluestack-ui/themed'
import React from 'react'
import useTheme from '../../hooks/useTheme'

export default function Login({ navigation }) {
  const { theme, setTheme } = useTheme()
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>login</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({})