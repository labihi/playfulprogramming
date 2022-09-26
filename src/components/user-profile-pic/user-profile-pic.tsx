import styles from "./user-profile-pic.module.scss";
import { UnicornInfo } from "uu-types";
import { ProfilePictureMap } from "utils/get-unicorn-profile-pic-map";

// TODO: Fix image loading and image 'onClick'
interface UserProfilePicProps {
	authors: Array<Pick<UnicornInfo, "id" | "color" | "name">>;
	unicornProfilePicMap: ProfilePictureMap;
	className: string;
}

export const UserProfilePic = ({
	authors,
	className,
	unicornProfilePicMap,
}: UserProfilePicProps) => {
	const hasTwoAuthors = authors.length !== 1;
	return (
		<div class={`${styles.container} ${className || ""}`}>
			{authors.map((unicorn, i) => {
				const imgAttrs = unicornProfilePicMap.find((u) => u.id === unicorn.id);
				const classesToApply = hasTwoAuthors ? styles.twoAuthor : "";

				return (
					<div
						class={`pointer ${styles.profilePicContainer} ${classesToApply}`}
						style={`border-color: ${unicorn.color};`}
					>
						<picture>
							{imgAttrs.sources.map((attrs) => (
								<source {...attrs} />
							))}
							<img
								data-testid={`author-pic-${i}`}
								{...(imgAttrs.image as any)}
								alt={unicorn.name}
								class={`circleImg ${styles.profilePicImage} ${styles.width50} ${classesToApply}`}
							/>
						</picture>
					</div>
				);
			})}
		</div>
	);
};
