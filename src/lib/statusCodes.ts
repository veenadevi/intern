/**
 * Status codes that may be received from a remote WebDriver server
 */
const statusCodes = {
	0: ['Success', 'The command executed successfully.'],
	6: ['NoSuchDriver', 'A session is either terminated or not started.'],
	7: [
		'NoSuchElement',
		'An element could not be located on the page using the given search parameters.'
	],
	8: [
		'NoSuchFrame',
		'A request to switch to a frame could not be satisfied because the frame could not be found.'
	],
	9: [
		'UnknownCommand',
		'The requested resource could not be found, or a request was received using an HTTP method that is not supported by the mapped resource.'
	],
	10: [
		'StaleElementReference',
		'An element command failed because the referenced element is no longer attached to the DOM.'
	],
	11: [
		'ElementNotVisible',
		'An element command could not be completed because the element is not visible on the page.'
	],
	12: [
		'InvalidElementState',
		'An element command could not be completed because the element is in an invalid state (e.g. attempting to click a disabled element).'
	],
	13: [
		'UnknownError',
		'An unknown server-side error occurred while processing the command.'
	],
	15: [
		'ElementIsNotSelectable',
		'An attempt was made to select an element that cannot be selected.'
	],
	17: [
		'JavaScriptError',
		'An error occurred while executing user supplied JavaScript.'
	],
	19: [
		'XPathLookupError',
		'An error occurred while searching for an element by XPath.'
	],
	21: [
		'Timeout',
		'An operation did not complete before its timeout expired.'
	],
	23: [
		'NoSuchWindow',
		'A request to switch to a different window could not be satisfied because the window could not be found.'
	],
	24: [
		'InvalidCookieDomain',
		'An illegal attempt was made to set a cookie under a different domain than the current page.'
	],
	25: [
		'UnableToSetCookie',
		"A request to set a cookie's value could not be satisfied."
	],
	26: [
		'UnexpectedAlertOpen',
		'A modal dialog was open, blocking this operation'
	],
	27: [
		'NoAlertOpenError',
		'An attempt was made to operate on a modal dialog when one was not open.'
	],
	28: [
		'ScriptTimeout',
		'A script did not complete before its timeout expired.'
	],
	29: [
		'InvalidElementCoordinates',
		'The coordinates provided to an interactions operation are invalid.'
	],
	30: ['IMENotAvailable', 'IME was not available.'],
	31: ['IMEEngineActivationFailed', 'An IME engine could not be started.'],
	32: [
		'InvalidSelector',
		'Argument was an invalid selector (e.g. XPath/CSS).'
	],
	33: ['SessionNotCreatedException', 'A new session could not be created.'],
	34: [
		'MoveTargetOutOfBounds',
		'Target provided for a move action is out of bounds.'
	],
	61: ['InvalidArgument', 'Argument was invalid']
};

export default statusCodes;
