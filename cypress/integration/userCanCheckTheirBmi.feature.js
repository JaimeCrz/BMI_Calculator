describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3001')
	})
})

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3001')
		cy.contains('Your BMI Calculator')
	})
})