import AuthButton from "@/src/components/AuthButton";
import TextInputField from "@/src/components/TextInputField";
import useAuthForm from "@/src/hooks/useAuthForm";
import { registerSchema } from "@/src/schemas/registerScemas";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { account } from "@/appwriteConfig";
import Toast from "react-native-toast-message";

interface RegisterUserParams {
  email: string;
  password: string;
  name: string;
}

export const registerUser = async ({
  email,
  password,
  name,
}: RegisterUserParams): Promise<any> => {
  try {
    const user = await account.create("unique()", email, password, name);
    Toast.show({
      type: "success",
      text1: "Registration Successful",
      text2: "You can now log in!",
    });

    return user;
  } catch (error: any) {
    console.error("Registration failed:", error);
    Toast.show({
      type: "error",
      text1: "Registration Failed",
      text2: error.message || "Please try again.",
    });
    throw error;
  }
};

export default function Register() {
  const { control, handleSubmit, errors, setValue, watch ,reset} =
    useAuthForm(registerSchema);
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const { email, password, firstName, lastName } = data;
      const name = `${firstName} ${lastName}`;
      await registerUser({ email, password, name });
  
      // Reset form fields after successful registration
      reset();
  
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Text style={styles.title}>Register</Text>

      <TextInputField
        placeholder="First Name"
        value={watch("firstName", "")}
        error={errors.firstName?.message as string | undefined}
        onChangeText={(text) => setValue("firstName", text)}
      />

      <TextInputField
        placeholder="Last Name"
        value={watch("lastName", "")}
        error={errors.lastName?.message as string | undefined}
        onChangeText={(text) => setValue("lastName", text)}
      />

      <TextInputField
        placeholder="Email"
        value={watch("email", "")}
        error={errors.email?.message as string | undefined}
        onChangeText={(text) => setValue("email", text)}
      />

      <TextInputField
        placeholder="Phone"
        value={watch("phone", "")}
        error={errors.phone?.message as string | undefined}
        onChangeText={(text) => setValue("phone", text)}
      />

      <TextInputField
        placeholder="Password"
        secureTextEntry
        value={watch("password", "")}
        error={errors.password?.message as string | undefined}
        onChangeText={(text) => setValue("password", text)}
      />

      <TextInputField
        placeholder="Confirm Password"
        secureTextEntry
        value={watch("confirmPassword", "")}
        error={errors.confirmPassword?.message as string | undefined}
        onChangeText={(text) => setValue("confirmPassword", text)}
      />

      <AuthButton title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
