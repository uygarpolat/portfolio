// Languages: JavaScript, TypeScript, Python, Go, SQL, C, C++, Assembly

// Other stack: React, Html, CSS, PostgreSQL, dbt,Snowflake, BigQuery, Airflow, PyTorch, NumPy, pandas, pytest, Django, FastAPI, Node,js, Express.js, MongoDB, Redux, Motion

// Tools: Linux Git Github Vim Bash Docker VS Code Azure CI/CD Jupyter Vite.js NPM Vercel

// Not added: SQL, Assembly, dbt, Snowflake, BigQuery
import "./Stack.css";
import DevIcons from "./DevIcons.tsx";

const stackItems = {
  languages: [
    { name: "javascript", logoStyle: "plain" },
    { name: "typescript", logoStyle: "plain" },
    { name: "python", logoStyle: "plain-wordmark" },
    { name: "go", logoStyle: "original-wordmark" },
    { name: "c", logoStyle: "original" },
    { name: "cplusplus", logoStyle: "plain" },
  ],
  frontend: [
    { name: "react", logoStyle: "original-wordmark" },
    { name: "html5", logoStyle: "plain-wordmark" },
    { name: "css3", logoStyle: "plain-wordmark" },
    { name: "redux", logoStyle: "original" },
    { name: "framermotion", logoStyle: "original-wordmark" },
    { name: "vitejs", logoStyle: "plain" },
  ],
  backend: [
    { name: "django", logoStyle: "plain-wordmark" },
    { name: "fastapi", logoStyle: "plain-wordmark" },
    { name: "nodejs", logoStyle: "plain-wordmark" },
    { name: "express", logoStyle: "original-wordmark" },
    { name: "postgresql", logoStyle: "plain-wordmark" },
    { name: "mongodb", logoStyle: "plain-wordmark" },
  ],
  tools: [
    { name: "pytorch", logoStyle: "plain-wordmark" },
    { name: "numpy", logoStyle: "plain-wordmark" },
    { name: "pandas", logoStyle: "plain-wordmark" },
    { name: "jupyter", logoStyle: "plain-wordmark" },
    { name: "git", logoStyle: "plain-wordmark" },
    { name: "github", logoStyle: "original-wordmark" },
    { name: "docker", logoStyle: "plain-wordmark" },
    { name: "linux", logoStyle: "plain" },
    { name: "vim", logoStyle: "plain" },
    { name: "vscode", logoStyle: "plain-wordmark" },
    { name: "pytest", logoStyle: "plain-wordmark" },
    { name: "azure", logoStyle: "plain-wordmark" },
    { name: "apacheairflow", logoStyle: "plain-wordmark" },
    { name: "npm", logoStyle: "original-wordmark" },
    { name: "vercel", logoStyle: "original-wordmark" },
    { name: "arduino", logoStyle: "plain-wordmark" },
  ],
};

export default function Stack() {
  const { languages, frontend, backend, tools } = stackItems;

  const renderCategory = (category: string, icons: typeof languages) => (
    <div key={category} className="stack-category">
      <h3 className="stack-category-title">{category}</h3>
      <DevIcons icons={icons} />
    </div>
  );

  return (
    <div id="stack">
      <h3 id="section-title-stack">Tech Stack</h3>
      {renderCategory("languages", languages)}
      <div className="stack-row">
        {renderCategory("frontend", frontend)}
        {renderCategory("backend", backend)}
      </div>
      {renderCategory("tools", tools)}
    </div>
  );
}
