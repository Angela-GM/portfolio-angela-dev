import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-section dark:bg-gray-900 px-4">
      <div className="text-center">
        <p className="text-6xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Esta página no existe
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Puede que el enlace esté mal escrito o que la página ya no exista.
        </p>
        <Link
          to="/"
          className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
        >
          ← Volver al portfolio
        </Link>
      </div>
    </main>
  );
};
