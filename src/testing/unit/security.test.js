import { setNewPassword } from '../../helpers/security'

describe('Security Helper', () => {
  test('Set a secure form to send the password. (`setNewPassword`)', () => {
    expect(setNewPassword('Password.1234')).toBe(
      '6387329359af0e8e6414bd0e6ed5ce21129b4176c8001e76d49c0f13af3365b6',
    )
  })
})
