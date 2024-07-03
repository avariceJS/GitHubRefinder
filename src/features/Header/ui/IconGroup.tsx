import greenСircle from '@/public/greenСircle.png'
import orangeСircle from '@/public/orangeСircle.png'
import redСircle from '@/public/redСircle.png'

export const IconGroup = () => (
	<div className='flex items-center space-x-4'>
		<img src={redСircle} width={20} alt='red icon' />
		<img src={orangeСircle} width={20} alt='orange icon' />
		<img src={greenСircle} width={20} alt='green icon' />
	</div>
)
