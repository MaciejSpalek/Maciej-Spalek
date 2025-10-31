import { useSnackbar } from "notistack";

export const useMessage = () => {
	const { enqueueSnackbar } = useSnackbar();

	const message = {
		success: (content: string) =>
			enqueueSnackbar(content, {
				variant: "success",
			}),
		error: (content: string) =>
			enqueueSnackbar(content, {
				variant: "error",
			}),
	};

	return { message };
};
