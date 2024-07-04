// Image
import leftArrow from '@/public/image/leftArrow.png'
import rightArrow from '@/public/image/rightArrow.png'

/**
 * Component displaying a title section with arrows and title text.
 *
 * @returns A title section with directional arrows and title text.
 */
export const TitleSection = () => (
	<div className='flex items-center space-x-1'>
		<img src={leftArrow} width={20} alt='left icon' />
		<img src={rightArrow} width={20} alt='right icon' />
		<span className='text-xl font-bold'>GitHub Repositories Search</span>
	</div>
)
