import { useMutation } from "@tanstack/react-query";
import { Button, Dialog } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import React, { useState } from "react";
import { axiosInstance } from "services/axiosClient";
import type { IPost } from "types";
import type { IRemovePostCell } from "./RemovePostCell.model";
import {
	ButtonWrapper,
	Description,
	DialogContent,
} from "./RemovePostCell.styled";

export const RemovePostCell = ({ refetchList, id }: IRemovePostCell) => {
	const [isOpen, setOpen] = useState(false);

	const toggle = () => setOpen((prev) => !prev);

	const deletePost = async (id: IPost["_id"]) =>
		axiosInstance.delete(ENDPOINTS.POST.DELETE({ id }));

	const deleteMutation = useMutation({
		mutationFn: deletePost,
		onSuccess: () => {
			refetchList();
		},
	});

	return (
		<>
			<Button size="small" onClick={toggle}>
				Usuń
			</Button>
			<Dialog size="sm" title="Usuń post" toggle={toggle} isOpen={isOpen}>
				<DialogContent>
					<Description>Czy na pewno usunąć ten post?</Description>
					<ButtonWrapper>
						<Button outline onClick={toggle}>
							Wróć
						</Button>
						<Button onClick={() => deleteMutation.mutate(id)}>
							Tak, usuń!
						</Button>
					</ButtonWrapper>
				</DialogContent>
			</Dialog>
		</>
	);
};
