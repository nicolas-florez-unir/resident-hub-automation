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
    console.error("Error creating client:", error);
    process.exit(1);
  }
})();
