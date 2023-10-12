import { ProjectInterface } from '@/common.types';
import { fetchAllProjects } from '@/lib/actions';
import ProjectCard from './components/ProjectCard';

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};
const Home = async () => {
  const data = (await fetchAllProjects()) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];

  console.log('hi');

  if (projectsToDisplay.length === 0) {
    <section className='flexStart flex-col paddings'>
      <p className='no-result-text text-center'>No projects found</p>
    </section>;
  }

  return (
    <section className='flex-start flex-col paddings mb-16'>
      <h1>Categories</h1>

      <section className='projects-grid'>
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
            name={node?.createdBy?.name}
          />
        ))}
      </section>
      <h1>LoadMore</h1>
    </section>
  );
};

export default Home;
