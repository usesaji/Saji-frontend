export const pageRoutes = {
	landingPage: "/",

	authRoutes: {
		LOGIN: "/auth/login",
		REGISTER: "/auth/register",
		OTP: (email: string) => `/auth/register/verify-otp?email=${email}`,
	},
};
