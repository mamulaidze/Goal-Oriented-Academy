import Header from '@/components/Header'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  { title: 'Website 1', description: 'Simple landing page.', url: '#' },
  { title: 'App 2', description: 'React CRUD app.', url: '#' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </section>
    </main>
  )
}
