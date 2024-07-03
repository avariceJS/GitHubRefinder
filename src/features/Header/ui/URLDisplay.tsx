import lock from '@/public/lock.png'
import reboot from '@/public/reboot.png'

export const URLDisplay = () => (
	<div className='flex items-center p-[2px] rounded-md justify-between bg-[#1c1f28] w-3/5'>
		<img src={lock} width={15} alt='lock icon' />
		<span>GitHubRefinder.com</span>
		<a href='/'>
			<img className='mr-2' src={reboot} width={15} alt='reboot icon' />
		</a>
	</div>
)
