import { Slot } from "expo-router";

export const unstable_settings = {
  initialRouteName: "Sign Up",
};

export default function SignUpLayout() {
    return (
      <>
        <Slot />
      </>
    );
  }