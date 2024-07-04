// Interface
import { ErrorMessageProps } from './interface'

/**
 * ErrorMessage component to display error messages.
 *
 * @param message - The error message to display.
 * @returns A paragraph element displaying the error message in red.
 */
const ErrorMessage = ({ message }: ErrorMessageProps) => (
	<p className='text-red-600 font-bold'>Error: {message}</p>
)

export default ErrorMessage
