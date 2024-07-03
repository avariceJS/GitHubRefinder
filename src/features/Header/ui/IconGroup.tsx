// Image
import greenСircle from '@/public/image/greenСircle.png'
import orangeСircle from '@/public/image/orangeСircle.png'
import redСircle from '@/public/image/redСircle.png'

/**
 * Component displaying a group of colored circle icons.
 *
 * @returns A group of three colored circle icons.
 */
export const IconGroup = () => (
	<div className='flex items-center space-x-4'>
		<img src={redСircle} width={20} alt='red icon' />
		<img src={orangeСircle} width={20} alt='orange icon' />
		<img src={greenСircle} width={20} alt='green icon' />
	</div>
)
