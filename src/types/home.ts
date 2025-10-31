export interface IHeader {
	first_photo: string;
	second_photo: string;
	description: string;
}

export interface IAbout {
	photo: string;
	description: string;
}

export interface IHome {
	header: IHeader;
	about: IAbout;
}
