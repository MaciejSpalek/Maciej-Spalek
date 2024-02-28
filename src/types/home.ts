export interface IHeader {
  first_photo: File;
  second_photo: File;
  description: string;
}

export interface IAbout {
  photo: File;
  description: string;
}

export interface IHome {
  header: IHeader;
  about: IAbout;
}
