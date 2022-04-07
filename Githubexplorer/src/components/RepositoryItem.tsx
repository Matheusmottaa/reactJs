
interface RepositoryItemProps { 
  repository: { 
    name: string; 
    description: string; 
    html_url: string; 
  }
}

export function RepositoryItem(props: RepositoryItemProps){ 
  return (
    <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description ?? 'This repository does not have a description'}</p>
    <a href={props.repository.html_url}>
      Acessar repositório
    </a>
  </li>
  );
}