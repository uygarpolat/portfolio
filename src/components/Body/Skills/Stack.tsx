// Languages: JavaScript, TypeScript, Python, Go, SQL, C, C++, Assembly

// Other stack: React, Html, CSS, PostgreSQL, dbt,Snowflake, BigQuery, Airflow, PyTorch, NumPy, pandas, pytest, Django, FastAPI, Node,js, Express.js, MongoDB, Redux, Motion

// Tools: Linux Git Github Vim Bash Docker VS Code Azure CI/CD Jupyter Vite.js NPM Vercel

// Not added: SQL, Assembly, dbt, Snowflake, BigQuery
import "./Stack.css";
import DevIcons from "./DevIcons.tsx";

const stackItems = {
  languages: [
    { name: "javascript", logoStyle: "plain", colored: true },
    { name: "typescript", logoStyle: "plain", colored: true },
    { name: "python", logoStyle: "plain-wordmark", colored: true },
    { name: "c", logoStyle: "original", colored: true },
    { name: "cplusplus", logoStyle: "plain", colored: true },
  ],
  frontend: [
    { name: "react", logoStyle: "original-wordmark", colored: true },
    { name: "html5", logoStyle: "plain-wordmark", colored: true },
    { name: "css3", logoStyle: "plain-wordmark", colored: true },
    { name: "redux", logoStyle: "original", colored: true },
    { name: "framermotion", logoStyle: "original-wordmark", colored: false },
    { name: "vitejs", logoStyle: "plain", colored: true },
  ],
  backend: [
    { name: "django", logoStyle: "plain-wordmark", colored: false },
    { name: "fastapi", logoStyle: "plain-wordmark", colored: true },
    { name: "nodejs", logoStyle: "plain-wordmark", colored: true },
    { name: "express", logoStyle: "original-wordmark", colored: false },
    { name: "postgresql", logoStyle: "plain-wordmark", colored: true },
    { name: "mongodb", logoStyle: "plain-wordmark", colored: true },
    { name: "sqlalchemy", logoStyle: "plain-wordmark", colored: true },
  ],
  tools: [
    { name: "pytorch", logoStyle: "plain-wordmark", colored: true },
    { name: "numpy", logoStyle: "plain-wordmark", colored: true },
    { name: "pandas", logoStyle: "plain-wordmark", colored: true },
    { name: "jupyter", logoStyle: "plain-wordmark", colored: true },
    { name: "bash", logoStyle: "plain", colored: false },
    { name: "git", logoStyle: "plain-wordmark", colored: true },
    { name: "github", logoStyle: "original-wordmark", colored: false },
    { name: "docker", logoStyle: "plain-wordmark", colored: true },
    { name: "linux", logoStyle: "plain", colored: true },
    { name: "vim", logoStyle: "plain", colored: true },
    { name: "vscode", logoStyle: "plain-wordmark", colored: true },
    { name: "pytest", logoStyle: "plain-wordmark", colored: true },
    { name: "azure", logoStyle: "plain-wordmark", colored: true },
    { name: "apacheairflow", logoStyle: "plain-wordmark", colored: true },
    { name: "npm", logoStyle: "original-wordmark", colored: true },
    { name: "vercel", logoStyle: "original-wordmark", colored: false },
    { name: "arduino", logoStyle: "plain-wordmark", colored: true },
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
