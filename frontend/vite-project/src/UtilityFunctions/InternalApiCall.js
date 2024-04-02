// Connect to backend for UserRegistration
export const registerUser = async (newUser) => {
  console.log("Registering user:", newUser);

  const response = await fetch("http://localhost:4003/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  console.log("Registration response:", response);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Registration data:", data);
  return data;
};

// connect to backend for Logging in User
export const loginUser = async (user) => {
  console.log("Logging in user:", user);

  const response = await fetch("http://localhost:4003/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  console.log("Login response:", response);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Login data:", data);
  return data;
};
