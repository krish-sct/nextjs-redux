"use client";
//Importing neccessary dependencies for swagger UI
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

// React component to render Swagger UI based on the provided spec
function ReactSwagger({ spec }) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;
