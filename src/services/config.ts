import token from './passport';

const api = token.getSubreddit('reactjs')

const connection = async (data: any) => {
  try {
    if (data === 'hot') {
      data = await api.getHot({ limit: 10 })
    }
    if (data === 'new') {
      data = await api.getNew({ limit: 10 })
    }
    if (data === 'rising') {
      data = await api.getRising({ limit: 10 })
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default connection;