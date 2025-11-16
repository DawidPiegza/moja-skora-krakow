export interface IServiceCategory {
  title: string;
  titleENG: string;
  content: string;
  pictureURL: string;
  categoryURL: string;
  categoryKey?:
    | "eyebrow_and_eyelash_styling"
    | "permanent_makeup"
    | "lip_shaping"
    | "cosmetology"
    | "consultation";
}
