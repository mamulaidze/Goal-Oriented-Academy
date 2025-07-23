type Props = {
  title: string
  description: string
  url: string
}

export default function ProjectCard({ title, description, url }: Props) {
  return (
    <a
      href={url}
      className="block p-4 rounded-lg shadow-md bg-white hover:bg-blue-50 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </a>
  )
}
