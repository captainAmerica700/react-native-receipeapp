import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter, Link } from "expo-router";

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function Register() {
  const { register } = useAuth();
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = ({ email, password }) => {
    register(email, password);
    Alert.alert("Success", "Registration successful!");
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => control.setValue("email", text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => control.setValue("password", text)}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => control.setValue("confirmPassword", text)}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
      
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
      <Link href="/(auth)/login">
        <Text style={styles.link}>Already have an account? Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: "red", marginBottom: 10 },
  link: { color: "#007bff", marginTop: 10, textAlign: "center" },
});
