// codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const GRAPHQL_URL =
  process.env.VITE_API_URL1 || "http://localhost:5015/graphql";

const config: CodegenConfig = {
  overwrite: true,

  schema: {
    [GRAPHQL_URL]: {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_CODEGEN_TOKEN ?? ""}`,
      },
    },
  },
  // pick up .graphql files and gql tagged templates in .ts/.tsx
  documents: "src/**/*.{graphql,gql}",
  generates: {
    // single file with types + (optionally) hooks
    "src/generated/graphql.tsx": {
      plugins: [
        {
          add: {
          content: 'import * as Apollo from "@apollo/client/react";',
        },

        },
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        // for typesafety niceties
        useTypeImports: true,
        // if you want generated hooks: withHooks true (see compatibility notes below)
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    // optional: introspection JSON
    "src/generated/graphql-schema.json": {
      plugins: ["introspection"],
    },
  },
  // don't fail CI on empty docs (helps first-run)
  ignoreNoDocuments: true,
};

export default config;
