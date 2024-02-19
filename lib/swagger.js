import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  try {
    const spec = await createSwaggerSpec({
      apiFolder: "src/app/api",
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Next Swagger API",
          version: "1.0",
        },
        components: {
          securitySchemes: {
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
