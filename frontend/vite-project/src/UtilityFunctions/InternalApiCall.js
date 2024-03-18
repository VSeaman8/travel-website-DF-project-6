// Connect to backend for UserRegistration
export const registerUser = async (newUser) => {
  const response = await fetch("http://localhost:5000/api/User", {
    // Replace with your back-end URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
