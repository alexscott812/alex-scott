import { Card, Grid, Heading, Image, Text, Badge } from "theme-ui";
import CardBody from "./CardBody";
import type Project from '../types/Project';

const ProjectsGrid = ({ projects = [] }: { projects: Project[] }) => {
  return (
    <Grid gap={3} columns={[1, 2]}>
      {projects.map(project => (
        <Card key={project.id} variant="outline">
          <Image variant="cardTop" src={project.image} alt={project.title} />
          <CardBody>
            <Heading mb={2} sx={{ fontSize: 3 }}>{project.title}</Heading>
            <Text as="p" mb={2}>{project.description}</Text>
            {project.technologies.map(technology => (
              <Badge key={technology} mr={1}>{technology}</Badge>
            ))}
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectsGrid;