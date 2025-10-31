import { useMutation } from "@tanstack/react-query";
import { Button, Dialog } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { axiosInstance } from "services/axiosClient";
import type { IRemoveArticleCell } from "./RemoveArticleCell.model";
import {
	ButtonWrapper,
	Description,
	DialogContent,
} from "./RemoveArticleCell.styled";

export const RemoveArticleCell = ({ refetchList, id }: IRemoveArticleCell) => {
	const [isOpen, setOpen] = useState(false);

	const toggle = () => setOpen((prev) => !prev);

	const deleteArticle = async (id: string) =>
		axiosInstance.delete(ENDPOINTS.ARTICLE.DELETE({ id }));

	const deleteMutation = useMutation({
		mutationFn: deleteArticle,
		onSuccess: () => {
			refetchList();
		},
	});

	return (
		<>
			<Button size="small" onClick={toggle}>
				Remove
			</Button>
			<Dialog size="sm" title="Remove post" toggle={toggle} isOpen={isOpen}>
				<DialogContent>
					<Description>Are you sure to remove this post?</Description>
					<ButtonWrapper>
						<Button onClick={toggle}>Cancel</Button>
						<Button onClick={() => deleteMutation.mutate(id)}>
							Yes, remove
						</Button>
					</ButtonWrapper>
				</DialogContent>
			</Dialog>
		</>
	);
};
