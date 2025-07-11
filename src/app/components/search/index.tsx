"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

interface Route {
  path: string;
  title: string;
  description: string;
  content: string;
}

interface SearchPageProps {
  searchTerm?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({ searchTerm = "" }) => {
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (!searchTerm.trim()) {
        setFilteredRoutes([]);
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch("/routes-front-end/routes.json");
        const allRoutes: Route[] = await response.json();

        const fuseOptions = {
          keys: [
            { name: "title", weight: 0.5 },
            { name: "description", weight: 0.2 },
            { name: "content", weight: 0.3 },
          ],
          threshold: 0.5, // Aumentamos o threshold para pegar mais resultados
          ignoreLocation: true,
          includeScore: true,
          minMatchCharLength: 2, // Reduzimos para pepar termos menores
          shouldSort: true,
          findAllMatches: true,
          useExtendedSearch: false, // Removemos a pesquisa exata
        };

        const fuse = new Fuse(allRoutes, fuseOptions);
        const results = fuse.search(searchTerm).map((result) => result.item);

        setFilteredRoutes(results);
      } catch (error) {
        console.error("Search error:", error);
        setFilteredRoutes([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(search, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const highlightMatch = (text: string, query: string) => {
    if (!text) return "";
    const terms = query.split(" ").filter((term) => term.length > 2);
    if (terms.length === 0) return text;

    const regex = new RegExp(`(${terms.join("|")})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <section className="bg-white px-4 md:px-36 py-28">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-600">
        {isLoading
          ? "Buscando..."
          : filteredRoutes.length > 0
          ? `Resultados para "${searchTerm}"`
          : `Nenhum resultado para "${searchTerm}"`}
      </h2>

      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : filteredRoutes.length === 0 && searchTerm.trim() ? (
        <div className="text-center py-10 text-gray-500">
          <p>Sugestões:</p>
          <ul className="list-disc list-inside mt-2 max-w-md mx-auto">
            <li>Verifique a ortografia</li>
            <li>Use palavras mais genéricas</li>
            <li>Tente termos diferentes</li>
          </ul>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRoutes.map((route) => (
            <div
              key={route.path}
              className="text-green-700 hover:text-green-900 border-2 border-bg-slate-300 shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={route.path} className="block mb-3">
                <h3
                  className="text-xl font-bold text-green-700 hover:underline"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(route.title, searchTerm),
                  }}
                />
              </Link>

              <p className="text-gray-600 mb-3">
                <small
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(route.description, searchTerm),
                  }}
                />
              </p>

              <div className="text-sm text-gray-500">
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(
                      route.content
                        ? route.content.substring(0, 150) +
                            (route.content.length > 150 ? "..." : "")
                        : "Sem conteúdo disponível",
                      searchTerm
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
