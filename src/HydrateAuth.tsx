// import useAuthStore from '@/store/authstore';
// import { useRouter } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';

// interface HydrateAuthProps {
//   children: React.ReactNode;
// }

// export default function HydrateAuth({ children }: HydrateAuthProps) {
//   const { token } = useAuthStore();
//   const router = useRouter();
//   const [isMounted, setIsMounted] = useState(false); // 🛠 Track if mounted

//   // 🛠 Set mounted to true after first render
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // 🛠 Handle redirection only after mounting
//   useEffect(() => {
//     if (isMounted && !token) {
//       router.push('/AppEntryPage');
//     }
//   }, [token, isMounted, router]);

//   // 🛠 Return null until mounted
//   if (!isMounted) return null;

//   // 🛠 Render children if authenticated
//   return <View>{children}</View>;
// }
