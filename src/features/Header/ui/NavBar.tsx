// Image
import github from '@/public/image/github.png'
import octocat from '@/public/image/octocat.png'
import questionMark from '@/public/image/questionMark.png'
import settings from '@/public/image/settings.png'

// Features -> SearchInput
import { SearchInput } from '../../SearchInput'

// Interfaces
import { HeaderProps } from '../interfaces'

/**
 * Navigation bar component for the application header.
 *
 * @param query - Current search query string.
 * @param handleSearch - Function to handle search input changes.
 * @returns A navigation bar with GitHub logo, search input, and settings icons.
 */
export const Navbar = ({ query, handleSearch }: HeaderProps) => (
	<nav className='flex items-center bg-[#2c353c] p-2 space-x-4'>
		<div className='flex items-center bg-white rounded-full p-[1px]'>
			<img src={github} width={33} alt='github' />
		</div>
		<div className='flex items-center bg-gray-700 rounded-lg px-3 py-1'>
			<span className='flex items-center truncate'>
				cs.github.com/rust-lang/rust/blob/.../sys_common/wtf8.rs?q=codepoint#L44
				<img
					className='border p-[1px] rounded-full mx-[13px]'
					src={questionMark}
					width={17}
					alt='question mark'
					title='Ссылка на поиск кода на GitHub'
				/>
			</span>
		</div>
		<div className='flex items-center justify-between w-full'>
			<SearchInput query={query} handleSearch={handleSearch} />
			<div className='flex space-x-4 mr-5'>
				<img src={settings} width={25} alt='settings' />
				<img
					className='bg-[#3e4851] rounded-full'
					src={octocat}
					width={25}
					alt='octocat'
				/>
			</div>
		</div>
	</nav>
)
