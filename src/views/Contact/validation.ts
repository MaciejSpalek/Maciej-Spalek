import * as yup from "yup";

export const contactFormValidationSchema = yup.object({
	name: yup
		.string()
		.required("Name is required")
		.min(2, "Minimum 2 characters")
		.max(20, "Maximum 20 characters"),
	email: yup
		.string()
		.email("Email format is not valid")
		.required("Email is required"),
	message: yup
		.string()
		.required("Message is required")
		.max(200, "Maximum 200 characters"),
});
