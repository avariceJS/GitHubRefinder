import leftArrow from '@/public/leftArrow.png'
import rightArrow from '@/public/rightArrow.png'

export const TitleSection = () => (
	<div className='flex items-center space-x-1'>
		<img src={leftArrow} width={20} alt='left icon' />
		<img src={rightArrow} width={20} alt='right icon' />
		<span className='text-xl font-bold'>GitHub Repositories Search</span>
	</div>
)
