import { Alert } from "react-native"

type AlertProps = {
  title: string
  message: string
}
export const AlertDialog = ({ title, message }: AlertProps) =>
  Alert.alert(title, message, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ])