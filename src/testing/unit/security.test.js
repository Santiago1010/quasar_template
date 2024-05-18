import { setNewPassword } from '../../helpers/security';

describe('Security Helper', () => {
	test('Set a secure form to send the password. (`setNewPassword`)', () => {
		expect(setNewPassword('Password.1234')).toBe(
			'c4431485c3eb62044002213bfa17f4a99711b0e5b85d7fbe4e7ba308dea52bc0',
		);
	});
});
