import { ENDPOINTS, URLS } from "helpers";
import type { GetServerSidePropsContext } from "next";
import { type IPost, PostTypes } from "types";
import { Post as PostView } from "views";

interface PostProps {
	data: IPost;
	posts: IPost[];
}

const Post = ({ data, posts }: PostProps) => (
	<PostView data={data} posts={posts} />
);

export default Post;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	try {
		const postResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.POST.GET({ id: ctx?.params?.id as string })}`,
		);

		const postsResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/post/list?type=${PostTypes.painting}&limit=10`,
		);
		const { data } = await postResponse.json();
		const postsData = await postsResponse.json();

		if (!postResponse.ok || !postsResponse.ok) {
			return {
				redirect: {
					destination: URLS.home,
					permanent: false,
				},
			};
		}

		return {
			props: {
				data,
				posts: postsData,
			},
		};
	} catch {
		return {
			props: {
				data: {},
			},
		};
	}
}
