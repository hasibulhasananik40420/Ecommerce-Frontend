"use server"

export const registerUser = async (formData) => {
  try {
    const res = await fetch(`http://localhost:5000/api/users/process-register`, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text(); // Read the error message from the response
      throw new Error(`Failed to register user: ${errorText}`);
    }

    const registerInfo = await res.json();
    return registerInfo;
  } catch (error) {
    console.error("Error in registerUser:", error);
    throw error;
  }
};
