# Perpustakaan Monorepo

This is a monorepo for the **Perpustakaan** project, which consists of both backend and frontend applications. The monorepo is managed using a shared structure to streamline development, deployment, and maintenance.

---

## Project Structure

The repository is organized as follows:

```
perpustakaan/
├── apps/
│   ├── backend/                # Backend application (HonoJs)
│   ├── frontend/               # Frontend application (Next.js)
├── node_modules/               # Dependencies
├── package.json                # Root package.json for managing dependencies
├── README.md                   # Documentation
```

-   **`apps/`**: Contains the separate backend and frontend applications.
    -   **`backend/`**: The backend application, built with HonoJS for handling API requests.
    -   **`frontend/`**: The frontend application, built with Next.js, providing the user interface for the Perpustakaan project.

---

## Development

To get started with development, follow the steps below:

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies**:
   From the root of the project, install dependencies for both the backend and frontend apps:

    ```bash
    npm install
    ```

    if that doesnt work go to each repo ( /frontend and /backend ) then:

    ```bash
    npm install
    ```

3. **Development**:
   From the root of the project:

```bash
 npm run dev
```

\*this project using turbo monorepo to run both project,
\*\*Porting:
frontend : 3000
backend : 3001

---


---

## Acknowledgements

-   **Drizzle ORM**: Typesafe SQL wrapper.
-   **HonoJS**: Lightweight framework for building APIs.
-   **Next.js**: React framework for building the frontend.
