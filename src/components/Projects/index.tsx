import SectionHead from '../SectionHead';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  return (
    <section id='projects' className='py-24 bg-white bg-opacity-5'>
      <div className='container mx-auto max-w-screen-lg px-8'>
        <SectionHead>Projects</SectionHead>
        <ProjectCarousel />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card>Hello</Card>
          <Card>Hello</Card>
        </div> */}
      </div>
    </section>
  );
}
