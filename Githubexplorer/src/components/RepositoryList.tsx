import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositores.scss'; 
import { useState, useEffect } from "react";

interface Repository{ 
  name: string;
  description: string; 
  html_url: string; 
}

export function RepositoryList(){ 
  const [repositories, setRepositores] = useState<Repository[]>([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/Matheusmottaa/repos')
      .then(response => response.json())
      .then(data => setRepositores(data))
  }, []);  

  return ( 
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(
          repository => <RepositoryItem key={repository.name} repository={repository}/>
        )}
      </ul>
    </section>
  )
}