import * as yup from "yup";

export const contactFormValidationSchema = yup.object({
	name: yup
		.string()
		.required("Pole jest wymagane")
		.min(2, "Minimum 2 znaki")
		.max(20, "Maximum 20 znaków"),
	email: yup
		.string()
		.email("Format jest niepoprawny")
		.required("Pole jest wymagane"),
	message: yup
		.string()
		.required("Pole jest wymagane")
		.max(200, "Maximum 200 znaków"),
});
