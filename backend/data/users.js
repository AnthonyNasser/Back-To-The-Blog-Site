import bcrypt from 'bcryptjs'

const users = [
	{
		firstName: 'John',
		lastName: 'Smith',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		firstName: 'Sally',
		lastName: 'Sue',
		email: 'SallySue@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		firstName: 'Donald',
		lastName: 'Donaldo',
		email: 'DonaldDonaldo@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
