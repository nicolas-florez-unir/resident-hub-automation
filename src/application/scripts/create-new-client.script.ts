import { AxiosError } from "axios";
import { axiosHttpClient } from "../../infrastructure/http/clients/axios-http.client";

(async () => {
  try {
    await axiosHttpClient.post("create-new-client", {
      condominium: {
        name: process.env.CONDOMINIUM_NAME,
      },
      administrator: {
        firstName: process.env.ADMINISTRATOR_FIRST_NAME,
        lastName: process.env.ADMINISTRATOR_LAST_NAME,
        email: process.env.ADMINISTRATOR_EMAIL,
      },
    });

    console.log("Client created successfully");
  } catch (error) {
    if(error instanceof AxiosError) {
      console.error("Error creating client:", {
        status: error.response?.status,
        data: error.response?.data,
        statusText: error.response?.statusText,
        headers: error.response?.headers,
        message: error.message,
        name: error.name,
      });
    } else {
      console.log("Unknown error:", error);
    }
    process.exit(1);
  }
})();
