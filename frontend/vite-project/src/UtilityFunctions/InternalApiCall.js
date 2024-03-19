// Connect to backend for UserRegistration
export const registerUser = async (newUser) => {
  const response = await fetch("http://localhost:5000/api/User", {
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

// connect to backend for Logging in User

export const loginUser = async (user) => {
  const response = await fetch("http://localhost:5000/api/User/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
