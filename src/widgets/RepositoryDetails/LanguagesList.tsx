import { LanguagesListProps } from './interface'

const LanguagesList = ({ languages }: LanguagesListProps) => (
	<>
		<p className='text-center text-green-600 mb-1 font-semibold'>Languages: </p>
		<ul className='mb-4'>
			{languages.edges.map(({ node }) => (
				<li key={node.name} className='text-center'>
					{node.name}
				</li>
			))}
		</ul>
	</>
)

export default LanguagesList
