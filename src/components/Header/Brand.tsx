import { useEffect, useRef, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import Typewriter from "typewriter-effect";

import "./Brand.css";

const getRepos = async () => {
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN as string | undefined;
  const response = await fetch(
    "https://api.github.com/users/uygarpolat/repos",
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
};

interface Repo {
  name: string;
}

interface TypewriterClass {
  typeString(str: string): TypewriterClass;
  deleteAll(speed?: number): TypewriterClass;
  start(): TypewriterClass;
}

export default function Brand() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [payload, setPayload] = useState<string>("");
  const typewriterRef = useRef<TypewriterClass | null>(null);

  const handleRefresh = () => {
    const randomRepo = repos?.[Math.floor(Math.random() * repos.length)];
    const newPayload = randomRepo?.name || "";
    setPayload(newPayload);

    if (typewriterRef.current) {
      typewriterRef.current.deleteAll().typeString(newPayload).start();
    }
  };

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await getRepos();
        setRepos(data);
        if (Array.isArray(data) && data.length > 0) {
          const randomRepo = data[Math.floor(Math.random() * data.length)];
          setPayload(randomRepo.name);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadRepos();
  }, []);

  if (!payload) {
    return <p className="brand-text">Uygar</p>;
  }

  return (
    <div>
      <div id="text-and-button">
        <p className="brand-text">From my GitHub</p>
        <button id="refresh-button" onClick={handleRefresh}>
          <FiRefreshCw size={15} />
        </button>
      </div>
      <a
        id="repo-link"
        className="brand-text"
        href={`https://github.com/uygarpolat/${payload}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typewriter
          onInit={(typewriter: TypewriterClass) => {
            typewriterRef.current = typewriter;
            typewriter.typeString(payload).start();
          }}
          options={{
            cursor: "|",
            delay: 20,
          }}
        />
      </a>
    </div>
  );
}
