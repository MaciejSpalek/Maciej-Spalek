// Posts
export const convertPreview = (previewData) => {
  const previewAttributes = previewData?.post?.data?.attributes;

  return {
    id: previewAttributes?.id,
    image: `http://localhost:1337${previewAttributes?.image.data[0].attributes.url}`,
    title: previewAttributes?.title,
    description: previewAttributes?.description,
  };
};

export const convertPosts = (posts) =>
  posts?.reduce((acc, { id, attributes }) => {
    const newObject = {
      id,
      image: `http://localhost:1337${attributes.image.data[0].attributes.url}`,
      title: attributes.title,
      description: attributes.description,
      date: attributes.date,
    };
    return [...acc, newObject];
  }, []);

// Projects
export const convertProjects = (projects) =>
  projects?.reduce((acc, { id, attributes }) => {
    const newObject = {
      id,
      title: attributes.title,
      date: attributes.date,
      image: `http://localhost:1337${attributes.posts?.data?.[0].attributes.image.data?.[0].attributes.url}`,
    };
    return [...acc, newObject];
  }, []);

export const convertProject = (projectData) => {
  const previewAttributes = projectData?.project?.data?.attributes;

  return {
    id: projectData?.project?.data?.id,
    title: previewAttributes?.title,
    description: previewAttributes?.description,
    posts: convertPosts(previewAttributes?.posts?.data),
  };
};
