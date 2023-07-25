import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '../components/PageContainer';
import PageHeading from '../components/PageHeading';
import ProjectsGrid from '../components/ProjectsGrid';
import type Project from '../types/Project';
import PageIcon from '../components/PageIcon';

interface Props {
  projects: Project[]
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageIcon>💾</PageIcon>
        <PageHeading>Projects</PageHeading>
        <ProjectsGrid projects={projects} />
      </PageContainer>
   </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'shakedown',
      description: 'A full stack web app to explore all Grateful Dead shows, songs, and venues ever played. Register to rate and review your favorite shows.',
      technologies: ['React', 'NodeJS', 'Express', 'MongoDB', 'Chakra-UI'],
      image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
    },
    {
      id: 2,
      title: 'notes-js',
      description: 'A note taking web app that persists data to local storage and syncs across browser tabs and windows.',
      technologies: ['React', 'TypeScript', 'Chakra-UI', 'Netlify'],
      image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'My portfolio site to showcase my work (this site right here).',
      technologies: ['React', 'Next.JS', 'TypeScript', 'Theme-UI', 'Netlify'],
      image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A description about project 4.',
      technologies: ['React', 'Node', 'SQL'],
      image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
    },
  ];

  return {
    props: {
      projects
    }
  };
};

export default Projects;
