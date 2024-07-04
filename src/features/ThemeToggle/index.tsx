// Base
import { useState } from 'react'

// Shared -> Provider

// Icon
import { Laptop, MoonStar, Sun } from 'lucide-react'

// Type
import { IconProps, Theme } from './type'

// Shared -> Hooks
import { useTheme } from '@/shared/hooks/useTheme'

/**
 * Component for toggling between light, dark, and system themes.
 *
 * @returns A component with buttons to toggle between different themes.
 */
export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)

	const themes: { name: Theme; icon: React.ComponentType<IconProps> }[] = [
		{ name: 'light', icon: Sun },
		{ name: 'dark', icon: MoonStar },
		{ name: 'system', icon: Laptop },
	]

	const currentTheme = themes.find(t => t.name === theme)

	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					className='text-blue-500'
					type='button'
					onClick={() => setIsOpen(!isOpen)}
				>
					{currentTheme && <currentTheme.icon />}
				</button>
			</div>

			{isOpen && (
				<div className='absolute z-20 right-0 mt-5 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white ring-1 ring-black ring-opacity-5 focus:outline-none text-sm'>
					<div>
						{themes.map(({ name, icon: Icon }) => (
							<button
								key={name}
								className={`flex  dark:hover:bg-[#313a41] hover:bg-gray-100 items-center px-4 py-2 font-semibold w-full  text-left ${
									name === theme ? 'text-blue-500' : ''
								}`}
								onClick={() => {
									setTheme(name)
									setIsOpen(false)
								}}
							>
								<Icon className='mr-3 h-5 w-5' />
								{name.charAt(0).toUpperCase() + name.slice(1)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
