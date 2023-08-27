export const convertPreview = (previewData) => {
  const previewAttributes = previewData?.post?.data?.attributes;

  return {
    id: previewAttributes?.id,
    image: previewAttributes?.image.data[0].attributes.url,
    title: previewAttributes?.title,
    description: previewAttributes?.description,
  };
};

export const convertCraft = ({ id, attributes }) => ({
  id,
  title: attributes.title,
  image: attributes.image.data.attributes.url,
  posts: attributes.posts.data.reduce((acc, { id, attributes }) => {
    return [
      ...acc,
      {
        id,
        type: attributes?.type,
        price: attributes?.price,
        state: attributes?.state,
        description: attributes?.description,
        image: attributes.image.data[0].attributes.url,
      },
    ];
  }, []),
});

export const convertSections = (sections) =>
  sections
    .reduce((acc, { id, attributes }) => {
      const newObject = {
        id,
        title: attributes.title,
        href: attributes.href,
        order: attributes.order,
        image: attributes.image?.data?.attributes?.url,
      };
      return [...acc, newObject];
    }, [])
    .sort((a, b) => a.order - b.order);
