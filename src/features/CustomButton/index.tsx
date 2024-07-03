// Interfaces
import { CustomButtonProps } from './interfaces'

// Base
import React from 'react'

const CustomButton: React.FC<CustomButtonProps> = ({
	isActive,
	onClick,
	children,
}) => {
	return (
		<button
			className={`hover:bg-[#374151] w-52 p-1 flex rounded-md focus:outline-none ${
				isActive ? 'bg-[#374151]' : ''
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default CustomButton
