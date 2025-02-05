const API_BASE_URL = "http://127.0.0.1:8000/api"; // Update with your actual API URL

export const fetchUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};