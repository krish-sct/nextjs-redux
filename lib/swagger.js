//Importing next-swagger-doc library
import { createSwaggerSpec } from "next-swagger-doc";

// Function to fetch API documentation using next-swagger-doc
export const getApiDocs = async () => {
  try {
    const spec = await createSwaggerSpec({
      apiFolder: "src/app/api", //Api folder path
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Next Swagger API",
          version: "1.0",
        },
        components: {
          securitySchemes: {
            //Authorization
            BearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        security: [],
      },
    });

    return spec;
  } catch (error) {
    console.error("Error generating Swagger spec:", error);
    throw error;
  }
};
