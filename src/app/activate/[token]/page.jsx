// 'use client'
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const ActivationPage = () => {
//   const router = useRouter();
// //   const token = router.query?.token
// const token = router.query ? router.query.token : null;

//   console.log(token)

//   useEffect(() => {
//     const activateUser = async () => {
//       if (token) {
        
//         try {
//           // Send activation request to backend
//           const response = await fetch(`http://localhost:5000/api/users/activate/${token}`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ token }),
//           });

//           const responseData = await response.json();
//           console.log(responseData)

//         //    console.log(response)

//           if (response?.ok) {
//             // Activation successful, redirect user to login page
//             router.push('/login');
//           } else {
//             // Handle activation failure
//             console.error('Activation failed:', response.statusText);
//             // You can display an error message to the user
//           }
//         } catch (error) {
//           console.error('Error during activation:', error);
//           // Handle network errors or other unexpected errors
//         }
//       }
//     };

//     activateUser();
//   }, [token,router]);

//   return (
//     <div>
//       <p>Activating user...</p>
//       {/* You can optionally show a loading spinner or message here */}
//     </div>
//   );
// };

// export default ActivationPage;


'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ActivationPage = () => {
  const router = useRouter();
   
  const token  = router?.query;
  console.log(token)

  useEffect(() => {
    const activateUser = async () => {
      if (token) {
        try {
          // Send activation request to backend
          const response = await fetch(`http://localhost:5000/api/users/activate/${token}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          const responseData = await response.json();
          console.log(responseData);

          if (response.ok) {
            // Activation successful, redirect user to login page
            router.push('/login');
          } else {
            console.error('Activation failed:', response.statusText);
            // Handle activation failure
          }
        } catch (error) {
          console.error('Error during activation:', error);
          // Handle network errors or other unexpected errors
        }
      }
    };

    activateUser();
  }, [token, router]);

  return (
    <div>
      <p>Activating user...</p>
    </div>
  );
};

export default ActivationPage;
