export const pageRoutes = {
	landingPage: "/",

	authRoutes: {
		LOGIN: "/auth/login",
		REGISTER: "/auth/register",
		COMPLETE_PROFILE: "/auth/register/complete-profile",
		OTP: (email: string) => `/auth/register/verify-otp?email=${email}`,
	},
};
