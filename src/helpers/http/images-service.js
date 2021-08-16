function getImages(limit = 5) {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 1',
      subTitle: 'Image Sub Title 1',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 2',
      subTitle: 'Image Sub Title 2',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 3',
      subTitle: 'Image Sub Title 3',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 4',
      subTitle: 'Image Sub Title 4',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 5',
      subTitle: 'Image Sub Title 5',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 6',
      subTitle: 'Image Sub Title 6',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 7',
      subTitle: 'Image Sub Title 7',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 8',
      subTitle: 'Image Sub Title 8',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 9',
      subTitle: 'Image Sub Title 9',
    },
    {
      image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
      title: 'Image Title 10',
      subTitle: 'Image Sub Title 10',
    },
  ];

  return slides.slice(0, limit);
}

export default getImages;
